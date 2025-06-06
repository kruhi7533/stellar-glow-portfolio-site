
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { emailjsConfig, EmailTemplateParams } from '@/config/emailjs';
import { Mail, AlertCircle, CheckCircle, Send, Loader2, Settings } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const isConfigured = emailjsConfig.serviceId !== 'YOUR_SERVICE_ID' && 
                      emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID' && 
                      emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter your message.",
        variant: "destructive",
      });
      return false;
    }
    
    if (formData.message.trim().length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please enter a message with at least 10 characters.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    if (!isConfigured) {
      toast({
        title: "Configuration Required",
        description: "EmailJS credentials need to be configured. Check the console for setup instructions.",
        variant: "destructive",
      });
      console.log('EmailJS Setup Instructions:');
      console.log('1. Go to https://www.emailjs.com and create an account');
      console.log('2. Create an email service and get your Service ID');
      console.log('3. Create an email template and get your Template ID');
      console.log('4. Get your Public Key from Account settings');
      console.log('5. Update the values in src/config/emailjs.ts');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams: EmailTemplateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_name: "Ruhi Naaz",
        reply_to: formData.email.trim()
      };

      console.log('Sending email with EmailJS...');

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setEmailSent(true);
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success state after 5 seconds
      setTimeout(() => setEmailSent(false), 5000);

    } catch (error: any) {
      console.error('EmailJS error:', error);
      
      let errorMessage = "Failed to send message. Please try again or contact me directly.";
      
      if (error.status === 400) {
        errorMessage = "Invalid email configuration. Please check the setup.";
      } else if (error.status === 401) {
        errorMessage = "Email service authentication failed. Please check credentials.";
      } else if (error.status === 402) {
        errorMessage = "Email quota exceeded. Please try again later or contact me directly.";
      } else if (error.text) {
        errorMessage = `Error: ${error.text}`;
      }

      toast({
        title: "Failed to Send Message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (emailSent) {
    return (
      <Card className="w-full max-w-2xl mx-auto animate-bounce-in">
        <CardContent className="text-center py-12">
          <div className="animate-bounce mb-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
            Message Sent! 🎉
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Thank you for reaching out! I'll get back to you within 24 hours.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setEmailSent(false)}
            className="border-green-300 text-green-700 hover:bg-green-50 dark:border-green-600 dark:text-green-300 dark:hover:bg-green-900/20"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto animate-slide-in-left">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          Get In Touch
        </CardTitle>
        <CardDescription>
          Send me a message and I'll get back to you as soon as possible.
        </CardDescription>
        
        {!isConfigured && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4 animate-fade-in">
            <div className="flex items-start gap-2">
              <Settings className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">EmailJS Setup Required</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  To enable email functionality, please configure EmailJS in 
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded text-xs mx-1">src/config/emailjs.ts</code>
                  Check the console for detailed setup instructions.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
                disabled={isSubmitting}
                className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
            
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                disabled={isSubmitting}
                className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
          </div>
          
          <div className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or just say hello! I'd love to hear from you."
              rows={5}
              required
              disabled={isSubmitting}
              className="mt-1 transition-all duration-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 resize-none"
              maxLength={500}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {formData.message.length}/500 characters
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full btn-primary bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 animate-slide-in-left" 
            disabled={isSubmitting || !isConfigured}
            style={{ animationDelay: '0.4s' }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
          
          {!isConfigured && (
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Note: Email functionality requires EmailJS configuration
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
