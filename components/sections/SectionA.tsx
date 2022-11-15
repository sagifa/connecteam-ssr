import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import sectionData from "../../public/section-A-data.json";
import homeData from "../../public/homeData.json";
import { HeadContainerStyle } from "../../styles/style";
import { Icon_3 } from "../icons/Icon_3";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// type ButtonDataType = {
//   name: string;
//   linkLabel: string;
//   layout: string;
//   additionalLinks: { href: string; label: string; icon: string };
// };
const SectionA = () => {
  const colorFont = `hsl(${sectionData.colorHue},100%,43%,1)`;
  const buttonData = homeData.content.items.filter(
    (item) => item.name == sectionData.title.toLowerCase()
  );

  return (
    <Box {...HeadContainerStyle} className="title" bgColor="white">
      <Flex>
        <Icon_3 color={colorFont} boxSize="2rem" />
        <Box>
          <Text>{sectionData.label}</Text>
          <Text>{sectionData.title}</Text>
        </Box>
      </Flex>
      <Box className="content-box">
        <Text>{sectionData.description}</Text>
        <Flex>
          <Link color={colorFont} href="#">
            {buttonData[0].linkLabel}
            <ArrowForwardIcon />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default SectionA;
