FROM node:8
WORKDIR /home/node/app

ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

COPY package.json ./
RUN yarn --pure-lockfile
COPY . .

EXPOSE 5000
CMD ["dumb-init", "./node_modules/.bin/gatsby", "develop", "-H", "0.0.0.0", "-p", "5000"]