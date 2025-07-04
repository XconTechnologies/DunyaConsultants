import { apiRequest } from '@/lib/queryClient';

interface EmailData {
  name: string;
  email: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  ticketNumber: string;
}

interface EmailAttachment {
  filename: string;
  content: string; // base64 encoded
  type: string;
}

export const sendConfirmationEmail = async (emailData: EmailData, ticketImageBlob?: Blob): Promise<boolean> => {
  try {
    let attachment: EmailAttachment | undefined;
    
    // Convert blob to base64 if provided
    if (ticketImageBlob) {
      const base64 = await blobToBase64(ticketImageBlob);
      attachment = {
        filename: `event-ticket-${emailData.name.replace(/\s+/g, '-').toLowerCase()}.png`,
        content: base64.split(',')[1], // Remove data:image/png;base64, prefix
        type: 'image/png'
      };
    }

    const emailPayload = {
      to: emailData.email,
      subject: `Event Registration Confirmation - ${emailData.eventTitle}`,
      html: generateEmailHTML(emailData),
      attachment
    };

    const response = await apiRequest('POST', '/api/send-email', emailPayload);
    
    if (response.ok) {
      console.log('Confirmation email sent successfully');
      return true;
    } else {
      console.error('Failed to send confirmation email');
      return false;
    }
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
};

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const generateEmailHTML = (emailData: EmailData): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Event Registration Confirmation</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8fafc;
            }
            .container {
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: bold;
            }
            .header p {
                margin: 8px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
            }
            .content {
                padding: 30px;
            }
            .event-details {
                background: #f1f5f9;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                border-left: 4px solid #3b82f6;
            }
            .event-details h3 {
                margin: 0 0 15px 0;
                color: #1e293b;
                font-size: 18px;
            }
            .detail-item {
                display: flex;
                align-items: center;
                margin: 8px 0;
                font-size: 14px;
            }
            .detail-item strong {
                min-width: 80px;
                color: #475569;
            }
            .ticket-info {
                background: linear-gradient(135deg, #dbeafe, #e0e7ff);
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                text-align: center;
                border: 2px dashed #3b82f6;
            }
            .ticket-number {
                font-size: 20px;
                font-weight: bold;
                color: #1e40af;
                margin: 10px 0;
            }
            .footer {
                background: #f8fafc;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
                font-size: 14px;
                color: #64748b;
            }
            .button {
                display: inline-block;
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                margin: 15px 0;
            }
            .contact-info {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Registration Confirmed!</h1>
                <p>Thank you for registering with Dunya Consultants</p>
            </div>
            
            <div class="content">
                <p>Dear <strong>${emailData.name}</strong>,</p>
                
                <p>We're excited to confirm your registration for the upcoming event. Your seat has been reserved and we look forward to seeing you there!</p>
                
                <div class="event-details">
                    <h3>📅 Event Details</h3>
                    <div class="detail-item">
                        <strong>Event:</strong> ${emailData.eventTitle}
                    </div>
                    <div class="detail-item">
                        <strong>Date:</strong> ${emailData.eventDate}
                    </div>
                    <div class="detail-item">
                        <strong>Time:</strong> ${emailData.eventTime}
                    </div>
                    <div class="detail-item">
                        <strong>Location:</strong> ${emailData.eventLocation}
                    </div>
                </div>
                
                <div class="ticket-info">
                    <p><strong>🎫 Your Ticket Number</strong></p>
                    <div class="ticket-number">${emailData.ticketNumber}</div>
                    <p style="margin: 10px 0 0 0; font-size: 14px; color: #64748b;">
                        Please bring your ticket (attached) to the event venue
                    </p>
                </div>
                
                <h3>📋 What to Expect</h3>
                <ul style="color: #475569; line-height: 1.8;">
                    <li>Interactive sessions with expert counselors</li>
                    <li>Detailed guidance on study abroad opportunities</li>
                    <li>Q&A sessions with current international students</li>
                    <li>One-on-one consultation opportunities</li>
                    <li>Refreshments and networking</li>
                </ul>
                
                <h3>📱 Need Help?</h3>
                <p>If you have any questions or need to make changes to your registration, please don't hesitate to contact us:</p>
                
                <div class="contact-info">
                    <div class="detail-item">
                        <strong>Phone:</strong> +92 304 1110947
                    </div>
                    <div class="detail-item">
                        <strong>Email:</strong> info@dunyaconsultants.com
                    </div>
                    <div class="detail-item">
                        <strong>Website:</strong> www.dunyaconsultants.com
                    </div>
                </div>
                
                <p style="margin-top: 25px;">We can't wait to help you take the next step in your educational journey!</p>
                
                <p>Best regards,<br>
                <strong>The Dunya Consultants Team</strong></p>
            </div>
            
            <div class="footer">
                <p>This is an automated confirmation email. Please do not reply to this message.</p>
                <p>&copy; 2025 Dunya Consultants. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export default { sendConfirmationEmail };