# EmailJS Setup Instructions for Contact Form

The contact form is now configured to use EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Log in to your EmailJS dashboard
2. Click on "Email Services" in the left menu
3. Click "Add New Service"
4. Select "Outlook" (or Gmail if you prefer)
5. Follow the instructions to connect your **eduardo.p.gflex@outlook.com** account
6. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Click on "Email Templates" in the left menu
2. Click "Create New Template"
3. You'll see a template editor with several tabs/sections:

### **Settings Tab:**

- **Template Name:** `Contact Form Submission`

### **Content Tab (This is the email Eduardo receives):**

**To Email:**

```
{{to_email}}
```

**From Name:**

```
{{from_name}}
```

**From Email:**

```
{{from_email}}
```

**Subject:**

```
New Contact Form Message from {{from_name}}
```

**Content (HTML Editor or Plain Text):**

```
Hello Eduardo,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Country: {{country}}

Subject: {{subject}}

Message:
{{message}}

Newsletter Subscription: {{newsletter}}

---
This message was sent from the EDUP GlobalFlex website contact form.
```

### **Important Notes:**

- **Do NOT configure "Auto-Reply"** - Leave it disabled (we just want Eduardo to receive emails)
- **Do NOT add attachments** - Not needed for contact form
- The variables in `{{double curly brackets}}` will be automatically replaced with form data
- Click **"Save"** when done

4. After saving, copy the **Template ID** shown at the top (looks like `template_abc123`)

**What this does:** When someone fills out your contact form, Eduardo will receive an email at eduardo.p.gflex@outlook.com with all the form details.

## Step 4: Get Your Public Key

1. Click on "Account" in the left menu
2. Scroll to "API Keys" section
3. Copy your **Public Key**

## Step 5: Set Up reCAPTCHA v3 (Spam Protection)

1. Go to https://www.google.com/recaptcha/admin/create
2. Register a new site:
   - **Label**: EDUP GlobalFlex Contact Form
   - **reCAPTCHA type**: Choose **reCAPTCHA v3**
   - **Domains**: Add `localhost` (for testing) and your production domain (e.g., `your-site.vercel.app`)
3. Accept terms and click "Submit"
4. Copy your **Site Key** (you'll need this)
5. Copy your **Secret Key** (for EmailJS dashboard)

## Step 6: Configure reCAPTCHA in EmailJS

1. Go back to EmailJS dashboard
2. Click on "Account" → "Security"
3. Scroll to "reCAPTCHA" section
4. Enable reCAPTCHA
5. Select **reCAPTCHA v3**
6. Paste your **Secret Key** from Google reCAPTCHA
7. Set the score threshold (recommended: 0.5)
8. Click "Save"

## Step 7: Configure Environment Variables

### For Local Development:

1. Create a `.env` file in the root directory (next to `package.json`)
2. Copy the contents from `.env.example`
3. Replace the placeholder values with your actual credentials:

```
NUXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_def9012
NUXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Note:** The `.env` file is already in `.gitignore` so it won't be pushed to GitHub.

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add these four variables:
   - Key: `NUXT_PUBLIC_EMAILJS_SERVICE_ID` → Value: Your EmailJS Service ID
   - Key: `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID` → Value: Your EmailJS Template ID
   - Key: `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY` → Value: Your EmailJS Public Key
   - Key: `NUXT_PUBLIC_RECAPTCHA_SITE_KEY` → Value: Your reCAPTCHA Site Key
4. Click "Save" for each one
5. Redeploy your project

## Step 8: Test the Form

1. Save all changes
2. Restart your development server (if running)
3. Go to the contact page
4. Fill out and submit the form
5. Check eduardo.p.gflex@outlook.com for the test email
6. **reCAPTCHA v3 runs invisibly** - you won't see a checkbox

## How reCAPTCHA v3 Works

- **Invisible protection** - Runs in the background, no user interaction
- **Scores users** from 0.0 (bot) to 1.0 (human)
- **Automatic verification** - EmailJS validates the score
- **No interruption** - Users don't see any CAPTCHA challenges
- **Spam prevention** - Blocks bot submissions automatically

## Free Tier Limits

**EmailJS:**

- 200 emails per month (free)
- Upgrade to paid plan if you need more

**reCAPTCHA:**

- 1 million assessments per month (free)
- More than enough for a contact form

## Troubleshooting

If emails aren't sending:

1. Check browser console for errors
2. Verify your `.env` file has the correct values
3. Restart your development server after creating/editing `.env`
4. Make sure your Outlook account is properly connected in EmailJS
5. Check EmailJS dashboard for error logs

## Support

EmailJS Documentation: https://www.emailjs.com/docs/
Support: https://www.emailjs.com/support/

---

**Current Configuration:**

- Emails will be sent to: eduardo.p.gflex@outlook.com
- Form fields included: Name, Email, Phone, Company, Country, Subject, Message, Newsletter preference
