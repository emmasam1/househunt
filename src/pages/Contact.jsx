import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [form] = Form.useForm ? Form.useForm() : [null];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = (values) => {
    setIsSubmitting(true);
    message.loading({ content: 'Sending your message...', key: 'contact' });
    
    setTimeout(() => {
      message.success({ content: 'Thank you! Your message has been sent successfully.', key: 'contact', duration: 3 });
      setIsSubmitting(false);
      if (form) form.resetFields();
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
            Contact Our Team
          </h1>
          <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto">
            Have questions about an active listing, booking confirmation, or escrow security on househunt? Reach out and we’ll reply as soon as possible.
          </p>
        </div>

        {/* Balanced Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Informational Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Get in touch directly</h2>
                <p className="text-sm text-slate-400 mt-1">Prefer direct channels? Skip the form entirely.</p>
              </div>

              {/* Channels Grid */}
              <div className="space-y-6">
                
                {/* Email Info */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">Email Support</h3>
                    <p className="text-sm text-slate-600 mt-0.5">hello@househunt.com</p>
                    <p className="text-xs text-slate-400 mt-1">Expect a response within 2 business hours.</p>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">Call Hotline</h3>
                    <p className="text-sm text-slate-600 mt-0.5">+234 (0) 812 345 6789</p>
                    <p className="text-xs text-slate-400 mt-1">Monday to Friday, 9:00 AM – 5:00 PM.</p>
                  </div>
                </div>

                {/* HQ Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">HQ Office Location</h3>
                    <p className="text-sm text-slate-600 mt-0.5">Yaba Tech District, Lagos, Nigeria</p>
                    <p className="text-xs text-slate-400 mt-1">Available for physical verification appointments.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Availability Indicator */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-slate-500">
              <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs font-medium">
                Our support channels are currently active and running.
              </span>
            </div>
          </div>

          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="mb-6 flex items-center gap-2 text-sky-600">
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wider uppercase">Online Inquiry</span>
            </div>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              requiredMark={false}
            >
              {/* Identity Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Form.Item
                  label={<span className="text-xs font-medium text-slate-700">Full Name</span>}
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name.' }]}
                >
                  <Input 
                    placeholder="e.g., Chidi Okafor" 
                    className="h-11 rounded-lg border-slate-200 hover:border-slate-300 focus:border-sky-500 shadow-2xs transition-all text-sm"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-xs font-medium text-slate-700">Email Address</span>}
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email.' },
                    { type: 'email', message: 'Please enter a valid email address.' }
                  ]}
                >
                  <Input 
                    placeholder="name@domain.com" 
                    className="h-11 rounded-lg border-slate-200 hover:border-slate-300 focus:border-sky-500 shadow-2xs transition-all text-sm"
                  />
                </Form.Item>
              </div>

              {/* Subject Input */}
              <Form.Item
                label={<span className="text-xs font-medium text-slate-700">Subject</span>}
                name="subject"
                rules={[{ required: true, message: 'Please provide a subject line.' }]}
              >
                <Input 
                  placeholder="How can we help you reference this message?" 
                  className="h-11 rounded-lg border-slate-200 hover:border-slate-300 focus:border-sky-500 shadow-2xs transition-all text-sm"
                />
              </Form.Item>

              {/* Message Textarea */}
              <Form.Item
                label={<span className="text-xs font-medium text-slate-700">Message</span>}
                name="message"
                rules={[{ required: true, message: 'Please type your message.' }]}
              >
                <Input.TextArea 
                  rows={5} 
                  placeholder="Describe your inquiry or technical issue here in details..."
                  className="rounded-lg border-slate-200 hover:border-slate-300 focus:border-sky-500 shadow-2xs transition-all text-sm p-3"
                />
              </Form.Item>

              {/* Clean Interactive Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white disabled:bg-slate-200 disabled:text-slate-400 font-medium text-sm rounded-lg h-12 transition-all cursor-pointer shadow-sm"
              >
                <span>{isSubmitting ? 'Sending your message...' : 'Send Message'}</span>
                {!isSubmitting && <Send className="w-4 h-4 shrink-0" />}
              </button>
            </Form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;