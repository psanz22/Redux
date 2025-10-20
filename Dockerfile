# Stage 1: Install dependencies and build the application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json package-lock.json ./

# Install all dependencies (including devDependencies for the build)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Create the final production image
FROM node:20-alpine AS runner
WORKDIR /app

# Copy package.json to install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# The command to start the application
CMD ["npm", "start"]