import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import CostCalculator from "@/pages/cost-calculator";
import Events from "@/pages/events";
import Blogs from "@/pages/blogs";
import IELTS from "@/pages/ielts";
import IELTSExamDay from "@/pages/ielts-exam-day";
import CountryGuide from "@/pages/country-guide";
import USAGuide from "@/pages/country-guides/usa";
import UKGuide from "@/pages/country-guides/uk";
import CanadaGuide from "@/pages/country-guides/canada";
import AustraliaGuide from "@/pages/country-guides/australia";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cost-calculator" component={CostCalculator} />
      <Route path="/events" component={Events} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/ielts" component={IELTS} />
      <Route path="/ielts/exam-day" component={IELTSExamDay} />
      <Route path="/country-guide" component={CountryGuide} />
      <Route path="/country-guide/usa" component={USAGuide} />
      <Route path="/country-guide/uk" component={UKGuide} />
      <Route path="/country-guide/canada" component={CanadaGuide} />
      <Route path="/country-guide/australia" component={AustraliaGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
