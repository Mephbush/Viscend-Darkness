import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Configure CORS
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

app.use('*', logger(console.log));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

// Submit contact form
app.post('/make-server-3a888ed2/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, projectType, budgetRange, message } = body;
    
    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Store in key-value store
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const contactData = {
      id: contactId,
      name,
      email,
      projectType: projectType || 'Not specified',
      budgetRange: budgetRange || 'Not specified',
      message,
      submittedAt: new Date().toISOString()
    };

    await kv.set(contactId, contactData);
    
    // Send email notification using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VisCend Studio <noreply@resend.dev>',
        to: ['viscendstudio@gmail.com'], // Replace with your actual Gmail
        subject: `New Project Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #000; margin-bottom: 20px;">New Project Inquiry</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
              <p><strong>Budget Range:</strong> ${budgetRange || 'Not specified'}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      console.error('Failed to send email:', await emailResponse.text());
    }

    return c.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      contactId 
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return c.json({ 
      error: 'Failed to submit contact form',
      details: error.message 
    }, 500);
  }
});

// Submit newsletter signup
app.post('/make-server-3a888ed2/newsletter', async (c) => {
  try {
    const body = await c.req.json();
    const { email } = body;
    
    if (!email) {
      return c.json({ error: 'Email is required' }, 400);
    }

    // Store in key-value store
    const newsletterId = `newsletter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newsletterData = {
      id: newsletterId,
      email,
      subscribedAt: new Date().toISOString()
    };

    await kv.set(newsletterId, newsletterData);
    
    // Send email notification
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VisCend Studio <noreply@resend.dev>',
        to: ['viscendstudio@gmail.com'], // Replace with your actual Gmail
        subject: `New Newsletter Subscription`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #000; margin-bottom: 20px;">New Newsletter Subscription</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subscribed:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      console.error('Failed to send newsletter email:', await emailResponse.text());
    }

    return c.json({ 
      success: true, 
      message: 'Newsletter subscription successful',
      newsletterId 
    });

  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return c.json({ 
      error: 'Failed to subscribe to newsletter',
      details: error.message 
    }, 500);
  }
});

// Get all contacts (for admin purposes)
app.get('/make-server-3a888ed2/contacts', async (c) => {
  try {
    const contacts = await kv.getByPrefix('contact_');
    return c.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return c.json({ 
      error: 'Failed to fetch contacts',
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);