import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calculator, GraduationCap, FileCheck, CheckCircle, Download } from "lucide-react";

interface SmartToolsPopupProps {
  country: string;
  documentChecklist: string[];
  downloadChecklist: () => void;
}

export default function SmartToolsPopup({ country, documentChecklist, downloadChecklist }: SmartToolsPopupProps) {
  const getCostData = (country: string) => {
    switch(country.toLowerCase()) {
      case 'usa':
        return {
          tuition: [
            { type: "Public Universities (In-State)", cost: "$10,000 - $20,000" },
            { type: "Public Universities (Out-State)", cost: "$20,000 - $35,000" },
            { type: "Private Universities", cost: "$35,000 - $50,000" }
          ],
          living: [
            { type: "Accommodation", cost: "$8,000 - $15,000" },
            { type: "Food & Groceries", cost: "$3,000 - $5,000" },
            { type: "Transportation", cost: "$1,000 - $2,000" },
            { type: "Personal Expenses", cost: "$1,500 - $3,000" }
          ],
          total: "$43,500 - $105,000 per year"
        };
      case 'uk':
        return {
          tuition: [
            { type: "Undergraduate Programs", cost: "£11,000 - £17,000" },
            { type: "Postgraduate Programs", cost: "£12,000 - £25,000" },
            { type: "MBA Programs", cost: "£20,000 - £45,000" }
          ],
          living: [
            { type: "Accommodation", cost: "£6,000 - £12,000" },
            { type: "Food & Groceries", cost: "£2,500 - £4,000" },
            { type: "Transportation", cost: "£600 - £1,200" },
            { type: "Personal Expenses", cost: "£1,000 - £2,000" }
          ],
          total: "£21,100 - £64,200 per year"
        };
      case 'canada':
        return {
          tuition: [
            { type: "Undergraduate Programs", cost: "CAD $21,100 - $36,100" },
            { type: "Postgraduate Programs", cost: "CAD $14,900 - $32,000" },
            { type: "MBA Programs", cost: "CAD $30,000 - $60,000" }
          ],
          living: [
            { type: "Accommodation", cost: "CAD $8,000 - $15,000" },
            { type: "Food & Groceries", cost: "CAD $3,000 - $5,000" },
            { type: "Transportation", cost: "CAD $1,200 - $2,400" },
            { type: "Personal Expenses", cost: "CAD $1,500 - $3,000" }
          ],
          total: "CAD $34,800 - $101,500 per year"
        };
      case 'australia':
        return {
          tuition: [
            { type: "Undergraduate Programs", cost: "AUD $20,000 - $45,000" },
            { type: "Postgraduate Programs", cost: "AUD $22,000 - $50,000" },
            { type: "MBA Programs", cost: "AUD $60,000 - $120,000" }
          ],
          living: [
            { type: "Accommodation", cost: "AUD $15,000 - $25,000" },
            { type: "Food & Groceries", cost: "AUD $4,000 - $7,000" },
            { type: "Transportation", cost: "AUD $1,500 - $3,000" },
            { type: "Personal Expenses", cost: "AUD $2,000 - $4,000" }
          ],
          total: "AUD $42,500 - $129,000 per year"
        };
      default:
        return {
          tuition: [
            { type: "Public Universities", cost: "€8,000 - €18,000" },
            { type: "Private Universities", cost: "€15,000 - €35,000" }
          ],
          living: [
            { type: "Accommodation", cost: "€4,000 - €8,000" },
            { type: "Food & Groceries", cost: "€2,000 - €4,000" },
            { type: "Transportation", cost: "€500 - €1,500" },
            { type: "Personal Expenses", cost: "€1,000 - €2,500" }
          ],
          total: "€15,500 - €69,000 per year"
        };
    }
  };

  const costData = getCostData(country);

  return (
    <div className="space-y-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-[#124FD3] hover:bg-[#0f3ba8] text-white">
            <Calculator className="w-4 h-4 mr-2" />
            Cost Calculator
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white" aria-describedby="cost-calculator-description">
          <DialogHeader>
            <DialogTitle className="text-2xl text-blue-600">{country} Study Cost Calculator</DialogTitle>
          </DialogHeader>
          <div id="cost-calculator-description" className="sr-only">Interactive cost calculator for studying in {country}</div>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600">Calculate your total study costs in {country}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Tuition Fees (Annual)</h3>
                <div className="space-y-2">
                  {costData.tuition.map((item, index) => (
                    <div key={index} className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>{item.type}</span>
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Living Expenses (Annual)</h3>
                <div className="space-y-2">
                  {costData.living.map((item, index) => (
                    <div key={index} className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>{item.type}</span>
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-lg font-semibold text-blue-900">Total Estimated Cost: {costData.total}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            <GraduationCap className="w-4 h-4 mr-2" />
            Course Match
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white" aria-describedby="course-match-description">
          <DialogHeader>
            <DialogTitle className="text-2xl text-green-600">Find Your Perfect Course in {country}</DialogTitle>
          </DialogHeader>
          <div id="course-match-description" className="sr-only">Course matching tool for programs in {country}</div>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600">Discover the perfect course for your career goals in {country}</p>
            </div>
            
            {/* Course Selection Form */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                    <option>Select Level</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>PhD</option>
                    <option>Diploma</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Field of Interest</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                    <option>Select Field</option>
                    <option>Engineering & Technology</option>
                    <option>Business & Management</option>
                    <option>Medicine & Health Sciences</option>
                    <option>Arts & Social Sciences</option>
                    <option>Science & Mathematics</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-blue-200 rounded-lg hover:shadow-md transition-shadow bg-blue-50">
                <h4 className="font-semibold text-blue-600 mb-2">Engineering & Technology</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Computer Science</li>
                  <li>• Electrical Engineering</li>
                  <li>• Mechanical Engineering</li>
                  <li>• Civil Engineering</li>
                </ul>
              </div>
              <div className="p-4 border border-green-200 rounded-lg hover:shadow-md transition-shadow bg-green-50">
                <h4 className="font-semibold text-green-600 mb-2">Business & Management</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MBA</li>
                  <li>• Finance</li>
                  <li>• Marketing</li>
                  <li>• International Business</li>
                </ul>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg hover:shadow-md transition-shadow bg-purple-50">
                <h4 className="font-semibold text-purple-600 mb-2">Medicine & Health</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MBBS</li>
                  <li>• Nursing</li>
                  <li>• Pharmacy</li>
                  <li>• Health Sciences</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                Get Personalized Course Recommendations
              </Button>
              <Button variant="outline" className="flex-1">
                Browse All Programs
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            <FileCheck className="w-4 h-4 mr-2" />
            Document Checklist
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white" aria-describedby="document-checklist-description">
          <DialogHeader>
            <DialogTitle className="text-2xl text-purple-600">{country} Document Checklist</DialogTitle>
          </DialogHeader>
          <div id="document-checklist-description" className="sr-only">Comprehensive document checklist for studying in {country}</div>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-gray-600">Get your personalized checklist for studying in {country}</p>
            </div>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Academic Documents</h4>
                  <div className="space-y-2">
                    {documentChecklist.slice(0, Math.ceil(documentChecklist.length / 2)).map((doc, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Supporting Documents</h4>
                  <div className="space-y-2">
                    {documentChecklist.slice(Math.ceil(documentChecklist.length / 2)).map((doc, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Important Notes</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• All documents must be in English or officially translated</li>
                <li>• Ensure documents are notarized where required</li>
                <li>• Keep multiple copies of all documents</li>
                <li>• Check embassy requirements for specific countries</li>
              </ul>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={downloadChecklist}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Complete Checklist
              </Button>
              <Button variant="outline" className="flex-1">
                Get Document Help
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}