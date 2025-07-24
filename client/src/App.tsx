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
import GlobalTalentVisaAustraliaGuide from "@/pages/blog/global-talent-visa-australia-guide";
import CyprusVisaPakistan from "@/pages/blog/cyprus-visa-pakistan";
import EngineeringLawProgramsCanada from "@/pages/blog/engineering-law-programs-canada";
import TurkeyBestChoicePakistaniStudents from "@/pages/blog/turkey-best-choice-pakistani-students";
import UKLLMPakistaniBar from "@/pages/blog/uk-llm-pakistani-bar";

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
import AngliaRuskinUniversity from "@/pages/blog/anglia-ruskin-university";
import DubaiVisaForPakistani from "@/pages/blog/dubai-visa-for-pakistani";
import UKStudentDependentVisaNewRules from "@/pages/blog/uk-student-dependent-visa-new-rules";
import BenefitsOfStudyingInLondon from "@/pages/blog/benefits-of-studying-in-london";
import BangorUniversityAcceptanceRate from "@/pages/blog/bangor-university-acceptance-rate";
import MostCommonMistakesToAvoidForYourUKStudentVisaSuccess from "@/pages/blog/most-common-mistakes-to-avoid-for-your-uk-student-visa-success";
import UKStudentVisaRatioFromPakistan from "@/pages/blog/uk-student-visa-ratio-from-pakistan";
import LowCostUniversitiesInUKForInternationalStudents from "@/pages/blog/low-cost-universities-in-uk-for-international-students";
import MSInBusinessAnalyticsCourseInUSA from "@/pages/blog/ms-in-business-analytics-course-in-usa";
import MasterOfFinanceInUK from "@/pages/blog/master-of-finance-in-uk";
import MSCBusinessAnalyticsInUK from "@/pages/blog/msc-business-analytics-in-uk";
import GermanyBlockedAccount from "@/pages/blog/germany-blocked-account";
import TOEFLTestFeeInPakistan from "@/pages/blog/toefl-test-fee-in-pakistan";
import Top10ReasonsToStudyInUK from "@/pages/blog/top-10-reasons-to-study-in-uk";
import JobsInCanadaForPakistaniStudents from "@/pages/blog/jobs-in-canada-for-pakistani-students";
import WhatIsFoundationYearInUK from "@/pages/blog/what-is-foundation-year-in-uk";
import WhichDegreeIsBestInPakistan from "@/pages/blog/which-degree-is-best-in-pakistan";
import CanadaStudentVisaForPakistani from "@/pages/blog/canada-student-visa-for-pakistani";
import LLMInUKForPakistaniStudents from "@/pages/blog/llm-in-uk-for-pakistani-students";
import TBTestForUKVisaInPakistan from './pages/blog/tb-test-for-uk-visa-in-pakistan';
import MOIAcceptedUniversitiesInUK from './pages/blog/moi-accepted-universities-in-uk';
import IELTSExamFeeInPakistan from './pages/blog/ielts-exam-fee-in-pakistan';
import ErasmusMundusScholarship from './pages/blog/erasmus-mundus-scholarship';
import JanuaryIntakeUniversitiesInUK from './pages/blog/january-intake-universities-in-uk';
import GRETestFeeInPakistan from './pages/blog/gre-test-fee-in-pakistan';
import MBBSInSwedenForPakistaniStudents from "@/pages/blog/mbbs-in-sweden-for-pakistani-students";
import MBBSInAustraliaForPakistaniStudents from "@/pages/blog/mbbs-in-australia-for-pakistani-students";
import TurkeyBurslariScholarshipCompleteGuide from "@/pages/blog/turkey-burslari-scholarship-complete-guide";
import TBTestForUKVisaBlogPage from "@/pages/blog/tb-test-for-uk-visa-in-pakistan";
import MOIAcceptedUniversitiesBlogPage from "@/pages/blog/moi-accepted-universities-in-uk";
import IELTSExamFeeBlogPage from "@/pages/blog/ielts-exam-fee-in-pakistan";
import ContactPage from "@/pages/contact";
import FAQsPage from "@/pages/faqs";
import ScholarshipsPage from "@/pages/scholarships";
import ServicesPage from "@/pages/services";
import NotFound from "@/pages/not-found";
import OfficesList from "@/pages/offices/OfficesList";
import OfficeDetails from "@/pages/offices/OfficeDetails";
import StudyAbroadJourney from "@/pages/study-abroad-journey";
import EngagementTracker from "@/components/gamification/engagement-tracker";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import BlogEditor from "@/pages/admin/blog-editor";

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
      <Route path="/blog/global-talent-visa-australia-guide" component={GlobalTalentVisaAustraliaGuide} />
      <Route path="/blog/cyprus-visa-pakistan" component={CyprusVisaPakistan} />
      <Route path="/blog/engineering-law-canada" component={EngineeringLawProgramsCanada} />
      <Route path="/blog/turkey-best-choice-pakistani-students" component={TurkeyBestChoicePakistaniStudents} />
      <Route path="/blog/uk-llm-pakistani-bar" component={UKLLMPakistaniBar} />

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
      <Route path="/blog/anglia-ruskin-university" component={AngliaRuskinUniversity} />
      <Route path="/blog/dubai-visa-for-pakistani" component={DubaiVisaForPakistani} />
      <Route path="/blog/uk-student-dependent-visa-new-rules" component={UKStudentDependentVisaNewRules} />
      <Route path="/blog/benefits-of-studying-in-london" component={BenefitsOfStudyingInLondon} />
      <Route path="/blog/bangor-university-acceptance-rate" component={BangorUniversityAcceptanceRate} />
      <Route path="/blog/most-common-mistakes-to-avoid-for-your-uk-student-visa-success" component={MostCommonMistakesToAvoidForYourUKStudentVisaSuccess} />
      <Route path="/blog/uk-student-visa-ratio-from-pakistan" component={UKStudentVisaRatioFromPakistan} />
      <Route path="/blog/low-cost-universities-in-uk-for-international-students" component={LowCostUniversitiesInUKForInternationalStudents} />
      <Route path="/blog/ms-in-business-analytics-course-in-usa" component={MSInBusinessAnalyticsCourseInUSA} />
      <Route path="/blog/master-of-finance-in-uk" component={MasterOfFinanceInUK} />
      <Route path="/blog/msc-business-analytics-in-uk" component={MSCBusinessAnalyticsInUK} />
      <Route path="/blog/germany-blocked-account" component={GermanyBlockedAccount} />
      <Route path="/blog/toefl-test-fee-in-pakistan" component={TOEFLTestFeeInPakistan} />
      <Route path="/blog/top-10-reasons-to-study-in-uk" component={Top10ReasonsToStudyInUK} />
      <Route path="/blog/jobs-in-canada-for-pakistani-students" component={JobsInCanadaForPakistaniStudents} />
      <Route path="/blog/what-is-foundation-year-in-uk" component={WhatIsFoundationYearInUK} />
      <Route path="/blog/which-degree-is-best-in-pakistan" component={WhichDegreeIsBestInPakistan} />
      <Route path="/blog/canada-student-visa-for-pakistani" component={CanadaStudentVisaForPakistani} />
      <Route path="/blog/llm-in-uk-for-pakistani-students" component={LLMInUKForPakistaniStudents} />
      <Route path="/blog/mbbs-in-sweden-for-pakistani-students" component={MBBSInSwedenForPakistaniStudents} />
      <Route path="/blog/mbbs-in-australia-for-pakistani-students" component={MBBSInAustraliaForPakistaniStudents} />
      <Route path="/blog/a-complete-guide-to-turkey-burslari-scholarship" component={TurkeyBurslariScholarshipCompleteGuide} />
      <Route path="/blog/tb-test-for-uk-visa-in-pakistan" component={TBTestForUKVisaInPakistan} />
      <Route path="/blog/moi-accepted-universities-in-uk" component={MOIAcceptedUniversitiesInUK} />
      <Route path="/blog/ielts-exam-fee-in-pakistan" component={IELTSExamFeeInPakistan} />
      <Route path="/blog/erasmus-mundus-scholarship" component={ErasmusMundusScholarship} />
      <Route path="/blog/january-intake-universities-in-uk" component={JanuaryIntakeUniversitiesInUK} />
      <Route path="/blog/gre-test-fee-in-pakistan" component={GRETestFeeInPakistan} />
      {/* Dynamic route for new blog posts */}
      <Route path="/blog/:slug" component={Blog} />
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
      
      {/* Admin Routes */}
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/blog-editor/:id?" component={BlogEditor} />
      <Route path="/admin/blog-editor" component={BlogEditor} />
      
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
