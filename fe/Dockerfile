# FROM node:19.4-bullseye AS build
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN --mount=type=cache,target=/usr/src/app/.npm \
#   npm set cache /usr/src/app/.npm && \
#   npm install
# COPY . .
# RUN npm run build

FROM ubuntu:latest
WORKDIR /bash_directory
COPY ./bash_directory .
RUN chmod +x /bash_directory/run.sh
CMD [ "/bash_directory/run.sh" ]