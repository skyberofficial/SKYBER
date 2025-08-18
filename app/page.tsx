import { Hero } from "@/components/sections/hero";
import { PartnersStrip } from "@/components/sections/partners-strip";
import OngoingProject from "@/components/sections/ongoing-project";
import { AboutSkyber } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { ProjectsSlider } from "@/components/sections/projects-slider";
import { Testimonials } from "@/components/sections/testimonials";
import { EmailSubscription } from "@/components/sections/email-subscription";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SKYBER",
            "description": "SKYBER is a security-minded studio crafting resilient digital products. From idea to launch, we embed privacy, performance and maintainability into every decision.",
            "url": "https://skyber.dev",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://skyber.dev/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SKYBER",
              "logo": {
                "@type": "ImageObject",
                "url": "https://skyber.dev/favicon.svg"
              }
            }
          })
        }}
      />
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SKYBER",
            "description": "Security-minded studio crafting resilient digital products",
            "url": "https://skyber.dev",
            "logo": "https://skyber.dev/favicon.svg",
            "sameAs": [
              "https://twitter.com/skyber",
              "https://github.com/skyber",
              "https://linkedin.com/company/skyber"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://skyber.dev/contact"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 0,
                "longitude": 0
              },
              "geoRadius": "50000"
            }
          })
        }}
      />
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
    </>
  );
}
