import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Pillars } from "./components/Pillars";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Journal } from "./components/Journal";
import { Opportunities } from "./components/Opportunities";
import { Footer } from "./components/Footer";
import { ApplyPage } from "./components/pages/ApplyPage";
import { PartnershipPage } from "./components/pages/PartnershipPage";
import { ViewOpeningsPage } from "./components/pages/ViewOpeningsPage";
import { SignInPage } from "./components/pages/SignInPage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { GetStartedPage } from "./components/pages/GetStartedPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "apply":
        return <ApplyPage onNavigate={setCurrentPage} />;
      case "partnership":
        return <PartnershipPage onNavigate={setCurrentPage} />;
      case "openings":
        return <ViewOpeningsPage onNavigate={setCurrentPage} />;
      case "signin":
        return <SignInPage onNavigate={setCurrentPage} />;
      case "signup":
        return <SignUpPage onNavigate={setCurrentPage} />;
      case "get-started":
        return <GetStartedPage onNavigate={setCurrentPage} />;
      default:
        return (
          <main>
            <Hero onNavigate={setCurrentPage} />
            <About />
            <Pillars />
            <ProjectShowcase />
            <Journal />
            <Opportunities onNavigate={setCurrentPage} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}