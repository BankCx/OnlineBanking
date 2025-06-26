# Intentionally vulnerable - using outdated base image
FROM node:12-alpine

# Intentionally vulnerable - running as root
USER root

# Intentionally vulnerable - no healthcheck
# Intentionally vulnerable - no non-root user
# Intentionally vulnerable - no security scanning

WORKDIR /app

# Intentionally vulnerable - copying package files first (bad layer caching)
COPY package*.json ./

# Intentionally vulnerable - no package integrity check
RUN npm install

# Intentionally vulnerable - copying all files (including node_modules)
COPY . .

# Intentionally vulnerable - no build optimization
RUN npm run build

# Intentionally vulnerable - using outdated nginx
FROM nginx:1.29.0

# Intentionally vulnerable - no security headers
# Intentionally vulnerable - no SSL configuration
# Intentionally vulnerable - no rate limiting

COPY --from=0 /app/build /usr/share/nginx/html

# Intentionally vulnerable - exposing all ports
EXPOSE 80

# Intentionally vulnerable - no healthcheck
# Intentionally vulnerable - no resource limits
# Intentionally vulnerable - no security context
# Intentionally vulnerable - no read-only filesystem 