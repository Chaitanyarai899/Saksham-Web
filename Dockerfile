FROM node:20-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN pnpm install
EXPOSE 3000
CMD ["pnpm", "start"]
