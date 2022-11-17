import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import SectionWrapper from "../components/sections/SectionWrapper";
import DataA from "../public/repudiandae.json";
import DataB from "../public/sit-et-enim.json";
import DataC from "../public/dolore-ipsum.json";
import DataD from "../public/praesentium-aspernatur.json";
import HomeData from "../public/home.json";

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

const Main = () => {
  const items = HomeData.content.items;
  return (
    <Box w="100vw">
      <Hero />
      <SectionWrapper {...DataA} items={items} isRtl={false} />
      <SectionWrapper {...DataB} items={items} isRtl={true} />
      <SectionWrapper {...DataC} items={items} isRtl={true} />
      <SectionWrapper {...DataD} items={items} isRtl={false} />
    </Box>
  );
};

export default Main;
