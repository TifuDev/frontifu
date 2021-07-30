FROM node:latest
WORKDIR /home/node/frontifu
COPY . /home/node/frontifu/.
RUN npm install
EXPOSE 80
CMD [ "npm", "start" ]