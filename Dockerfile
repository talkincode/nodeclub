FROM centos:centos7
MAINTAINER toughcloud <support@toughstruct.com>

RUN yum update -y
RUN yum install -y epel-release
RUN yum install -y gcc make git nodejs npm openssl openssl-devel zip unzip libjpeg-devel libpng-devel
RUN yum clean all

RUN git clone -b master https://github.com/talkincode/nodeclub.git /opt/nodeclub
RUN cd /opt/nodeclub && make install
RUN cd /opt/nodeclub && npm install sendcloud

ADD runclub /usr/local/bin/runclub
RUN chmod +x /usr/local/bin/runclub

EXPOSE 3000

CMD ["/usr/local/bin/runclub"]
