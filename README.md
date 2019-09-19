# Chrome-tab-rotate Webserver

[![Build Status][travis-badge]][travis-url]
[![Docker Pulls][docker-badge]][docker-url]
[![Quality Gate Status][sonarcloud-status-badge]][sonarcloud-url]
[![Security Rating][sonarcloud-security-badge]][sonarcloud-url]
[![Maintainability Rating][sonarcloud-maintainability-badge]][sonarcloud-url]

[![Bugs][sonarcloud-bugs-badge]][sonarcloud-url]
[![Code Smells][sonarcloud-codesmells-badge]][sonarcloud-url]
[![Coverage][sonarcloud-coverage-badge]][sonarcloud-url]
[![Duplicated Lines (%)][sonarcloud-duplicated-badge]][sonarcloud-url]

A Webserver that provides the config/contents for the [Tab Rotate][tab-rotate-chrome-extension] Chrome extension.

The Chrome extension is open-source as [chrome-tab-rotate][chrome-tab-rotate-github].

> This project is part of a bigger project called [ScreenKit][screenkit-github] that includes the use of Raspberry PI, [Chilipie Kiosk][chilipie-kiosk-github] (Linux OS) that starts [Chromium][chromium-project] in fullscreen and other features, the [Tab Rotate Chrome extension][tab-rotate-chrome-extension] and this project that manage the contents and screens.

## Features

* Simple way to rotate contents on multiple screens!
* Allow to use multiple [Chrome Tab Rotate][tab-rotate-chrome-extension] config files (playlists)
* Webserver (Fastify) that can serves playlists and local contents (images, videos, etc.)
* Default playlist for new screens or for using the same content on all the screens
* Custom playlist based on the IP of the screen (support also local proxy server)
* Available as a Docker image or by using npm/pm2

## Warning

This project is meant to be use on a private network and not hosted on Internet.

Currently, there is no authentication, that mean that anyone in your local network can access to the playlist(s). Don't include any credential (Basic Auth or token) under your URLs if you want to keep them secret.

Also don't add content that needs to stay private for the same reason.

## How to start

### Docker image

#### Default with demo contents

The simplest way to test this project is by using Docker. The command below will launch the server with the demo contents from the `src/examples/default.json` playlist.

```bash
docker-compose up
```

Now, you can see the Playlist (JSON format) from your browser or command line at [http://localhost:9000](http://localhost:9000)

```bash
curl http://localhost:9000
```

#### Customize with your own contents and screens

Simply copy the config files from the `src/examples` folder to the `config` folder (root of the project) and update these JSON files:

| From || To |
|---|---|---|
|`src/examples/inventory.json`|=>|`config/inventory.json`|
|`src/examples/playlists/default.json`|=>|`config/playlists/default.json`|

If you want to have a specific playlist per screen, just create a playlist that will use the screen name that you filled on the inventory file.

For example, if you have the `monitoring-01` and `monitoring-02` in your your `inventory.json` file like this:

```json
{
  "screens": [
    {
      "name": "monitoring-01",
      "ip": "10.0.0.11"
    },
    {
      "name": "monitoring-02",
      "ip": "10.0.0.12"
    }
  ]
}
```

You can create a playlist for each, by naming the file like this:

`config/playlists/monitoring-01.json`
`config/playlists/monitoring-02.json`

Now, restart the Docker container to see the changes:

```bash
docker-compose down
docker-compose up
```

```bash
curl http://localhost:9000
```

### Configure the Tab Rotate Chrome extension

Now that you have a web server up and running, you can set the options of the Tab Rotate Chrome extension to `Remote Url` and use:

* `http://localhost:9000` if the webserver is running on the same host as your Chrome browser
* `http://{ip of your webserver}:9000` if you're using a different host to test the Chrome Extension

![Tab Rotate Chrome extension options][tab-rotate-chrome-extension-options]

## API Endpoints

| Name | Method | Endpoint | Description |
| --- | --- | --- | --- |
| Playlist | `GET` | `/` | Provides the playlist based on the IP that request the endpoint or the `default` one|
| Content | `GET` | `/content/:path` | Serve the local content from the `path` from the `/public` folder |
| Healthcheck | `GET` | `/_health` | Allow to perform a healthcheck to see if the app is still live |

## Tests

### API

You can launch the Docker container or node.js app and test the endpoints with Postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3b0cb7352985dbae6f99)

### NPM

#### Unit-tests

```bash
npm test
```

#### Coverage

```bash
npm run test:coverage
```

#### Functional

```bash
npm run test:functional
```

*Will be replace by `chai-http` soon.*

## TODO

* Split screen configuration and playlist
* Add an endpoint to get random content from a folder (images for ex.)
* Allow to edit the playlists and screens via a CMS instead of JSON files
* Allow to schedule specific content (JIRA board during morning standup for ex.)
* Support multiple playlists for the same IP (2x HDMI on the RPi 4 for ex.)

[sonarcloud]: https://sonarcloud.io/about
[travis-badge]: https://travis-ci.com/timoa/chrome-tab-rotate-server.svg?branch=master
[travis-url]: https://travis-ci.com/timoa/chrome-tab-rotate-server
[docker-badge]: https://img.shields.io/docker/pulls/timoa/chrome-tab-rotate-server.svg
[docker-url]: https://hub.docker.com/r/timoa/chrome-tab-rotate-server
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=timoa_chrome-tab-rotate-server
[sonarcloud-status-badge]: https://sonarcloud.io/api/project_badges/measure?project=timoa_chrome-tab-rotate-server&metric=alert_status
[sonarcloud-security-badge]: https://sonarcloud.io/api/project_badges/measure?project=timoa_chrome-tab-rotate-server&metric=security_rating
[sonarcloud-maintainability-badge]: https://sonarcloud.io/api/project_badges/measure?project=timoa_chrome-tab-rotate-server&metric=sqale_rating
[sonarcloud-bugs-badge]: https://sonarcloud.io/api/project_badges/measure?project=timoa_chrome-tab-rotate-server&metric=bugs
[sonarcloud-codesmells-badge]: https://sonarcloud.io/api/project_badges/measure?project=timoa_chrome-tab-rotate-server&metric=code_smells
[sonarcloud-coverage-badge]: https://sonarcloud.io/api/project_badges/measure?project=timoa_chrome-tab-rotate-server&metric=coverage
[sonarcloud-duplicated-badge]: https://sonarcloud.io/api/project_badges/measure?project=timoa_chrome-tab-rotate-server&metric=duplicated_lines_density
[screenkit-github]: https://github.com/timoa/screenkit
[tab-rotate-chrome-extension]: https://chrome.google.com/webstore/detail/tab-rotate/pjgjpabbgnnoohijnillgbckikfkbjed
[tab-rotate-chrome-extension-options]: /doc/images/tab-rotate-options.jpg
[chrome-tab-rotate-github]: https://github.com/KevinSheedy/chrome-tab-rotate
[chilipie-kiosk-github]: https://github.com/futurice/chilipie-kiosk
[chromium-project]: https://www.chromium.org/
