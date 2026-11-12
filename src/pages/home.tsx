import React from "react";
import { Container, Navigation, SocialList } from "../components";
import {
  AboutSection,
  BlogsSection,
  EducationSection,
  ExperiencesSection,
  IngredientSection,
  IntroduceSection,
  ProjectsSection,
} from "../sections";

const Home = () => {
  return (
    <Container girdColVariant="lg:grid-cols-2">
      <header className="grid content-between max-h-screen lg:sticky lg:top-0 py-12 lg:py-24 lg:short:py-12">
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
        <EducationSection />
        <IngredientSection />
      </div>
    </Container>
  );
};

export default Home;
