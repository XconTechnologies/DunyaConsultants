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
import GlobalTalentVisaAustralia from "@/pages/blog/global-talent-visa-australia";
import TopStudyAbroadCountries from "@/pages/blog/top-study-abroad-countries";
import IELTSPreparationTips from "@/pages/blog/ielts-preparation-tips";
import StudyNursingUK from "@/pages/blog/study-nursing-uk";
import ImproveIELTSListening from "@/pages/blog/improve-ielts-listening";
import CyprusVisaPakistan from "@/pages/blog/cyprus-visa-pakistan";
import StudyInTurkey from "@/pages/blog/study-in-turkey";
import ScholarshipOpportunities2025 from "@/pages/blog/scholarship-opportunities-2025";
import BlogArchive from "@/pages/blog-archive";
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
      <Route path="/blog/kaplan-test-of-english" component={Blog} />
      <Route path="/blog/global-talent-visa-australia" component={GlobalTalentVisaAustralia} />
      <Route path="/blog/top-study-abroad-countries" component={TopStudyAbroadCountries} />
      <Route path="/blog/ielts-preparation-tips" component={IELTSPreparationTips} />
      <Route path="/blog/study-nursing-uk" component={StudyNursingUK} />
      <Route path="/blog/improve-ielts-listening" component={ImproveIELTSListening} />
      <Route path="/blog/cyprus-visa-pakistan" component={CyprusVisaPakistan} />
      <Route path="/blog/study-in-turkey" component={StudyInTurkey} />
      <Route path="/blog/scholarship-opportunities-2025" component={ScholarshipOpportunities2025} />
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
