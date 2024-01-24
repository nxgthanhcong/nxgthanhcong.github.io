import React from "react";
import {
  About,
  Experiences,
  Introduce,
  Navigation,
  SocialList,
} from "../components";

export const Home = () => {
  return (
    <div className="mx-auto max-w-screen-lg grid lg:grid-cols-2 gap-8">
      <header className="grid content-between max-h-screen lg:sticky lg:top-0 py-12 lg:py-24">
        <div>
          <Introduce />
          <Navigation />
        </div>
        <SocialList />
      </header>
      <div className="scroll-smooth py-12 lg:py-24">
        <About />
        <Experiences />
      </div>
    </div>
  );
};
