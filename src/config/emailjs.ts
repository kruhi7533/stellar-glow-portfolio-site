
// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_npxab2j', // Get this from EmailJS dashboard
  templateId: 'template_odv5eyf', // Get this from EmailJS dashboard  
  publicKey: 'tPK7EZQ30mAopGXnz', // Get this from EmailJS dashboard
};

// Template variables that will be sent to EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  to_name: string;
  reply_to: string;
}

// Instructions for setting up EmailJS:
// 
// 1. Go to https://www.emailjs.com and create a free account
// 
// 2. Create an Email Service:
//    - Go to Email Services
//    - Click "Add New Service"
//    - Choose your email provider (Gmail, Outlook, etc.)
//    - Follow the setup instructions
//    - Copy the Service ID and replace 'YOUR_SERVICE_ID' above
// 
// 3. Create an Email Template:
//    - Go to Email Templates
//    - Click "Create New Template"
//    - Use these variables in your template:
//      {{from_name}} - sender's name
//      {{from_email}} - sender's email
//      {{message}} - the message content
//      {{to_name}} - your name (recipient)
//      {{reply_to}} - sender's email for replies
//    - Example template:
//      Subject: New Portfolio Contact: {{from_name}}
//      Body: 
//        Hello {{to_name}},
//        
//        You have received a new message from {{from_name}} ({{from_email}}):
//        
//        {{message}}
//        
//        Reply to: {{reply_to}}
//        
//        Best regards,
//        Your Portfolio Contact Form
//    - Save and copy the Template ID to replace 'YOUR_TEMPLATE_ID' above
// 
// 4. Get your Public Key:
//    - Go to Account > General
//    - Copy the Public Key and replace 'YOUR_PUBLIC_KEY' above
// 
// 5. Test the form:
//    - Make sure all three values are replaced
//    - Try sending a test message
//    - Check your email for the message

