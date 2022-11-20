import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/hero/Hero";
import Section from "../components/sections/Section";
import Form from "../components/form/Form";
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
  if (!sections || !home || !footer) return <></>;

  let isRtl = true;
  const navbarData = getNavData(sections);

  return (
    <Flex direction="column">
      <Hero data={home} />
      <NavBar data={navbarData} />
      <VStack overflow="hidden">
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
      </VStack>
      <Form data={footer} />
    </Flex>
  );
};

export default Main;
