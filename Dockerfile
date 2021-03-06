# build environment
FROM node:9.10.0 as builder

RUN \
  apt-get clean && \
  apt-get -q update && \
  apt-get install -y build-essential

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./package.json /usr/src/app/package.json
RUN yarn install

COPY . /usr/src/app

RUN yarn build

FROM nginx:1.13.9-alpine

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
