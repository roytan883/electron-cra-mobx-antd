# electron-cra-mobx-antd

Boilerplate linking [electron](http://electron.atom.io/) with [create-react-app](https://github.com/facebookincubator/create-react-app), [Mobx](https://github.com/mobxjs/mobx) and [Ant.Design](https://github.com/ant-design/ant-design)

> This Boilerplate has solved the [create-react-app](https://github.com/facebookincubator/create-react-app) "require" and "process" wrong at electron render process: [window.require issue](https://github.com/electron/electron/issues/7300)

![screen](https://github.com/roytan883/electron-cra-mobx-antd/blob/master/screen.jpg)

## Usage

Run tests:
```bash
yarn test
```

Run in dev mode:
```bash
yarn electron-dev
```

Build:
```bash
yarn build
```

Package:
```bash
yarn electron-pack
```
> if electron-pack error: as electron-builder(19.11.1) download bin failed, you can manually download it from:

```
https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.1.13/nsis-3.0.1.13.7z
https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.0.0/nsis-resources-3.0.0.7z
https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-1.9.0/winCodeSign-1.9.0.7z
```

> decompress them to:

```
C:\Users\YOUR_USER_NAME\AppData\Local\electron-builder\cache\nsis\nsis-3.0.1.13
C:\Users\YOUR_USER_NAME\AppData\Local\electron-builder\cache\nsis-resources\nsis-resources-3.0.0
C:\Users\YOUR_USER_NAME\AppData\Local\electron-builder\cache\winCodeSign\winCodeSign-1.9.0
```

> then call 'yarn electron-pack'

