ARG nodeVersion=10.16.3
FROM node:${nodeVersion}-alpine
ARG appPort=9000
# ARG microScannerToken

LABEL maintainer="Damien Laureaux <d.laureaux@timoa.com>" \
      org.label-schema.vendor="Timoa" \
      org.label-schema.name="Config serveur for the Chrome-tab-rotate extension" \
      org.label-schema.description="An API that provides the config/contents for the chrome-tab-rotate Chrome extension" \
      org.label-schema.url="https://timoa.com" \
      org.label-schema.vcs-url="https://github.com/timoa/chrome-tab-rotate-server" \
      org.label-schema.version=latest \
      org.label-schema.schema-version="1.0"

RUN \
      apk --no-cache update && \
      apk --no-cache upgrade && \
      apk add --no-cache ca-certificates && update-ca-certificates && \
      rm -rf /var/cache/apk/* && \
      npm install -g npm@latest && \
      mkdir -p /opt/app && \
      adduser -S app-user

# Aquasec MicroScanner support
# Search vulnerabilities under the source container
# Get an API token (free): https://microscanner.aquasec.com/signup
# Project: https://github.com/aquasecurity/microscanner

# ADD https://get.aquasec.com/microscanner /
# RUN chmod +x /microscanner && \
#   /microscanner ${microScannerToken} && \
#   echo "No vulnerabilities! " && \
#   date

WORKDIR /opt/app/
COPY ./ /opt/app/

HEALTHCHECK --interval=15s --timeout=5s --start-period=30s \
      CMD npm run docker:status

RUN \
      npm install --production --unsafe-perm && \
      npm cache clean --force

RUN chown -R app-user /opt/app
USER app-user

EXPOSE ${appPort}
CMD npm start