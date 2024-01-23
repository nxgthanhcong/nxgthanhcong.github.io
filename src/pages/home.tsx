import React from "react";
import { Introduce, Navigation, SocialList } from "../components";

export const Home = () => {
  return (
    <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-4">
      <header className="flex max-h-screen flex-col justify-between py-12 lg:sticky lg:top-0 lg:py-24">
        <Introduce />
        <Navigation />
        <SocialList />
      </header>
      <div>right</div>
    </div>
  );
};
