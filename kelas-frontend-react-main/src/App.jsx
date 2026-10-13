import React from "react";
import {
  brand,
  hero,
  navLinks,
  socials,
  about,
  skillGroups,
  projects,
  services,
  testimonials,
  contact,
} from "./Data/Portfolio";
import { Navbar, Hero, About, Skills, Projects, Services, Testimonials, Contact, Footer } from "./Components";

function App() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar brand={brand} links={navLinks} />
      <main>
        <Hero {...hero} socials={socials} />
        <About {...about} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} />
        <Services services={services} />
        <Testimonials items={testimonials} />
        <Contact contact={contact} socials={socials} onSubmit={(FormData)=>console.log('Anjay', FormData)} />
         
      </main> 
      <Footer brand={brand.name} builtWith={"Tangan, dan jari-jemari saya."}/>
    </div>
  );
}

export default App;
