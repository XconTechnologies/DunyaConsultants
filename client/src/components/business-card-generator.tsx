import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Palette, User, Mail, Phone, MapPin, Globe, Briefcase, Share2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BusinessCardData {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  bio: string;
  theme: string;
  pattern: string;
}

const themes = [
  { id: 'blue', name: 'Ocean Blue', primary: 'from-blue-400 to-[#1845B3]', secondary: 'bg-blue-50', accent: '#1845B3' },
  { id: 'purple', name: 'Royal Purple', primary: 'from-blue-400 to-[#1845B3]', secondary: 'bg-blue-50', accent: '#1845B3' },
  { id: 'green', name: 'Forest Green', primary: 'from-blue-400 to-[#1845B3]', secondary: 'bg-blue-50', accent: '#1845B3' },
  { id: 'rose', name: 'Elegant Rose', primary: 'from-blue-400 to-[#1845B3]', secondary: 'bg-blue-50', accent: '#1845B3' },
  { id: 'amber', name: 'Golden Amber', primary: 'from-amber-400 to-amber-600', secondary: 'bg-amber-50', accent: 'text-amber-600' },
  { id: 'slate', name: 'Modern Slate', primary: 'from-slate-400 to-slate-600', secondary: 'bg-slate-50', accent: 'text-slate-600' }
];

const patterns = [
  { id: 'none', name: 'Clean', class: '' },
  { id: 'dots', name: 'Dots', class: 'bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]' },
  { id: 'grid', name: 'Grid', class: 'bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]' },
  { id: 'waves', name: 'Waves', class: 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' }
];

export default function BusinessCardGenerator() {
  const [cardData, setCardData] = useState<BusinessCardData>({
    name: "John Doe",
    title: "Senior Consultant",
    company: "Dunya Consultants",
    email: "john.doe@dunyaconsultants.com",
    phone: "+92 304 1110947",
    website: "www.dunyaconsultants.com",
    address: "106 Sadium Road, Sargodha",
    bio: "Helping students achieve their dreams of studying abroad",
    theme: "blue",
    pattern: "dots"
  });

  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentTheme = themes.find(t => t.id === cardData.theme) || themes[0];
  const currentPattern = patterns.find(p => p.id === cardData.pattern) || patterns[0];

  const handleInputChange = (field: keyof BusinessCardData, value: string) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    // Simulate generation process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    
    // In a real implementation, this would generate and download the card
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${cardData.name.replace(/\s+/g, '_')}_business_card.png`;
    // link.click();
  };

  const handleShare = () => {
    setCopied(true);
    navigator.clipboard.writeText(`Business Card: ${cardData.name} - ${cardData.title} at ${cardData.company}`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-blue-50 #1845B3 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Design Tool
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white italic mb-4">
            Elegant Glassmorphic Business Card Generator
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create stunning professional business cards with glassmorphic design effects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 #1845B3" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={cardData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={cardData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={cardData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={cardData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={cardData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={cardData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={cardData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div className="mt-6">
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Textarea
                  id="bio"
                  value={cardData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="mt-1"
                  rows={3}
                />
              </div>
            </div>

            {/* Design Customization */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Palette className="w-6 h-6 mr-3 #1845B3" />
                Design Customization
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="theme">Color Theme</Label>
                  <Select value={cardData.theme} onValueChange={(value) => handleInputChange('theme', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {themes.map(theme => (
                        <SelectItem key={theme.id} value={theme.id}>
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${theme.primary} mr-2`} />
                            {theme.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="pattern">Background Pattern</Label>
                  <Select value={cardData.pattern} onValueChange={(value) => handleInputChange('pattern', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {patterns.map(pattern => (
                        <SelectItem key={pattern.id} value={pattern.id}>
                          {pattern.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Preview</h2>
              
              {/* Business Card Preview */}
              <div className="flex justify-center mb-8">
                <motion.div
                  className="relative w-96 h-56 perspective-1000"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Front of Card */}
                  <div className={`absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br ${currentTheme.primary} ${currentPattern.class} backdrop-blur-sm border border-white/20 shadow-2xl`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                    
                    <div className="relative h-full p-6 flex flex-col justify-between text-white">
                      {/* Header */}
                      <div>
                        <h3 className="text-xl font-bold mb-1">{cardData.name}</h3>
                        <p className="text-white/90 text-sm mb-2">{cardData.title}</p>
                        <p className="text-white/80 text-sm font-medium">{cardData.company}</p>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-white/90">
                          <Mail className="w-3 h-3 mr-2" />
                          {cardData.email}
                        </div>
                        <div className="flex items-center text-xs text-white/90">
                          <Phone className="w-3 h-3 mr-2" />
                          {cardData.phone}
                        </div>
                        <div className="flex items-center text-xs text-white/90">
                          <Globe className="w-3 h-3 mr-2" />
                          {cardData.website}
                        </div>
                        <div className="flex items-center text-xs text-white/90">
                          <MapPin className="w-3 h-3 mr-2" />
                          {cardData.address}
                        </div>
                      </div>
                    </div>
                    
                    {/* Glassmorphic Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm border border-white/20" />
                  </div>
                </motion.div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownload}
                  disabled={isGenerating}
                  className="flex-1 bg-gradient-to-r from-[#1D50C9] to-[#1a73e8] hover:from-#1a73e8 hover:to-#1565c0"
                >
                  <AnimatePresence mode="wait">
                    {isGenerating ? (
                      <motion.div
                        key="generating"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center"
                      >
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Generating...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="download"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PNG
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
                
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="flex items-center"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2 #1845B3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-#1e3a8a mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Design Tips
              </h3>
              
              <ul className="space-y-2 text-sm text-[#1565c0]">
                <li>• Keep text concise and easy to read</li>
                <li>• Choose colors that represent your brand</li>
                <li>• Ensure contact information is accurate</li>
                <li>• Test readability at different sizes</li>
                <li>• Consider your industry's design conventions</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}