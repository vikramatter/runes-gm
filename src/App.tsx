import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/not-found";
import { Toaster } from "./components/ui/toaster";
import Footer from "./components/Footer";
import Header from "./components/Header";


function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
