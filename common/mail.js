var Sendcloud     = require('sendcloud');
var config        = require('../config');
var util          = require('util');
var logger        = require('./logger');

var sendcloud     = new Sendcloud(
    config.sc_mail_opts.api_user,
    config.sc_mail_opts.api_key,
    config.sc_mail_opts.from,
    '硬派云社区',
    ''
);

/**
 * Send an email
 * @param {Object} data 邮件对象
 */
var sendMail = function (data) {
  return
};
exports.sendMail = sendMail;

/**
 * 发送激活通知邮件
 * @param {String} who 接收人的邮件地址
 * @param {String} token 重置用的token字符串
 * @param {String} name 接收人的用户名
 */
exports.sendActiveMail = function (who, token, name) {
    var to = [who];
    var subject = '硬派云社区帐号激活';
    var sub = {
      name: [name],
      key: [token]
    };
    sendcloud.sendByTemplate(to,subject,'tf_account_active',sub).then(function(info){
        console.log(info);
    });
};

/**
 * 发送密码重置通知邮件
 * @param {String} who 接收人的邮件地址
 * @param {String} token 重置用的token字符串
 * @param {String} name 接收人的用户名
 */
exports.sendResetPassMail = function (who, token, name) {
    var to = [who];
    var subject = '硬派云社区帐号重置密码';
    var sub = {
      name: [name],
      key: [token]
    };
    sendcloud.sendByTemplate(to,subject,'tf_account_resetpwd',sub).then(function(info){
        console.log(info);
    });
};
