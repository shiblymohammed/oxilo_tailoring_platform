FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy workspace config
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./

# Copy the api package
COPY apps/api ./apps/api
COPY packages ./packages

# Install dependencies
RUN pnpm install --frozen-lockfile

# Generate Prisma Client
RUN pnpm --filter @oxilo/database exec prisma generate

# Build API
WORKDIR /app/apps/api
RUN pnpm build

# --- Runner Stage ---
FROM node:20-alpine AS runner
WORKDIR /app

# Copy production dependencies and built files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/package.json ./apps/api/
COPY --from=builder /app/apps/api/prisma ./apps/api/prisma

WORKDIR /app/apps/api
EXPOSE 3001

# Run DB Migrations and start the server
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]
