import QRCode from 'qrcode';
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';

const QR_CODES_DIR = path.join(process.cwd(), 'public', 'qr-codes');

export async function ensureQRCodesDirectory() {
  try {
    await fs.mkdir(QR_CODES_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating QR codes directory:', error);
  }
}

export function generateUniqueToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export async function generateQRCode(data: string, filename: string): Promise<string> {
  try {
    await ensureQRCodesDirectory();
    
    const filePath = path.join(QR_CODES_DIR, `${filename}.png`);
    
    console.log('Generating QR code:', { filePath, QR_CODES_DIR, filename });
    
    await QRCode.toFile(filePath, data, {
      errorCorrectionLevel: 'H',
      type: 'png',
      width: 400,
      color: {
        dark: '#1D50C9',  // Brand blue color
        light: '#FFFFFF'
      }
    });
    
    console.log('QR code generated successfully:', filePath);
    
    return `/qr-codes/${filename}.png`;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
}

export async function generateRegistrationQRCode(
  registrationId: number,
  token: string,
  eventId: number
): Promise<{ qrCodeUrl: string; token: string }> {
  const qrData = JSON.stringify({
    registrationId,
    token,
    eventId,
    timestamp: new Date().toISOString()
  });
  
  const filename = `reg-${registrationId}-${Date.now()}`;
  const qrCodeUrl = await generateQRCode(qrData, filename);
  
  return { qrCodeUrl, token };
}

export function verifyQRToken(storedToken: string, providedToken: string): boolean {
  return crypto.timingSafeEqual(
    Buffer.from(storedToken),
    Buffer.from(providedToken)
  );
}
