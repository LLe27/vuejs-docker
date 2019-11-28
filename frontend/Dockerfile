# build stage
FROM node:lts-alpine as build-stage

# Set the working directory to /app
WORKDIR /app

# Copy the /app directory contents into the container at /app
COPY /app ./

# Install node dependencies
RUN npm install

# Copy current directory into the container current directory
COPY . .

# Run command to build production files
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

# Copy distribution files to the nginx root directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]