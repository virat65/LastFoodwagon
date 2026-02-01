# Email Sending Issues - Debugging Guide

## Issues Found & Fixed

### 1. **Missing Error Handling in Email Functions**

- ✅ **Fixed**: Updated `Email.js` to throw errors instead of silently failing
- ✅ **Fixed**: Added proper error propagation to the controller

### 2. **No Verification Connection Test**

- ✅ **Fixed**: Added `transporter.verify()` in `EmailConfig.js` to check connection on startup
- This will show errors in console when the server starts

### 3. **Hardcoded Credentials**

- ✅ **Fixed**: Updated `EmailConfig.js` to use environment variables from `.env`
- The credentials are now read from: `process.env.verificationId` and `process.env.verificationPassword`

### 4. **No Error Response to Client**

- ✅ **Fixed**: Updated `signup` controller to return error messages to the frontend
- If email fails to send, the response will include the error details

## How to Debug Email Issues

### Step 1: Check the Server Logs

When you start the server, look for this message:

```
Email transporter ready to send messages
```

If you see an error instead:

```
Email transporter error: [error details]
```

Then your Gmail credentials or SMTP settings are wrong.

### Step 2: Verify Gmail Credentials

The email uses these credentials from `.env`:

```
verificationId=virat1322420@gmail.com
verificationPassword=gnsnwpdmsuonzfmh
```

**⚠️ IMPORTANT**: Gmail security requirements:

- If 2-Factor Authentication (2FA) is enabled on the Gmail account, you MUST use an **App Password** instead of the regular password
- To generate an App Password:
  1. Go to https://myaccount.google.com/apppasswords
  2. Select "Mail" and "Windows Computer"
  3. Gmail will generate a 16-character password
  4. Replace the password in `.env` with this new password

### Step 3: Test Email Sending

1. Make a signup request with a valid email
2. Check the server console logs for:
   - "inside sendverifaction code"
   - "Sending email to: [email]"
   - "response from sendVerificationCode"
   - "Email Sent Successfully"

3. Check the frontend response for success/failure status

### Step 4: Common Issues & Solutions

| Issue                              | Solution                                               |
| ---------------------------------- | ------------------------------------------------------ |
| `Error: Invalid login credentials` | Update Gmail password or use App Password (see Step 2) |
| `Error: ECONNREFUSED`              | Check your internet connection                         |
| `Error: SMTP connection timeout`   | Check firewall/antivirus blocking port 587             |
| `Error: relaying denied`           | Gmail blocking the email (security issue)              |
| Email never arrives                | Check spam folder, sender might be marked as spam      |

## Files Modified

1. **Email.js** - Added error throwing and return values
2. **EmailConfig.js** - Added environment variable usage and connection verification
3. **userController.js** - Added proper error handling for email sending

## Next Steps

1. **Restart your server** after making these changes
2. **Check the console** for "Email transporter ready to send messages"
3. **Test signup** and monitor the logs
4. **Update the Gmail password** in `.env` if using App Password
5. **Check spam folder** if emails still don't arrive
