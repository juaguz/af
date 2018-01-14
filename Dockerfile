FROM node:7.8.0
RUN mkdir -p /app
EXPOSE 3000
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
ENV HOST 0.0.0.0
ENV PORT 3000
CMD [ "npm", "run", "start" ]



