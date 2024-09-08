FROM node:18.20.4-alpine3.20

# For best security practices, the container application should not run on root user.
# Creating a new sytem user and group, and allowing the container to use that user
RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5173
CMD ["npm", "start"]