[English](/README.md) | [فارسی](/README.fa_IR.md)

<div align="center">

# <img src="./client/public/sabigram-logo.svg" alt="SABIGRAM"> SABIGRAM

[![Version](https://img.shields.io/github/v/release/sabi-karami/SABIGRAM?label=version&color=blue)](https://github.com/sabi-karami/SABIGRAM/releases)
![Build](https://img.shields.io/github/actions/workflow/status/sabi-karami/SABIGRAM/build.yml)
[![Last commit](https://img.shields.io/github/last-commit/sabi-karami/SABIGRAM)](https://github.com/sabi-karami/SABIGRAM/commits/main/)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/sabi-karami/SABIGRAM)

**Secure, lightweight and self-hosted chat platform**

</div>

## Key Features

- 💬 **Chat Types**: Direct messages, groups, and channels
- 📁 **Media Support**: File uploads, voice messages, video transcoding
- 🔔 **Push Notifications**: Web push with VAPID
- 📞 **Voice & Video Calls**: Real-time peer-to-peer and secure voice and video calling
- 📡 **Remote Channels**: Mirror Telegram or SABIGRAM channels (v0.10.3+)
- 🛡️ **Admin Panel**: Full management interface with owner role (v0.11.0+)
- 🔒 **Security**: Encryption at rest, bcrypt hashing, rate limiting
- 📱 **PWA**: Installable progressive web app
- ☁️ **Cloud Deployment**: PaaS and CaaS deployment with object storage support
- 🌍 **i18n**: English and Persian/Farsi support

## Quick Start

The easiest way to install SABIGRAM is the deployment script. On an Ubuntu server (22.04+) with sudo access, run:

```bash
curl -fsSL https://raw.githubusercontent.com/sabi-karami/SABIGRAM/main/scripts/install.sh | bash
```

The script handles dependencies, builds the app, configures Nginx, and can set up SSL for you. After installation, access it again anytime with:

```bash
sabigram-deploy
```

> [!TIP]
> A domain name pointing to your server's public IP is recommended, and HTTPS is required for push notifications (except on `localhost`).

## Documentation

Full documentation lives at [SABIGRAM Docs](https://github.com/sabi-karami/SABIGRAM/tree/main/docs):

- [Deployment Script](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Deployment-Script.md)
- [Install via Docker](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Installation-Docker.md)
- [Cloud Deployment](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Cloud-Deployment.md)
- [Manual Installation](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Manual-Installation.md)
- [Configure Nginx](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Nginx-Configuration.md)
- [SSL Certificates](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/SSL-Certificates.md)
- [Running behind a CDN](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/CDN-Setup.md)
- [Running behind a domain + subpath](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Subpath-Hosting.md)
- [Environment Variables](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Environment-Variables.md)
- [Object Storage](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Object-Storage.md)
- [Media Worker](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Media-Worker.md)
- [Admin Panel](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Admin-Panel.md)
- [Remote Channel Setup](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Remote-Channel-Setup.md)
- [Push Notification Proxy](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Push-Notification-Proxy.md)
- [Voice & Video Calls](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Voice-Video-Calls.md)
- [Updating the deployed app](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Updating.md)
- [Database Commands](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Database-Commands.md)
- [Troubleshooting](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/Troubleshooting.md)

## Author

- **Saheb Karami** — [@sabi-karami](https://github.com/sabi-karami) · [sahebkarami.com](https://www.sahebkarami.com)

## Contributing

- Issues and pull requests are welcome at `https://github.com/sabi-karami/SABIGRAM/issues`.
- Checkout [Contributing](CONTRIBUTING.md) guideline for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
