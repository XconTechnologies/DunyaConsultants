import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/home";
import CostCalculator from "@/pages/cost-calculator";
import CourseMatchTool from "@/pages/course-match-tool";
import DocumentChecklist from "@/pages/document-checklist";
import Events from "@/pages/events";

import IELTS from "@/pages/ielts";
import IELTSExamDay from "@/pages/ielts-exam-day";
import PTE from "@/pages/test-prep/pte";
import TOEFL from "@/pages/test-prep/toefl";
import Duolingo from "@/pages/test-prep/duolingo";
import CountryGuide from "@/pages/country-guide";
import USAGuide from "@/pages/country-guides/usa";
import UKGuide from "@/pages/country-guides/uk";
import CanadaGuide from "@/pages/country-guides/canada";
import AustraliaGuide from "@/pages/country-guides/australia";
import BusinessCardGenerator from "@/pages/business-card-generator";
import Blog from "@/pages/blog";
import ContactPage from "@/pages/contact";
import FAQsPage from "@/pages/faqs";
import ScholarshipsPage from "@/pages/scholarships";
import ServicesPage from "@/pages/services";
import NotFound from "@/pages/not-found";
import OfficesList from "@/pages/offices/OfficesList";
import OfficeDetails from "@/pages/offices/OfficeDetails";
import SargodhaHeadOffice from "@/pages/offices/SargodhaHeadOffice";
import LahoreDHA from "@/pages/offices/LahoreDHA";
import LahoreJohar from "@/pages/offices/lahore-johar";
import IslamabadBlueArea from "@/pages/offices/IslamabadBlueArea";
import KarachiGulshan from "@/pages/offices/KarachiGulshan";
import FaisalabadCivilLines from "@/pages/offices/FaisalabadCivilLines";
import GujranwalaOffice from "@/pages/offices/gujranwala";
import SialkotOffice from "@/pages/offices/sialkot";
import GujratOffice from "@/pages/offices/gujrat";
import BahawalpurOffice from "@/pages/offices/bahawalpur";
import MianChannuOffice from "@/pages/offices/mian-channu";
import MandiBahauddinOffice from "@/pages/offices/mandi-bahauddin";
import SheikhupuraOffice from "@/pages/offices/sheikhupura";
import MultanOffice from "@/pages/offices/multan";
import PeshawarOffice from "@/pages/offices/peshawar";
import JhelumOffice from "@/pages/offices/jhelum";
import MardanOffice from "@/pages/offices/mardan";
import JeddahOffice from "@/pages/offices/jeddah";
import IstanbulOffice from "@/pages/offices/istanbul";
import EdinburghOffice from "@/pages/offices/edinburgh";
import StudyAbroadJourney from "@/pages/study-abroad-journey";
import EngagementTracker from "@/components/gamification/engagement-tracker";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import BlogEditor from "@/pages/admin/blog-editor";



// Study Abroad Pages
import StudyAbroadUSA from "@/pages/study-abroad/usa";
import StudyAbroadUK from "@/pages/study-abroad/uk";
import StudyAbroadCanada from "@/pages/study-abroad/canada";
import StudyAbroadFinland from "@/pages/study-abroad/finland";
import StudyAbroadAustralia from "@/pages/study-abroad/australia";
import StudyAbroadBelgium from "@/pages/study-abroad/belgium";
import StudyAbroadTurkey from "@/pages/study-abroad/turkey";

// About Pages
import WhoWeAre from "@/pages/about/who-we-are";
import MissionVision from "@/pages/about/mission-vision";
import WhyChooseUs from "@/pages/about/why-choose-us";
import SuccessStories from "@/pages/about/success-stories";
import OurSuccessStories from "@/pages/about/our-success-stories";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
      <Route path="/cost-calculator" component={CostCalculator} />
      <Route path="/course-match-tool" component={CourseMatchTool} />
      <Route path="/document-checklist" component={DocumentChecklist} />
      <Route path="/events" component={Events} />

      {/* Blog Routes - Date-based slugs */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:year/:month/:day/:slug" component={Blog} />
      <Route path="/blog/:slug" component={Blog} />
      <Route path="/ielts" component={IELTS} />
      <Route path="/test-prep/ielts" component={IELTS} />
      <Route path="/ielts/exam-day" component={IELTSExamDay} />
      <Route path="/test-prep/pte" component={PTE} />
      <Route path="/test-prep/toefl" component={TOEFL} />
      <Route path="/test-prep/duolingo" component={Duolingo} />
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
      
      {/* About Routes */}
      <Route path="/about/" component={WhoWeAre} />
      <Route path="/about/mission-vision" component={MissionVision} />
      <Route path="/about/why-choose-us" component={WhyChooseUs} />
      <Route path="/about/success-stories" component={SuccessStories} />
      <Route path="/about/our-success-stories" component={OurSuccessStories} />
      
      {/* Study Abroad Routes */}
      <Route path="/study-abroad/usa" component={StudyAbroadUSA} />
      <Route path="/study-abroad/uk" component={StudyAbroadUK} />
      <Route path="/study-abroad/canada" component={StudyAbroadCanada} />
      <Route path="/study-abroad/finland" component={StudyAbroadFinland} />
      <Route path="/study-abroad/australia" component={StudyAbroadAustralia} />
      <Route path="/study-abroad/belgium" component={StudyAbroadBelgium} />
      <Route path="/study-abroad/turkey" component={StudyAbroadTurkey} />
      
      <Route path="/offices" component={OfficesList} />
      <Route path="/offices/sargodha-head-office" component={SargodhaHeadOffice} />
      <Route path="/offices/lahore-dha" component={LahoreDHA} />
      <Route path="/offices/lahore-johar" component={LahoreJohar} />
      <Route path="/offices/islamabad-blue-area" component={IslamabadBlueArea} />
      <Route path="/offices/karachi-gulshan" component={KarachiGulshan} />
      <Route path="/offices/faisalabad-civil-lines" component={FaisalabadCivilLines} />
      <Route path="/offices/gujranwala" component={GujranwalaOffice} />
      <Route path="/offices/sialkot" component={SialkotOffice} />
      <Route path="/offices/gujrat" component={GujratOffice} />
      <Route path="/offices/bahawalpur" component={BahawalpurOffice} />
      <Route path="/offices/mian-channu" component={MianChannuOffice} />
      <Route path="/offices/mandi-bahauddin" component={MandiBahauddinOffice} />
      <Route path="/offices/sheikhupura" component={SheikhupuraOffice} />
      <Route path="/offices/multan" component={MultanOffice} />
      <Route path="/offices/peshawar" component={PeshawarOffice} />
      <Route path="/offices/jhelum" component={JhelumOffice} />
      <Route path="/offices/mardan" component={MardanOffice} />
      <Route path="/offices/jeddah" component={JeddahOffice} />
      <Route path="/offices/istanbul" component={IstanbulOffice} />
      <Route path="/offices/edinburgh" component={EdinburghOffice} />
      <Route path="/offices/:officeId" component={OfficeDetails} />
      
      {/* Admin Routes */}
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/blog-editor/:id?" component={BlogEditor} />
      <Route path="/admin/blog-editor" component={BlogEditor} />
      
      <Route component={NotFound} />
    </Switch>
    </>
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
