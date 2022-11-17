import { Box, Flex, IconProps, Link, Text } from "@chakra-ui/react";
import React from "react";
import { MainContainerStyle } from "../../styles/style";
import CircleImage from "./CircleImage";
import {
  ContainerStyle,
  DescriptionStyle,
  LabelStyle,
  TitleStyle,
} from "./style";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CostumeIcon from "../CostumeIcon";

type SectionRegularProps = {
  isRtl: boolean;
  colorTheme: string;
  colorThemeLight: string;
  icon: string;
  label: string;
  title: string;
  description: string;
  urlPhoto: string;
  linkLabel?: string; //TODO!! Must
};

const SectionRegular = ({
  isRtl,
  colorTheme,
  colorThemeLight,
  icon,
  label,
  title,
  description,
  linkLabel,
  urlPhoto,
}: SectionRegularProps) => {
  return (
    <Flex
      {...MainContainerStyle}
      {...ContainerStyle}
      direction={isRtl ? "row-reverse" : "row"}
      h="40vh"
    >
      <Flex className="left-side" direction="column" w="40vw" h="20px">
        <Flex className="title">
          <Flex
            bgColor={colorThemeLight}
            borderRadius="50%"
            w="3rem"
            h="3rem"
            justify="center"
            alignItems="center"
            mr="1rem"
          >
            <CostumeIcon
              name={icon}
              props={{ color: colorTheme, boxSize: "2rem" }}
            />
          </Flex>
          <Box>
            <Text {...LabelStyle}>{label}</Text>
            <Text {...TitleStyle} color={colorTheme}>
              {title}
            </Text>
          </Box>
        </Flex>
        <Box className="content-box" mt="2rem">
          <Text {...DescriptionStyle}>{description}</Text>
          <Flex mt="1rem">
            <Link color={colorTheme} href="#">
              {linkLabel}
              <ArrowForwardIcon />
            </Link>
          </Flex>
        </Box>
      </Flex>
      <CircleImage
        color={colorTheme}
        url={urlPhoto}
        isRtl={isRtl}
        icon={icon}
      />
    </Flex>
  );
};

export default SectionRegular;
