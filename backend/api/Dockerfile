FROM node:lts-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 5000

# Run app
# CMD [ "node", "index.js" ]
CMD [ "npm", "run", "dev" ]
