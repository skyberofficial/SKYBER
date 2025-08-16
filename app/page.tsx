import { Hero } from "@/components/sections/hero";
import { PartnersStrip } from "@/components/sections/partners-strip";
import OngoingProject from "@/components/sections/ongoing-project";
import { AboutSkyber } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { ProjectsSlider } from "@/components/sections/projects-slider";
import { Testimonials } from "@/components/sections/testimonials";
import { EmailSubscription } from "@/components/sections/email-subscription";

export default function Home() {
  return (
    <main data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="home">
        <Hero />
        <PartnersStrip />
        <OngoingProject />
        <AboutSkyber />
        <Services />
        <ProjectsSlider />
        <Testimonials />
        <EmailSubscription />
      </div>
    </main>
  );
}
