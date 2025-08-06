import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ProjectShowcaseWrapper } from "@/components/sections/project-showcase";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="home">
        <Hero />
        <About />
        <ProjectShowcaseWrapper />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}