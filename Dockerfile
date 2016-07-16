FROM centos:centos7
MAINTAINER toughcloud <support@toughstruct.com>

RUN yum update -y
RUN yum install -y epel-release
RUN yum install -y git nodejs
RUN yum clean all

RUN git clone -b master git@github.com:talkincode/nodeclub.git /opt/nodeclub
RUN /opt/nodeclub && make install

ADD runclub /usr/local/bin/runclub
RUN chmod +x /usr/local/bin/runclub

EXPOSE 3000

CMD ["/usr/local/bin/runclub"]
