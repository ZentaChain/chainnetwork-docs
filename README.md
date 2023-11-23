# docs-zentanetwork
Zentanetwork Documentation: This documentation provides a comprehensive guide to Zentanetwork, a Layer 2 enhancement for the Telecom sector.

**Note:** This project is developed using Node.js version 20 (stable). Ensure you have this version installed to guarantee compatibility and optimal performance.

### Installation

### NVM 

Please follow up: https://github.com/nvm-sh/nvm

```
nvm install 20
```
```
nvm use 20
```


```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

