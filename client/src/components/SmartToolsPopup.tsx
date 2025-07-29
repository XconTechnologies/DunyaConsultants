import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, GraduationCap, FileCheck, CheckCircle, Download, Plus, Minus, FileText } from "lucide-react";
import { useState } from "react";

interface SmartToolsPopupProps {
  country: string;
  documentChecklist: string[];
  downloadChecklist: () => void;
}

export default function SmartToolsPopup({ country, documentChecklist, downloadChecklist }: SmartToolsPopupProps) {
  // Cost Calculator State
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("1");
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null);
  
  // Course Match State
  const [educationLevel, setEducationLevel] = useState("");
  const [fieldOfInterest, setFieldOfInterest] = useState("");
  const [budget, setBudget] = useState("");
  const [matchedCourses, setMatchedCourses] = useState<any[]>([]);
  
  // Document Checklist State
  const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>({});

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

  // Calculate total cost based on selections
  const calculateTotalCost = () => {
    if (!selectedUniversity || !selectedAccommodation) return;
    
    const duration = parseInt(selectedDuration);
    let tuitionCost = 0;
    let accommodationCost = 0;
    
    // Extract cost from selected university type
    const universityData = costData.tuition.find(item => item.type === selectedUniversity);
    if (universityData) {
      const costRange = universityData.cost.match(/[\d,]+/g);
      if (costRange) {
        tuitionCost = parseInt(costRange[0].replace(',', '')) * duration;
      }
    }
    
    // Extract accommodation cost
    const accommodationData = costData.living.find(item => item.type === selectedAccommodation);
    if (accommodationData) {
      const costRange = accommodationData.cost.match(/[\d,]+/g);
      if (costRange) {
        accommodationCost = parseInt(costRange[0].replace(',', '')) * duration;
      }
    }
    
    const totalCost = tuitionCost + accommodationCost;
    setCalculatedCost(totalCost);
  };

  // Find matching courses based on criteria
  const findMatchingCourses = () => {
    if (!educationLevel || !fieldOfInterest) return;
    
    const courses = [
      { name: "Computer Science", level: "Bachelor's Degree", field: "Engineering & Technology", duration: "4 years", cost: "$45,000/year" },
      { name: "MBA", level: "Master's Degree", field: "Business & Management", duration: "2 years", cost: "$65,000/year" },
      { name: "Medicine", level: "Bachelor's Degree", field: "Medicine & Health", duration: "6 years", cost: "$55,000/year" },
      { name: "Data Science", level: "Master's Degree", field: "Engineering & Technology", duration: "2 years", cost: "$50,000/year" },
      { name: "Marketing", level: "Bachelor's Degree", field: "Business & Management", duration: "4 years", cost: "$40,000/year" },
    ];
    
    const matched = courses.filter(course => 
      course.level === educationLevel && course.field === fieldOfInterest
    );
    
    setMatchedCourses(matched);
  };

  // Handle document checklist item check/uncheck
  const handleCheckboxChange = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Calculate progress percentage
  const getProgress = () => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / documentChecklist.length) * 100);
  };

  return (
    <div className="space-y-4">
      {/* Cost Calculator Dialog */}
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
              <p className="text-gray-600">Calculate your personalized study costs for {country}</p>
            </div>
            
            {/* Interactive Cost Calculator */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-blue-600">Select Your Preferences</h3>
                
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="university-type">University Type</Label>
                    <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose university type" />
                      </SelectTrigger>
                      <SelectContent className="z-[9999] bg-white border shadow-lg max-h-60 overflow-y-auto">
                        {costData.tuition.map((item, index) => (
                          <SelectItem key={index} value={item.type}>
                            {item.type} - {item.cost}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="accommodation">Accommodation Type</Label>
                    <Select value={selectedAccommodation} onValueChange={setSelectedAccommodation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose accommodation" />
                      </SelectTrigger>
                      <SelectContent className="z-[9999] bg-white border shadow-lg max-h-60 overflow-y-auto">
                        {costData.living.map((item, index) => (
                          <SelectItem key={index} value={item.type}>
                            {item.type} - {item.cost}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="duration">Study Duration (Years)</Label>
                    <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent className="z-[9999] bg-white border shadow-lg max-h-60 overflow-y-auto">
                        <SelectItem value="1">1 Year</SelectItem>
                        <SelectItem value="2">2 Years</SelectItem>
                        <SelectItem value="3">3 Years</SelectItem>
                        <SelectItem value="4">4 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    onClick={calculateTotalCost}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!selectedUniversity || !selectedAccommodation}
                  >
                    Calculate Total Cost
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-green-600">Cost Breakdown</h3>
                
                {calculatedCost ? (
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800">Your Personalized Cost</h4>
                      <p className="text-2xl font-bold text-green-600">
                        {country === 'UK' ? '£' : country === 'Canada' ? 'CAD $' : '$'}{calculatedCost.toLocaleString()}
                      </p>
                      <p className="text-sm text-green-700">
                        For {selectedDuration} year(s) of study
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>University Type:</span>
                        <span className="font-medium">{selectedUniversity}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Accommodation:</span>
                        <span className="font-medium">{selectedAccommodation}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span>Duration:</span>
                        <span className="font-medium">{selectedDuration} Year(s)</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">General Cost Ranges</h4>
                    {costData.tuition.map((item, index) => (
                      <div key={index} className="flex justify-between p-3 bg-gray-50 rounded">
                        <span>{item.type}</span>
                        <span className="font-semibold">{item.cost}</span>
                      </div>
                    ))}
                    <div className="text-center p-4 bg-blue-50 rounded-lg mt-4">
                      <p className="text-lg font-semibold text-blue-900">Average Total: {costData.total}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Course Match Dialog */}
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
              <p className="text-gray-600">Find the perfect course for your career goals in {country}</p>
            </div>
            
            {/* Interactive Course Matching Form */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-green-600">Tell Us About Yourself</h3>
                
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="education-level">Education Level</Label>
                    <Select value={educationLevel} onValueChange={setEducationLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent className="z-[9999] bg-white border shadow-lg max-h-60 overflow-y-auto">
                        <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                        <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                        <SelectItem value="PhD">PhD</SelectItem>
                        <SelectItem value="Diploma">Diploma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="field-interest">Field of Interest</Label>
                    <Select value={fieldOfInterest} onValueChange={setFieldOfInterest}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your field" />
                      </SelectTrigger>
                      <SelectContent className="z-[9999] bg-white border shadow-lg max-h-60 overflow-y-auto">
                        <SelectItem value="Engineering & Technology">Engineering & Technology</SelectItem>
                        <SelectItem value="Business & Management">Business & Management</SelectItem>
                        <SelectItem value="Medicine & Health">Medicine & Health Sciences</SelectItem>
                        <SelectItem value="Arts & Social Sciences">Arts & Social Sciences</SelectItem>
                        <SelectItem value="Science & Mathematics">Science & Mathematics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="budget">Annual Budget Range</Label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="z-[9999] bg-white border shadow-lg max-h-60 overflow-y-auto">
                        <SelectItem value="under-30k">Under $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="50k-70k">$50,000 - $70,000</SelectItem>
                        <SelectItem value="over-70k">Over $70,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    onClick={findMatchingCourses}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    disabled={!educationLevel || !fieldOfInterest}
                  >
                    Find Matching Courses
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-purple-600">Course Recommendations</h3>
                
                {matchedCourses.length > 0 ? (
                  <div className="space-y-3">
                    {matchedCourses.map((course, index) => (
                      <div key={index} className="p-4 border border-green-200 rounded-lg bg-green-50">
                        <h4 className="font-semibold text-green-800">{course.name}</h4>
                        <div className="text-sm text-green-700 space-y-1 mt-2">
                          <p><strong>Level:</strong> {course.level}</p>
                          <p><strong>Duration:</strong> {course.duration}</p>
                          <p><strong>Annual Cost:</strong> {course.cost}</p>
                          <p><strong>Field:</strong> {course.field}</p>
                        </div>
                        <Button size="sm" className="mt-3 bg-green-600 hover:bg-green-700 text-white">
                          View Details
                        </Button>
                      </div>
                    ))}
                    
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800">Perfect Match!</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Found {matchedCourses.length} courses that match your criteria in {country}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                      <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Select your preferences to see course recommendations</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 border border-blue-200 rounded-lg bg-blue-50">
                        <h4 className="font-semibold text-blue-600 text-sm">Engineering & Technology</h4>
                        <ul className="text-xs text-blue-700 mt-1 space-y-1">
                          <li>• Computer Science</li>
                          <li>• Data Science</li>
                          <li>• Electrical Engineering</li>
                        </ul>
                      </div>
                      <div className="p-3 border border-green-200 rounded-lg bg-green-50">
                        <h4 className="font-semibold text-green-600 text-sm">Business & Management</h4>
                        <ul className="text-xs text-green-700 mt-1 space-y-1">
                          <li>• MBA</li>
                          <li>• Marketing</li>
                          <li>• Finance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Document Checklist Dialog */}
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
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <FileCheck className="w-5 h-5 mr-2 text-purple-600" />
                    Academic Documents
                  </h4>
                  <div className="space-y-2">
                    {documentChecklist.slice(0, Math.ceil(documentChecklist.length / 2)).map((doc, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4 border-purple-200">
                        <input 
                          type="checkbox" 
                          className="mt-1 text-purple-600" 
                          checked={checkedItems[index] || false}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <span className={`text-sm flex-1 ${checkedItems[index] ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                          {doc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    Supporting Documents
                  </h4>
                  <div className="space-y-2">
                    {documentChecklist.slice(Math.ceil(documentChecklist.length / 2)).map((doc, index) => {
                      const actualIndex = Math.ceil(documentChecklist.length / 2) + index;
                      return (
                        <div key={actualIndex} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4 border-blue-200">
                          <input 
                            type="checkbox" 
                            className="mt-1 text-blue-600" 
                            checked={checkedItems[actualIndex] || false}
                            onChange={() => handleCheckboxChange(actualIndex)}
                          />
                          <span className={`text-sm flex-1 ${checkedItems[actualIndex] ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                            {doc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Progress Tracker */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Document Preparation Progress</h4>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${getProgress()}%`}}
                    ></div>
                  </div>
                  <span className="text-sm text-purple-700">
                    {Object.values(checkedItems).filter(Boolean).length} / {documentChecklist.length} completed
                  </span>
                </div>
                <p className="text-xs text-purple-600 mt-2">
                  {getProgress() === 100 ? '🎉 All documents ready!' : 'Check off documents as you prepare them!'}
                </p>
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
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open(`tel:+923041110947`, '_self')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Get Document Help
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}