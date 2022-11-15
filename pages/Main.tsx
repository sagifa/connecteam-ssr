import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/Hero";
import SectionA from "../components/sections/SectionA";
import { HeadContainerStyle } from "../styles/style";

const Main = () => (
  <Box>
    <Hero />
    <SectionA />
  </Box>
);

export default Main;
