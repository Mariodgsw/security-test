FROM node:18-alpine

WORKDIR /app

# Install dependencies first (including dev dependencies)
COPY package*.json ./
RUN npm install

# Copy configuration files
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./

# Copy source files
COPY src ./src
COPY public ./public

# Set environment variables
ENV NODE_ENV=development
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true

# Expose port
EXPOSE 3000

# Start the development server with host flag for Docker
CMD ["npm", "start", "--", "--host", "0.0.0.0"] 