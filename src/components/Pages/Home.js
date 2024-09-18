import React from "react";
import HeroSection from "../HomeCompo/HeroSection";
import FeaturedTeams from "../HomeCompo/FeaturedTeams";
import Tourna from "../HomeCompo/tourna";
export const Home = () => {
  return (
    <div style={{ marginTop: "-2rem" }}>
      <main className="flex-grow">
        <HeroSection />
        <FeaturedTeams />
        <Tourna /> 
      </main>
    </div>
  );
};