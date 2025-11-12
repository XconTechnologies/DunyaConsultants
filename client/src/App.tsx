import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { lazy, Suspense } from "react";
import { useAnalytics } from "./hooks/use-analytics";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import EngagementTracker from "@/components/gamification/engagement-tracker";

// Lazy-load non-critical pages for better performance
const CostCalculator = lazy(() => import("@/pages/cost-calculator"));
const CourseMatchTool = lazy(() => import("@/pages/course-match-tool"));
const DocumentChecklist = lazy(() => import("@/pages/document-checklist"));
const Events = lazy(() => import("@/pages/events"));
const EventDetail = lazy(() => import("@/pages/event-detail"));
const EventRegistration = lazy(() => import("@/pages/event-registration"));
const IELTS = lazy(() => import("@/pages/ielts"));
const IELTSExamDay = lazy(() => import("@/pages/ielts-exam-day"));
const PTE = lazy(() => import("@/pages/test-prep/pte"));
const Duolingo = lazy(() => import("@/pages/test-prep/duolingo"));
const CountryGuide = lazy(() => import("@/pages/country-guide"));
const USAGuide = lazy(() => import("@/pages/country-guides/usa"));
const UKGuide = lazy(() => import("@/pages/country-guides/uk"));
const CanadaGuide = lazy(() => import("@/pages/country-guides/canada"));
const AustraliaGuide = lazy(() => import("@/pages/country-guides/australia"));
const BusinessCardGenerator = lazy(() => import("@/pages/business-card-generator"));
const Blog = lazy(() => import("@/pages/blog"));
const ContactPage = lazy(() => import("@/pages/contact"));
const FAQsPage = lazy(() => import("@/pages/faqs"));
const ScholarshipsPage = lazy(() => import("@/pages/scholarships"));
const ServicesPage = lazy(() => import("@/pages/services"));
const BookConsultation = lazy(() => import("@/pages/book-consultation"));
// Lazy-load office pages
const OfficesList = lazy(() => import("@/pages/offices/OfficesList"));
const OfficeDetails = lazy(() => import("@/pages/offices/OfficeDetails"));
const SargodhaHeadOffice = lazy(() => import("@/pages/offices/SargodhaHeadOffice"));
const LahoreDHA = lazy(() => import("@/pages/offices/LahoreDHA"));
const LahoreDHACity = lazy(() => import("@/pages/offices/LahoreDHACity"));
const LahoreJohar = lazy(() => import("@/pages/offices/lahore-johar"));
const Islamabad = lazy(() => import("@/pages/offices/islamabad"));
const Karachi = lazy(() => import("@/pages/offices/karachi"));
const IslamabadBlueArea = lazy(() => import("@/pages/offices/IslamabadBlueArea"));
const KarachiGulshan = lazy(() => import("@/pages/offices/KarachiGulshan"));
const FaisalabadCivilLines = lazy(() => import("@/pages/offices/FaisalabadCivilLines"));
const FaisalabadOffice = lazy(() => import("@/pages/offices/FaisalabadOffice"));
const GujranwalaOffice = lazy(() => import("@/pages/offices/gujranwala"));
const SialkotOffice = lazy(() => import("@/pages/offices/sialkot"));
const GujratOffice = lazy(() => import("@/pages/offices/gujrat"));
const BahawalpurOffice = lazy(() => import("@/pages/offices/bahawalpur"));
const MianChannuOffice = lazy(() => import("@/pages/offices/mianchannu"));
const MandiBahauddinOffice = lazy(() => import("@/pages/offices/mandi-bahauddin"));
const SheikhupuraOffice = lazy(() => import("@/pages/offices/sheikhupura"));
const MultanOffice = lazy(() => import("@/pages/offices/multan"));
const PeshawarOffice = lazy(() => import("@/pages/offices/peshawar"));
const JhelumOffice = lazy(() => import("@/pages/offices/jhelum"));
const MardanOffice = lazy(() => import("@/pages/offices/mardan"));
const JeddahOffice = lazy(() => import("@/pages/offices/jeddah"));
const IstanbulOffice = lazy(() => import("@/pages/offices/istanbul"));
const CairoOffice = lazy(() => import("@/pages/offices/cairo"));
const EdinburghOffice = lazy(() => import("@/pages/offices/edinburgh"));
const StudyAbroadJourney = lazy(() => import("@/pages/study-abroad-journey"));
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



// Lazy-load Study Abroad Pages
const StudyAbroadUSA = lazy(() => import("@/pages/study-abroad/usa"));
const StudyAbroadUK = lazy(() => import("@/pages/study-abroad/uk"));
const StudyAbroadCanada = lazy(() => import("@/pages/study-abroad/canada"));
const StudyAbroadFinland = lazy(() => import("@/pages/study-abroad/finland"));
const StudyAbroadAustralia = lazy(() => import("@/pages/study-abroad/australia"));
const StudyAbroadBelgium = lazy(() => import("@/pages/study-abroad/belgium"));
const StudyAbroadTurkey = lazy(() => import("@/pages/study-abroad/turkey"));

// Lazy-load About Pages
const WhoWeAre = lazy(() => import("@/pages/about/who-we-are"));
const WhyChooseUs = lazy(() => import("@/pages/about/why-choose-us"));
const OurSuccessStories = lazy(() => import("@/pages/about/our-success-stories"));
const TeamPage = lazy(() => import("@/pages/about/team"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfServices = lazy(() => import("@/pages/terms-of-services"));

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
      <Route path="/book-consultation" component={BookConsultation} />
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

function App() {
  // Google Analytics is now initialized via requestIdleCallback in index.html for better performance
  // No need to initialize here anymore
  
  return (
    <QueryClientProvider client={queryClient}>
      <EngagementTracker>
        <TooltipProvider>
          <Toaster />
          <Suspense fallback={null}>
            <Router />
          </Suspense>
        </TooltipProvider>
      </EngagementTracker>
    </QueryClientProvider>
  );
}

export default App;
