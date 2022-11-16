import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import Section from "../components/sections/Section";
import DataA from "../public/repudiandae.json";
import DataB from "../public/sit-et-enim.json";
import DataC from "../public/dolore-ipsum.json";
import DataD from "../public/praesentium-aspernatur.json";

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
  };
  items: { title: string; text: string }[];
};

const Main = () => {
  return (
    <Box>
      <Hero />
      <Section {...DataA} isRtl={false} />
      <Section {...DataB} isRtl={true} />
      <Section {...DataD} isRtl={false} />
    </Box>
  );
};

export default Main;
