"use client";
import { Navbar, Hero, AboutMe } from "@/components";
import { useState } from "react";

export default function Home() {
  const [openBio, setOpenBio] = useState(false);

  const toggle: () => void = function () {
    setOpenBio(!openBio);
  };

  return (
    <main className="overflow-hidden">
      <Navbar toggle={toggle} />
      <AboutMe openBio={openBio} toggle={toggle} />
      <Hero />
      <Hero />
    </main>
  );
}
