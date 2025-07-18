import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import CostCalculator from "@/pages/cost-calculator";
import CourseMatchTool from "@/pages/course-match-tool";
import DocumentChecklist from "@/pages/document-checklist";
import Events from "@/pages/events";
import Blogs from "@/pages/blogs";
import IELTS from "@/pages/ielts";
import IELTSExamDay from "@/pages/ielts-exam-day";
import CountryGuide from "@/pages/country-guide";
import USAGuide from "@/pages/country-guides/usa";
import UKGuide from "@/pages/country-guides/uk";
import CanadaGuide from "@/pages/country-guides/canada";
import AustraliaGuide from "@/pages/country-guides/australia";
import BusinessCardGenerator from "@/pages/business-card-generator";
import Blog from "@/pages/blog";
import BlogList from "@/pages/blog-list";
import BlogArchive from "@/pages/blog-archive";
import KaplanTestOfEnglish from "@/pages/blog/kaplan-test-of-english";
import GlobalTalentVisaAustralia from "@/pages/blog/global-talent-visa-australia";
import AngliaRuskinUniversity from "@/pages/blog/anglia-ruskin-university";
import CyprusVisaPakistan from "@/pages/blog/cyprus-visa-pakistan";
import EngineeringLawCanada from "@/pages/blog/engineering-law-canada";
import TurkeyBestChoicePakistaniStudents from "@/pages/blog/turkey-best-choice-pakistani-students";
import UKLLMPakistaniBar from "@/pages/blog/uk-llm-pakistani-bar";
import StudyNursingUK from "@/pages/blog/study-nursing-uk";
import GlobalTalentVisaUK from "@/pages/blog/global-talent-visa-uk";
import TopStudyAbroadCountries from "@/pages/blog/top-study-abroad-countries";
import OxfordTestAcceptedUniversitiesUK from "@/pages/blog/oxford-test-accepted-universities-uk";
import MasterOfLawsLLMAustralia from "@/pages/blog/master-of-laws-llm-australia";
import GMATTestFeePakistan from "@/pages/blog/gmat-test-fee-in-pakistan";
import UKInternshipInternationalStudents from "@/pages/blog/uk-internship-international-students";
import HowToImproveIELTSListeningSkills from "@/pages/blog/how-to-improve-ielts-listening-skills";
import IELTSPreparationTipsAndTricks from "@/pages/blog/ielts-preparation-tips-and-tricks";
import HowToApplyForIELTSInPakistan from "@/pages/blog/how-to-apply-for-ielts-in-pakistan";
import BachelorsInICTSoftwareEngineering from "@/pages/blog/bachelors-in-ict-software-engineering";
import BachelorsIndustrialEngineeringManagement from "@/pages/blog/bachelors-industrial-engineering-management";
import BachelorsIndustrialEngineeringAndManagement from "@/pages/blog/bachelors-in-industrial-engineering-and-management";
import TeessideUniversityTrustedPartner from "@/pages/blog/teesside-university-trusted-partner";
import IELTSAcceptability2025 from "@/pages/blog/ielts-acceptability-2025";
import DifferenceIELTSGeneralAcademic from "@/pages/blog/difference-between-ielts-general-and-academic";
import IELTSBandScoreGuide from "@/pages/blog/ielts-band-score-complete-guide";
import LanguageCert2025Guide from "@/pages/blog/languagecert-2025-complete-guide";
import FinlandOnlineVisaApplication from "@/pages/blog/finland-online-visa-application-from-pakistan";
import NewYearResolutionsStudents2025 from "@/pages/blog/new-year-resolutions-for-students-2025";
import ComparisonEducationSystemPakistanUK from "@/pages/blog/comparison-of-education-system-of-pakistan-with-uk";
import HowMuchStudyGapAcceptableUKMasters from "@/pages/blog/how-much-study-gap-acceptable-in-uk-for-masters";
import GreenCardInternationalStudents from "@/pages/blog/green-card-for-international-students";
import RequirementsComputerScienceUSA from "@/pages/blog/requirements-to-study-computer-science-in-usa";
import Top10UniversitiesLondon from "@/pages/blog/top-10-universities-in-london";
import RecommendationLetterStudentScholarship from "@/pages/blog/recommendation-letter-for-student-scholarship";
import StudyInUK from "@/pages/blog/study-in-uk";
import StudyAbroadEducationConsultants from "@/pages/blog/study-abroad-education-consultants-dunya-consultants";
import DubaiVisaForPakistani from "@/pages/blog/dubai-visa-for-pakistani";
import UKStudentDependentVisaNewRules from "@/pages/blog/uk-student-dependent-visa-new-rules";
import BenefitsOfStudyingInLondon from "@/pages/blog/benefits-of-studying-in-london";
import ContactPage from "@/pages/contact";
import FAQsPage from "@/pages/faqs";
import ScholarshipsPage from "@/pages/scholarships";
import ServicesPage from "@/pages/services";
import NotFound from "@/pages/not-found";
import OfficesList from "@/pages/offices/OfficesList";
import OfficeDetails from "@/pages/offices/OfficeDetails";
import StudyAbroadJourney from "@/pages/study-abroad-journey";
import EngagementTracker from "@/components/gamification/engagement-tracker";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cost-calculator" component={CostCalculator} />
      <Route path="/course-match-tool" component={CourseMatchTool} />
      <Route path="/document-checklist" component={DocumentChecklist} />
      <Route path="/events" component={Events} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog" component={BlogArchive} />
      <Route path="/blog/list" component={BlogList} />
      <Route path="/blog/kaplan-test-of-english" component={KaplanTestOfEnglish} />
      <Route path="/blog/global-talent-visa-australia" component={GlobalTalentVisaAustralia} />
      <Route path="/blog/anglia-ruskin-university" component={AngliaRuskinUniversity} />
      <Route path="/blog/cyprus-visa-pakistan" component={CyprusVisaPakistan} />
      <Route path="/blog/engineering-law-canada" component={EngineeringLawCanada} />
      <Route path="/blog/turkey-best-choice-pakistani-students" component={TurkeyBestChoicePakistaniStudents} />
      <Route path="/blog/uk-llm-pakistani-bar" component={UKLLMPakistaniBar} />
      <Route path="/blog/study-nursing-uk" component={StudyNursingUK} />
      <Route path="/blog/global-talent-visa-uk" component={GlobalTalentVisaUK} />
      <Route path="/blog/top-study-abroad-countries" component={TopStudyAbroadCountries} />
      <Route path="/blog/oxford-test-accepted-universities-uk" component={OxfordTestAcceptedUniversitiesUK} />
      <Route path="/blog/master-of-laws-llm-australia" component={MasterOfLawsLLMAustralia} />
      <Route path="/blog/gmat-test-fee-in-pakistan" component={GMATTestFeePakistan} />
      <Route path="/blog/uk-internship-international-students" component={UKInternshipInternationalStudents} />
      <Route path="/blog/how-to-improve-ielts-listening-skills" component={HowToImproveIELTSListeningSkills} />
      <Route path="/blog/ielts-preparation-tips-and-tricks" component={IELTSPreparationTipsAndTricks} />
      <Route path="/blog/how-to-apply-for-ielts-in-pakistan" component={HowToApplyForIELTSInPakistan} />
      <Route path="/blog/bachelors-in-ict-software-engineering" component={BachelorsInICTSoftwareEngineering} />
      <Route path="/blog/bachelors-industrial-engineering-management" component={BachelorsIndustrialEngineeringManagement} />
      <Route path="/blog/bachelors-in-industrial-engineering-and-management" component={BachelorsIndustrialEngineeringAndManagement} />
      <Route path="/blog/teesside-university-trusted-partner" component={TeessideUniversityTrustedPartner} />
      <Route path="/blog/ielts-acceptability-2025" component={IELTSAcceptability2025} />
      <Route path="/blog/difference-between-ielts-general-and-academic" component={DifferenceIELTSGeneralAcademic} />
      <Route path="/blog/ielts-band-score-complete-guide" component={IELTSBandScoreGuide} />
      <Route path="/blog/languagecert-2025-complete-guide" component={LanguageCert2025Guide} />
      <Route path="/blog/finland-online-visa-application-from-pakistan" component={FinlandOnlineVisaApplication} />
      <Route path="/blog/new-year-resolutions-for-students-2025" component={NewYearResolutionsStudents2025} />
      <Route path="/blog/comparison-of-education-system-of-pakistan-with-uk" component={ComparisonEducationSystemPakistanUK} />
      <Route path="/blog/how-much-study-gap-acceptable-in-uk-for-masters" component={HowMuchStudyGapAcceptableUKMasters} />
      <Route path="/blog/green-card-for-international-students" component={GreenCardInternationalStudents} />
      <Route path="/blog/requirements-to-study-computer-science-in-usa" component={RequirementsComputerScienceUSA} />
      <Route path="/blog/top-10-universities-in-london" component={Top10UniversitiesLondon} />
      <Route path="/blog/recommendation-letter-for-student-scholarship" component={RecommendationLetterStudentScholarship} />
      <Route path="/blog/study-in-uk" component={StudyInUK} />
      <Route path="/blog/study-abroad-education-consultants-dunya-consultants" component={StudyAbroadEducationConsultants} />
      <Route path="/blog/dubai-visa-for-pakistani" component={DubaiVisaForPakistani} />
      <Route path="/blog/uk-student-dependent-visa-new-rules" component={UKStudentDependentVisaNewRules} />
      <Route path="/blog/benefits-of-studying-in-london" component={BenefitsOfStudyingInLondon} />
      <Route path="/ielts" component={IELTS} />
      <Route path="/ielts/exam-day" component={IELTSExamDay} />
      <Route path="/country-guide" component={CountryGuide} />
      <Route path="/country-guide/usa" component={USAGuide} />
      <Route path="/country-guide/uk" component={UKGuide} />
      <Route path="/country-guide/canada" component={CanadaGuide} />
      <Route path="/country-guide/australia" component={AustraliaGuide} />
      <Route path="/business-card-generator" component={BusinessCardGenerator} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/faqs" component={FAQsPage} />
      <Route path="/scholarships" component={ScholarshipsPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/study-abroad-journey" component={StudyAbroadJourney} />
      <Route path="/offices" component={OfficesList} />
      <Route path="/offices/:officeId" component={OfficeDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EngagementTracker>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </EngagementTracker>
    </QueryClientProvider>
  );
}

export default App;
