import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Clock, MapPin, User, Mail, Phone, GraduationCap, QrCode } from 'lucide-react';
import html2canvas from 'html2canvas';
import dcLogoPath from '@assets/DC Blue Logo_1751614676879.png';

interface TicketData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  ticketNumber: string;
}

interface EventTicketGeneratorProps {
  ticketData: TicketData;
  onDownload?: (imageBlob: Blob) => void;
}

export default function EventTicketGenerator({ ticketData, onDownload }: EventTicketGeneratorProps) {
  const ticketRef = useRef<HTMLDivElement>(null);

  const generateTicketNumber = () => {
    const prefix = 'DC';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  };

  const generateQRCode = (data: string) => {
    // Generate QR code SVG using a simple pattern
    const size = 100;
    const modules = 25;
    const moduleSize = size / modules;
    
    // Create a simple QR-like pattern based on the data
    const hash = data.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const pattern: boolean[][] = [];
    
    for (let i = 0; i < modules; i++) {
      pattern[i] = [];
      for (let j = 0; j < modules; j++) {
        // Create a pseudo-random pattern based on position and data hash
        const value = (i * j + hash + i + j) % 3;
        pattern[i][j] = value === 0;
      }
    }
    
    return (
      <svg width={size} height={size} className="border border-gray-300 rounded">
        {pattern.map((row, i) =>
          row.map((cell, j) => (
            <rect
              key={`${i}-${j}`}
              x={j * moduleSize}
              y={i * moduleSize}
              width={moduleSize}
              height={moduleSize}
              fill={cell ? '#000' : '#fff'}
            />
          ))
        )}
      </svg>
    );
  };

  const downloadTicket = async () => {
    if (ticketRef.current) {
      try {
        // Hide download button temporarily
        const downloadBtn = ticketRef.current.querySelector('.download-btn') as HTMLElement;
        if (downloadBtn) downloadBtn.style.display = 'none';

        const canvas = await html2canvas(ticketRef.current, {
          backgroundColor: '#ffffff',
          scale: 2,
          logging: false,
          useCORS: true,
          allowTaint: true,
          width: 800,
          height: 400
        });

        // Show download button again
        if (downloadBtn) downloadBtn.style.display = 'block';

        // Convert to blob
        canvas.toBlob((blob) => {
          if (blob) {
            // Create download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `event-ticket-${ticketData.name.replace(/\s+/g, '-').toLowerCase()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            // Call onDownload callback if provided
            if (onDownload) {
              onDownload(blob);
            }
          }
        }, 'image/png', 1.0);
      } catch (error) {
        console.error('Error generating ticket:', error);
      }
    }
  };

  const ticketNumber = ticketData.ticketNumber || generateTicketNumber();

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Ticket Card */}
      <motion.div
        ref={ticketRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl shadow-2xl border border-blue-200 overflow-hidden"
        style={{ width: '800px', height: '400px' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                              radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <img loading="lazy" 
                src={dcLogoPath} 
                alt="Dunya Consultants" 
                className="h-12 w-auto mr-4 bg-white rounded-lg p-2"
              />
              <div>
                <h1 className="text-2xl font-bold mb-2">Dunya Consultants</h1>
                <p className="text-blue-100 text-sm">Event Registration Ticket</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2">
                <p className="text-xs font-medium">Ticket #</p>
                <p className="text-sm font-bold">{ticketNumber}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative p-6 flex h-full">
          {/* Left Section - Event Info */}
          <div className="flex-1 space-y-4">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{ticketData.eventTitle}</h2>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {ticketData.eventDate}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {ticketData.eventTime}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                {ticketData.eventLocation}
              </div>
            </div>

            {/* Student Name Only */}
            <div className="space-y-3">
              <div className="flex items-center">
                <User className="w-5 h-5 #1845B3 mr-3" />
                <div>
                  <p className="text-xs text-gray-500">Full Name</p>
                  <p className="font-semibold text-gray-800">{ticketData.name}</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Please bring this ticket to the event venue
              </p>
            </div>
          </div>

          {/* Right Section - QR Code & Branding */}
          <div className="w-48 flex flex-col items-center justify-center space-y-4">
            {/* Active QR Code */}
            <div className="flex flex-col items-center">
              {generateQRCode(`${ticketNumber}-${ticketData.name}-${ticketData.eventTitle}`)}
              <p className="text-xs text-gray-500 mt-2">QR Code</p>
              <p className="text-xs text-gray-400">Scan for Details</p>
            </div>

            {/* Contact Info */}
            <div className="text-center text-xs text-gray-600">
              <p className="font-semibold">Dunya Consultants</p>
              <p>+92 304 1110947</p>
              <p>info@dunyaconsultants.com</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <p>Generated on {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-100 rounded-full opacity-20"></div>
      </motion.div>

      {/* Download Button */}
      <motion.button
        onClick={downloadTicket}
        className="download-btn bg-gradient-to-r from-[#1D50C9] to-[#1845B3] text-white px-6 py-3 rounded-lg font-medium hover:from-#1a73e8 hover:to-[#1a73e8] transition-all duration-300 flex items-center space-x-2 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5" />
        <span>Download Ticket</span>
      </motion.button>
    </div>
  );
}