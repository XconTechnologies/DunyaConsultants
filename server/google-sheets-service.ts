import { google } from 'googleapis';

const GOOGLE_SHEETS_ENABLED = !!process.env.GOOGLE_SHEETS_CREDENTIALS;

let sheetsClient: any = null;

export async function initializeGoogleSheets() {
  if (!GOOGLE_SHEETS_ENABLED) {
    console.log('Google Sheets integration not configured - registrations will only be stored in database');
    return null;
  }

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || '{}');
    
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheetsClient = google.sheets({ version: 'v4', auth });
    return sheetsClient;
  } catch (error) {
    console.error('Error initializing Google Sheets:', error);
    return null;
  }
}

export async function appendToSheet(
  spreadsheetId: string,
  data: {
    eventTitle: string;
    name: string;
    email: string;
    phone: string;
    education?: string;
    destination?: string;
    registrationDate: string;
    qrToken: string;
  }
): Promise<string | null> {
  if (!sheetsClient) {
    await initializeGoogleSheets();
  }

  if (!sheetsClient) {
    console.log('Google Sheets not available - skipping sheet sync');
    return null;
  }

  try {
    const values = [[
      data.registrationDate,
      data.eventTitle,
      data.name,
      data.email,
      data.phone,
      data.education || '',
      data.destination || '',
      data.qrToken,
      'Registered'
    ]];

    const result = await sheetsClient.spreadsheets.values.append({
      spreadsheetId,
      range: 'Event Registrations!A:I',
      valueInputOption: 'USER_ENTERED',
      resource: { values },
    });

    return result.data.updates?.updatedRange || null;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    return null;
  }
}

export async function updateAttendanceInSheet(
  spreadsheetId: string,
  rowId: string,
  attended: boolean
): Promise<boolean> {
  if (!sheetsClient) {
    await initializeGoogleSheets();
  }

  if (!sheetsClient || !rowId) {
    return false;
  }

  try {
    await sheetsClient.spreadsheets.values.update({
      spreadsheetId,
      range: `Event Registrations!${rowId}`,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[attended ? 'Attended' : 'Registered']]
      },
    });

    return true;
  } catch (error) {
    console.error('Error updating attendance in Google Sheets:', error);
    return false;
  }
}
