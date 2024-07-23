FROM node:14.20.0-slim
WORKDIR /app
COPY . .
RUN npm i 
CMD ["npm", "run", "start"]