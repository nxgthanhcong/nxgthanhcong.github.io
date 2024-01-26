import React from "react";
import { Navigation, SocialList } from "../components";
import {
  AboutSection,
  BlogsSection,
  ExperiencesSection,
  IngredientSection,
  IntroduceSection,
  ProjectsSection,
} from "../sections";

export const Home = () => {
  return (
    <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-2">
      <header className="grid content-between max-h-screen lg:sticky lg:top-0 py-12 lg:py-24">
        <div>
          <IntroduceSection />
          <Navigation />
        </div>
        <SocialList />
      </header>
      <div className="scroll-smooth py-12 lg:py-24">
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection />
        <BlogsSection />
        <IngredientSection />
      </div>
    </div>
  );
};
