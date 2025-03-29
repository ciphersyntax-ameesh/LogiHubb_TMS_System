# Integrating Formspree with LogiHubb's Registration Form

This guide explains how to connect the LogiHubb registration form to Formspree for handling form submissions on static hosting environments.

## What is Formspree?

Formspree is a form backend service that allows you to set up a form without any server-side code. It collects submissions, verifies them against spam, and delivers them to your email inbox.

## Setting Up Formspree

1. **Create a Formspree Account**
   - Go to [Formspree.io](https://formspree.io/)
   - Sign up for a free account

2. **Create a New Form**
   - After logging in, click "New Form"
   - Give your form a name (e.g., "LogiHubb Registration")
   - Choose the email where you want to receive form submissions
   - Click "Create Form"

3. **Get Your Form Endpoint**
   - Formspree will provide you with a unique endpoint URL
   - It will look something like: `https://formspree.io/f/xabcdefg`
   - Copy this endpoint for later use

## Modifying the RegisterForm Component

Update the `RegisterForm.tsx` component to work with Formspree:

```jsx
// In client/src/components/register/RegisterForm.tsx
// Replace the existing onSubmit function with this implementation

const onSubmit = async (data: InsertLead) => {
  setIsSubmitting(true);
  try {
    // Send the form data to Formspree
    const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "Your demo request has been submitted. We'll contact you shortly.",
        variant: "default",
      });
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    toast({
      title: "Something went wrong",
      description: "Failed to submit your request. Please try again.",
      variant: "destructive",
    });
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};
```

Replace `YOUR_FORMSPREE_ENDPOINT` with the unique ID from your Formspree form URL.

## Additional Formspree Features

### Form Validation

Formspree automatically validates email addresses, but your form already uses Zod for validation before submission. This provides two layers of validation:

1. Client-side validation with Zod
2. Server-side validation with Formspree

### Spam Protection

Formspree includes built-in spam protection. You don't need to add a captcha to your form unless you're experiencing a high volume of spam.

### Email Notifications

You'll receive email notifications for each form submission. You can customize these notifications in your Formspree dashboard:

1. Go to your form settings in Formspree
2. Navigate to "Email Notifications"
3. Customize the email subject, reply-to behavior, and other settings

### Webhooks (Premium Feature)

If you need to trigger additional actions when a form is submitted, Formspree's paid plans offer webhooks that can connect to services like Zapier or Make (Integromat).

## Testing Your Integration

After updating the code:

1. Deploy your site
2. Submit a test registration
3. Verify that you receive the submission in your Formspree dashboard and email

## Troubleshooting

If you encounter issues with the Formspree integration:

1. **Form Submissions Not Received**
   - Check that you've entered the correct Formspree endpoint
   - Verify that your Formspree account is active
   - Make sure your email isn't filtering Formspree notifications as spam

2. **CORS Errors**
   - Formspree allows submissions from any domain by default
   - If you see CORS errors, check your browser console for specific error messages

3. **Validation Errors**
   - Check that your form field names match what Formspree expects
   - Ensure required fields are properly marked and validated

4. **Limit Reached**
   - Free Formspree accounts have submission limits
   - Upgrade to a paid plan if you need more submissions