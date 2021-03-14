FROM node:14-alpine as base

RUN apk add --no-cache python make g++
WORKDIR /home/node/app
COPY package.json yarn.lock ./
RUN yarn install

# -----------------------------------------------------------------------------
FROM base as builder

WORKDIR /home/node/app
RUN rm -rf node_modules && yarn install --production --frozen-lockfile

# -----------------------------------------------------------------------------
FROM gcr.io/distroless/nodejs:14

WORKDIR /home/node/app
COPY . .
COPY --from=builder /home/node/app/node_modules ./node_modules
CMD ["-r", "esm", "-r", "dotenv/config", "src"]
