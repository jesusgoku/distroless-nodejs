# Distroless NodeJS

Running NodeJS app into distroless Docker image.

# Setup

```bash
# Setting app for your environment
cp .env.dist .env

# Install dependencies for running local
yarn install
```

# Running

```bash
# For running local
yarn run <start|dev>

# For running into Docker
yarn run <start|dev>:docker
```
