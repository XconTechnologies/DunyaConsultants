import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect, lazy, Suspense } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { Loader2 } from "lucide-react";
// Global ReactQuill CSS import to ensure proper loading
import 'react-quill/dist/quill.snow.css';
import Home from "@/pages/home";
import CostCalculator from "@/pages/cost-calculator";
import CourseMatchTool from "@/pages/course-match-tool";
import DocumentChecklist from "@/pages/document-checklist";
import Events from "@/pages/events";
import EventDetail from "@/pages/event-detail";
import EventRegistration from "@/pages/event-registration";

import IELTS from "@/pages/ielts";
import IELTSExamDay from "@/pages/ielts-exam-day";
import PTE from "@/pages/test-prep/pte";
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
import LahoreDHACity from "@/pages/offices/LahoreDHACity";
import LahoreJohar from "@/pages/offices/lahore-johar";
import Islamabad from "@/pages/offices/islamabad";
import Karachi from "@/pages/offices/karachi";
import IslamabadBlueArea from "@/pages/offices/IslamabadBlueArea";
import KarachiGulshan from "@/pages/offices/KarachiGulshan";
import FaisalabadCivilLines from "@/pages/offices/FaisalabadCivilLines";
import FaisalabadOffice from "@/pages/offices/FaisalabadOffice";
import GujranwalaOffice from "@/pages/offices/gujranwala";
import SialkotOffice from "@/pages/offices/sialkot";
import GujratOffice from "@/pages/offices/gujrat";
import BahawalpurOffice from "@/pages/offices/bahawalpur";
import MianChannuOffice from "@/pages/offices/mianchannu";
import MandiBahauddinOffice from "@/pages/offices/mandi-bahauddin";
import SheikhupuraOffice from "@/pages/offices/sheikhupura";
import MultanOffice from "@/pages/offices/multan";
import PeshawarOffice from "@/pages/offices/peshawar";
import JhelumOffice from "@/pages/offices/jhelum";
import MardanOffice from "@/pages/offices/mardan";
import JeddahOffice from "@/pages/offices/jeddah";
import IstanbulOffice from "@/pages/offices/istanbul";
import CairoOffice from "@/pages/offices/cairo";
import EdinburghOffice from "@/pages/offices/edinburgh";
import StudyAbroadJourney from "@/pages/study-abroad-journey";
import EngagementTracker from "@/components/gamification/engagement-tracker";
// Lazy-loaded Admin Pages for better performance
const AdminLogin = lazy(() => import("@/pages/admin/login"));
const UserLogin = lazy(() => import("@/pages/user-login"));
const UserDashboard = lazy(() => import("@/pages/dashboard"));
const AdminDashboard = lazy(() => import("@/pages/admin/dashboard"));
const BlogEditor = lazy(() => import("@/pages/admin/blog-editor"));
const AdminBlogPreview = lazy(() => import("@/pages/admin/blog-preview"));
const UserManagement = lazy(() => import("@/pages/admin/user-management"));
const UserActivity = lazy(() => import("@/pages/admin/user-activity"));
const BackupManagement = lazy(() => import("@/pages/admin/backup"));
const LeadsManagement = lazy(() => import("@/pages/admin/leads"));
const PostAssignments = lazy(() => import("@/pages/admin/post-assignments"));
const LeadAssignments = lazy(() => import("@/pages/admin/lead-assignments"));
const AdminCategoriesPage = lazy(() => import("@/pages/admin/categories"));
const AllPosts = lazy(() => import("@/pages/admin/posts"));
const MediaManagement = lazy(() => import("@/pages/admin/media"));
const EventsManagement = lazy(() => import("@/pages/admin/events-management"));
const EventEditor = lazy(() => import("@/pages/admin/event-editor"));
const TrashManagement = lazy(() => import("@/pages/admin/trash"));
const QRScannerPage = lazy(() => import("@/pages/admin/qr-scanner"));
const EventRegistrationsPage = lazy(() => import("@/pages/admin/event-registrations"));
const QrCodesPage = lazy(() => import("@/pages/admin/qr-codes"));
const UrlShortenerPage = lazy(() => import("@/pages/admin/url-shortener"));
const IconManagementPage = lazy(() => import("@/pages/admin/icon-management"));
const AdminIndex = lazy(() => import("@/pages/admin/index"));
const CategoryPage = lazy(() => import("@/pages/category"));
const CategoriesIndexPage = lazy(() => import("@/pages/categories"));
const FormManagement = lazy(() => import("@/pages/admin/form-management"));
const FormBuilder = lazy(() => import("@/pages/admin/form-builder"));
const FormSubmissions = lazy(() => import("@/pages/admin/form-submissions"));



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
import WhyChooseUs from "@/pages/about/why-choose-us";
import OurSuccessStories from "@/pages/about/our-success-stories";
import TeamPage from "@/pages/about/team";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfServices from "@/pages/terms-of-services";

function Router() {
  // Track page views when routes change - Google Analytics integration
  useAnalytics();

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
      <Route path="/cost-calculator" component={CostCalculator} />
      <Route path="/course-match-tool" component={CourseMatchTool} />
      <Route path="/document-checklist" component={DocumentChecklist} />
      <Route path="/events/register-now" component={EventRegistration} />
      <Route path="/events/:slug" component={EventDetail} />
      <Route path="/events" component={Events} />

      {/* Blog Routes - Date-based slugs */}
      <Route path="/blog" component={Blog} />
      <Route path="/category" component={CategoriesIndexPage} />
      <Route path="/category/:categorySlug" component={CategoryPage} />
      <Route path="/:year/:month/:day/:slug" component={Blog} />
      <Route path="/blog/:slug" component={Blog} />
      <Route path="/ielts" component={IELTS} />
      <Route path="/test-prep/ielts" component={IELTS} />
      <Route path="/ielts/exam-day" component={IELTSExamDay} />
      <Route path="/test-prep/pte" component={PTE} />
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
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-services" component={TermsOfServices} />
      <Route path="/study-abroad-journey" component={StudyAbroadJourney} />
      
      {/* About Routes */}
      <Route path="/about/" component={WhoWeAre} />
      <Route path="/about/why-choose-us" component={WhyChooseUs} />
      <Route path="/about/our-success-stories" component={OurSuccessStories} />
      <Route path="/about/team" component={TeamPage} />
      
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
      <Route path="/offices/lahore-dha-city" component={LahoreDHACity} />
      <Route path="/offices/lahore-johar" component={LahoreJohar} />
      <Route path="/offices/islamabad" component={Islamabad} />
      <Route path="/offices/karachi" component={Karachi} />
      <Route path="/offices/islamabad-blue-area" component={IslamabadBlueArea} />
      <Route path="/offices/karachi-gulshan" component={KarachiGulshan} />
      <Route path="/offices/faisalabad-civil-lines" component={FaisalabadCivilLines} />
      <Route path="/offices/faisalabad" component={FaisalabadOffice} />
      <Route path="/offices/gujranwala" component={GujranwalaOffice} />
      <Route path="/offices/sialkot" component={SialkotOffice} />
      <Route path="/offices/gujrat" component={GujratOffice} />
      <Route path="/offices/bahawalpur" component={BahawalpurOffice} />
      <Route path="/offices/mianchannu" component={MianChannuOffice} />
      <Route path="/offices/mandi-bahauddin" component={MandiBahauddinOffice} />
      <Route path="/offices/sheikhupura" component={SheikhupuraOffice} />
      <Route path="/offices/multan" component={MultanOffice} />
      <Route path="/offices/peshawar" component={PeshawarOffice} />
      <Route path="/offices/jhelum" component={JhelumOffice} />
      <Route path="/offices/mardan" component={MardanOffice} />
      <Route path="/offices/saudi-arabia-jeddah" component={JeddahOffice} />
      <Route path="/offices/turkey-istanbul" component={IstanbulOffice} />
      <Route path="/offices/egypt-cairo" component={CairoOffice} />
      <Route path="/offices/edinburgh" component={EdinburghOffice} />
      <Route path="/offices/:officeId" component={OfficeDetails} />
      
      {/* Admin Routes */}
      <Route path="/login" component={UserLogin} />
      <Route path="/admin" component={AdminIndex} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/posts" component={AllPosts} />
      <Route path="/admin/events" component={EventsManagement} />
      <Route path="/admin/qr-scanner" component={QRScannerPage} />
      <Route path="/admin/event-registrations" component={EventRegistrationsPage} />
      <Route path="/admin/qr-codes" component={QrCodesPage} />
      <Route path="/admin/url-shortener" component={UrlShortenerPage} />
      <Route path="/admin/branch-icons" component={IconManagementPage} />
      <Route path="/admin/media" component={MediaManagement} />
      <Route path="/admin/trash" component={TrashManagement} />
      <Route path="/dashboard">
        <Redirect to="/admin/dashboard" />
      </Route>
      <Route path="/admin/users" component={UserManagement} />
      <Route path="/admin/user-activity" component={UserActivity} />
      <Route path="/admin/backup" component={BackupManagement} />
      <Route path="/admin/leads" component={LeadsManagement} />
      <Route path="/admin/post-assignments" component={PostAssignments} />
      <Route path="/admin/lead-assignments" component={LeadAssignments} />
      <Route path="/admin/categories" component={AdminCategoriesPage} />
      <Route path="/admin/blog-editor/:id?" component={BlogEditor} />
      <Route path="/admin/blog-editor" component={BlogEditor} />
      <Route path="/blog-editor/:id?" component={BlogEditor} />
      <Route path="/blog-editor" component={BlogEditor} />
      <Route path="/admin/blog-preview/:id" component={AdminBlogPreview} />
      <Route path="/admin/event-editor/:id?" component={EventEditor} />
      <Route path="/admin/event-editor" component={EventEditor} />
      <Route path="/admin/form-management" component={FormManagement} />
      <Route path="/admin/form-builder/:id" component={FormBuilder} />
      <Route path="/admin/form-submissions/:id" component={FormSubmissions} />
      
      <Route component={NotFound} />
    </Switch>
    <WhatsAppButton />
    </>
  );
}

// Loading fallback component for code splitting
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
    <div className="text-center">
      <Loader2 className="w-12 h-12 animate-spin text-[#1D50C9] mx-auto mb-4" />
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
      // Track the initial page view after initialization
      window.setTimeout(() => {
        const currentPath = window.location.pathname;
        import('./lib/analytics').then(({ trackPageView }) => {
          trackPageView(currentPath);
        });
      }, 100);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <EngagementTracker>
        <TooltipProvider>
          <Toaster />
          <Suspense fallback={<LoadingFallback />}>
            <Router />
          </Suspense>
        </TooltipProvider>
      </EngagementTracker>
    </QueryClientProvider>
  );
}

export default App;
