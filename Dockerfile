# Choose default image for dockerfile
FROM node:10
# Define the directory to which files will be copied to in the docker image
WORKDIR /usr/src/app
# Copy everything in current folder to /usr/src/app in Docker image
COPY . .
# Expose port picked by Heroku. Otherwise we couldn’t connect to the server running inside a docker container
EXPOSE $PORT
# npm run start
CMD [ “npm”, “run”, “start” ]
