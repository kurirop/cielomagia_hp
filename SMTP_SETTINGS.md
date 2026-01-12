# SMTP Settings Guide

To enable email sending, please create a file named `.env.local` in the root directory (`f:/anti_prj/cmagihp/.env.local`) and add the following configuration.

Replace the placeholders with your actual SMTP server details.

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=no-reply@cielomagia.com

# Where to send the inquiries
CONTACT_EMAIL=admin@cielomagia.com
```

**Note for Gmail users:**
You usually need to generate an "App Password" in your Google Account settings (Security > 2-Step Verification > App passwords) to use as `SMTP_PASS`.
