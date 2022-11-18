import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import Section from "../components/sections/Section";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";

export type SectionData = {
  title: string;
  colorHue: number;
  icon: string;
  label: string;
  description: string;
  heroLink: {
    href: string;
    label: string;
    icon: string;
  }[];
  items: { title: string; text: string }[];
};

const getNavData = (sections: any) =>
  sections.map((section: any) => ({
    title: section.title,
    icon: section.icon,
    colorHue: section.colorHue,
  }));

const Main = ({ sections, home, footer }: any) => {
  if (!sections) return <></>;
  
  let isRtl = true;
  const navbarData = getNavData(sections);

  return (
    <Flex direction="column">
      <Hero />
      <NavBar data={navbarData} />
      {sections.map((section: any, index: any) => {
        if (home.content.items[index].layout === "regular") {
          isRtl = !isRtl;
        }
        return (
          <Section
            key={section.title}
            {...section}
            {...home.content.items[index]}
            isRtl={isRtl}
          />
        );
      })}
      {/* <Footer/> */}
    </Flex>
  );
};

export default Main;
