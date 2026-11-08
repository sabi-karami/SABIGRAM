[English](/README.md) | [فارسی](/README.fa_IR.md)

<div align="center">

# <img src="./client/public/sabigram-logo.svg" alt="SABIGRAM"> SABIGRAM

[![Version](https://img.shields.io/github/v/release/sabi-karami/SABIGRAM?label=version&color=blue)](https://github.com/sabi-karami/SABIGRAM/releases)
![Build](https://img.shields.io/github/actions/workflow/status/sabi-karami/SABIGRAM/build.yml)
[![Last commit](https://img.shields.io/github/last-commit/sabi-karami/SABIGRAM)](https://github.com/sabi-karami/SABIGRAM/commits/main/)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/sabi-karami/SABIGRAM)

**پلتفرم پیام‌رسان امن و سبک برای میزبانی شخصی**

</div>

## قابلیت‌های کلیدی

- 💬 **انواع چت**: پیام مستقیم، گروه و کانال
- 📁 **پشتیبانی از رسانه**: آپلود فایل، پیام صوتی، تبدیل ویدئو
- 🔔 **Push Notification**: اعلان وب با VAPID
- 📞 **تماس صوتی و تصویری**: تماس‌های صوتی و تصویری نظیر‌به‌نظیر و امن
- 📡 **کانال‌های ریموت**: آینه‌کردن کانال‌های Telegram یا SABIGRAM (نسخه v0.10.3+)
- 🛡️ **پنل مدیریت**: رابط مدیریتی کامل با نقش مالک (نسخه v0.11.0+)
- 🔒 **امنیت**: رمزنگاری، هش bcrypt، محدودیت نرخ
- 📱 **PWA**: اپلیکیشن وب نصب‌شدنی
- ☁️ **نصب ابری**: نصب به صورت PaaS و CaaS با پشتیبانی از فضای ابری
- 🌍 **چندزبانه**: پشتیبانی از انگلیسی و فارسی

## نصب سریع

ساده‌ترین روش نصب SABIGRAM، اسکریپت نصب آسان است. روی یک سرور Ubuntu (نسخه 22.04+) با دسترسی `sudo` این دستور را اجرا کنید:

```bash
curl -fsSL https://raw.githubusercontent.com/sabi-karami/SABIGRAM/main/scripts/install.sh | bash
```

این اسکریپت پیش‌نیازها را نصب می‌کند، برنامه را build می‌کند، Nginx را کانفیگ می‌کند و می‌تواند SSL را هم برایتان راه‌اندازی کند. بعد از نصب، هر زمان با این دستور دوباره به آن دسترسی دارید:

```bash
sabigram-deploy
```

> [!TIP]
> داشتن یک دامنه که به IP عمومی سرور شما اشاره کند پیشنهاد می‌شود، و برای push notification به HTTPS نیاز دارید (به‌جز روی `localhost`).

## مستندات

مستندات کامل در [SABIGRAM Docs](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa.md/) قرار دارد:

- [اسکریپت نصب](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Deployment-Script.md)
- [نصب از طریق Docker](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Installation-Docker.md)
- [نصب ابری](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Cloud-Deployment.md)
- [نصب دستی](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Manual-Installation.md)
- [کانفیگ Nginx](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Nginx-Configuration.md)
- [گواهی‌های SSL](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/SSL-Certificates.md)
- [اجرا پشت CDN](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/CDN-Setup.md)
- [اجرا روی دامنه + subpath](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Subpath-Hosting.md)
- [متغیرهای محیطی](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Environment-Variables.md)
- [فضای ابری](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Object-Storage.md)
- [ورکر مدیا](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Media-Worker.md)
- [پنل مدیریت](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Admin-Panel.md)
- [راه‌اندازی Remote Channel](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Remote-Channel-Setup.md)
- [پراکسی Push Notification](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Push-Notification-Proxy.md)
- [تماس صوتی و تصویری](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Voice-Video-Calls.md)
- [به‌روزرسانی برنامه](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Updating.md)
- [دستورات دیتابیس](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Database-Commands.md)
- [عیب‌یابی](https://github.com/sabi-karami/SABIGRAM/blob/main/docs/fa/Troubleshooting.md)

## سازنده

- **صاحب کرمی** — [@sabi-karami](https://github.com/sabi-karami) · [sahebkarami.com](https://www.sahebkarami.com)

## مشارکت

- Issue و Pull Request در آدرس `https://github.com/sabi-karami/SABIGRAM/issues` پذیرفته می‌شود.
- برای اطلاعات بیشتر [راهنمای مشارکت](CONTRIBUTING.md) را ببینید.

## لایسنس

این پروژه تحت لایسنس MIT منتشر شده است. فایل [LICENSE](LICENSE) را ببینید.
