FROM oven/bun:1.3.4 AS builder

WORKDIR /usr/src/app

COPY bun.lock package.json .
RUN bun install --frozen-lockfile

COPY . /usr/src/app
RUN bun run build

FROM nginx:1.26-alpine

RUN rm /etc/nginx/conf.d/default.conf \
 && mkdir -p /var/cache/nginx \
 && chown -R 1001:0 /var/cache/nginx \
 && chown -R 1001:0 /var/run \
 && chown -R 1001:0 /tmp \
 && chmod -R 755 /var/cache/nginx

USER 1001
COPY --from=builder /usr/src/app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
