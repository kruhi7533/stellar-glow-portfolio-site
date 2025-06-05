
// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Get this from EmailJS dashboard
  templateId: 'YOUR_TEMPLATE_ID', // Get this from EmailJS dashboard  
  publicKey: 'YOUR_PUBLIC_KEY', // Get this from EmailJS dashboard
};

// Template variables that will be sent to EmailJS
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  message: string;
  to_name: string;
}
