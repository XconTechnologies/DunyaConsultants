import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const FloatingSocialMedia = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
      color: 'hover:bg-pink-600'
    },
    {
      icon: FaTiktok,
      href: '#',
      label: 'TikTok',
      color: 'hover:bg-black',
      isFaIcon: true
    },
    {
      icon: Youtube,
      href: '#',
      label: 'YouTube',
      color: 'hover:bg-red-600'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700'
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white rounded-full shadow-lg p-2 space-y-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-12 h-12 bg-[#1D50C9] text-white rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg group`}
            aria-label={social.label}
          >
            {social.isFaIcon ? (
              <social.icon className="w-5 h-5" />
            ) : (
              <social.icon className="w-5 h-5" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSocialMedia;