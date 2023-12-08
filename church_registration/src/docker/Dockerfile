# build stage
FROM node:16.19.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN export PYTHONUNBUFFERED=1
RUN apk --no-cache add build-base
RUN apk add --update --no-cache python3 \
  && ln -sf python3 /usr/bin/python \
  && python3 -m ensurepip \
  && pip3 install --no-cache --upgrade pip setuptools
RUN yarn global add @vue/cli

RUN yarn

COPY ./ . 

CMD ["yarn", "serve", "--public", "http://localhost"] 
