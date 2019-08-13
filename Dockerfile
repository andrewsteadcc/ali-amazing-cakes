FROM ubuntu:latest
MAINTAINER Andy Stead

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
#RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g http-server

ADD index.html /usr/app/index.html
WORKDIR /usr/app

EXPOSE 80

CMD ["http-server", "-s"]