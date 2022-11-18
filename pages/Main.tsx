import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import Section from "../components/sections/Section";
import HomeData from "../public/home.json";
import Footer from "../components/footer/Footer";

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
const Main = ({ sections, home, footer }: any) => {
  const items = HomeData.content.items;
  let isRtl = true;
  return (
    <Flex w="100vw" direction="column">
      <Hero />
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
