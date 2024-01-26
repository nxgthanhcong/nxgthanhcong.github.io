import React from "react";
import { SectionTitle } from "../components";

const About = () => {
  return (
    <div id="about" data-item="about" className="v2-section about">
      <SectionTitle title="ABOUT" />
      <p className="mb-4 text-xl text-slate-400">
        Graduated at 2021, I decided to try my hand at creating custom
        <span className="text-slate-200">Tumblr</span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p className="mb-4 text-xl text-slate-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        <span className="text-slate-200">Spotify API</span>.
      </p>
      <p className="mb-4 text-xl text-slate-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.
        <span className="text-slate-200">Korok seeds</span>.
      </p>
    </div>
  );
};

export default About;
