"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import News from "../../public/Components/News";
import Milestones from "../../public/Components/Milestones";
import Projects from "../../public/Components/Projects";
import VideoBanner from "../../public/Components/VideoBanner";

export default function Home() {

  return (
    <div className="body-wrapper">

      <section>
        <VideoBanner/>
      </section>

      <section className="section">
        <News />
      </section>

      <section className="section">
        <Milestones/>
      </section>

      <section className="section">
        <Projects/>
      </section>

    </div>
  );
}
