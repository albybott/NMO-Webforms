FROM node:alpine

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

# the alpine linux image is bare bones to we need to install required libraries
RUN \
  apk add --no-cache python make g++ git && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli yarn

WORKDIR /home/node/app

# dumb-init is a simple process supervisor and init system designed to run as PID 1
ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

COPY package.json ./

# Don’t generate a yarn.lock lockfile.
RUN yarn --pure-lockfile
COPY . .

EXPOSE 8000
CMD ["dumb-init", "./node_modules/.bin/gatsby", "develop", "-H", "0.0.0.0", "-p", "8000"]