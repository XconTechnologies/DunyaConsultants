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
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-blue-600">{country} Study Cost Calculator</DialogTitle>
          </DialogHeader>
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
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-green-600">Find Your Perfect Course in {country}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600">Discover the perfect course for your career goals</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600">Engineering</h4>
                <p className="text-sm text-gray-600 mt-2">Computer Science, Electrical, Mechanical, Civil Engineering programs</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-green-600">Business</h4>
                <p className="text-sm text-gray-600 mt-2">MBA, Finance, Marketing, International Business programs</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-purple-600">Medicine</h4>
                <p className="text-sm text-gray-600 mt-2">MBBS, Nursing, Pharmacy, Health Sciences programs</p>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Personalized Course Recommendations
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
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-purple-600">{country} Document Checklist</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-gray-600">Get your personalized checklist for studying in {country}</p>
            </div>
            <div className="space-y-3">
              {documentChecklist.map((doc, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button 
                onClick={downloadChecklist}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Complete Checklist
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}