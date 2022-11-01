FROM node:lts AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:lts
COPY --from=build --chown=node:node /app /app
USER node
ENV PATH="/app/node_modules/.bin:$PATH"
CMD cd /app && \
    exec docusaurus serve --build --port 8000 --host 0.0.0.0 --config docusaurus.config.k8s.js
