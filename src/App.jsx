import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Music } from "lucide-react";
import WelcomePage from "./WelcomePage";
import ProposalPage from "./ProposalPage";
import CelebrationPage from "./CelebrationPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [crushName, setCrushName] = useState("Aarru"); // Change this to your crush's name

  const goToPage2 = () => setCurrentPage(2);
  const goToPage3 = () => setCurrentPage(3);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {currentPage === 1 && (
        <WelcomePage onNext={goToPage2} crushName={crushName} />
      )}
      {currentPage === 2 && (
        <ProposalPage onYes={goToPage3} crushName={crushName} />
      )}
      {currentPage === 3 && <CelebrationPage crushName={crushName} />}
    </div>
  );
}
