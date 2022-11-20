import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import Hero from "./hero/Hero";
import Section from "./sections/Section";
import Form from "./form/Form";
import NavBar from "./NavBar";

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
  sections.map(({ title, icon, colorHue }: any) => ({
    title,
    icon,
    colorHue,
  }));

const Main = ({ sections, home, footer }: any) => {
  if (!sections || !home || !footer) return <></>;
  const navbarData = getNavData(sections);
  let isRtl = true;

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

      {/* <Form data={footer} /> */}
    </Flex>
  );
};

export default Main;