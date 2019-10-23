FROM node:alpine
ADD homasy /usr/share/
ENTRYPOINT ["node", "server.js"]