import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  HStack,
  IconProps,
  Img,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MainContainerStyle } from "../../styles/style";
import CustomIcon from "../CustomIcon";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import {
  DescriptionSecondaryStyle,
  LabelSecondaryStyle,
  SeparateSecondaryStyle,
  TitleSecondaryStyle,
} from "./style";
import { Icon6 } from "../icons/Icon6";

type SectionProps = {
  icon: string;
  colorHue: number;
  label: string;
  title: string;
  description: string;
  urlPhoto: string;
  linkLabel: string; //TODO!! Must
  additionalLinks: {
    href: string;
    label: string;
    icon: string;
  }[];
};

const SectionFullColor = ({
  icon,
  colorHue,
  label,
  title,
  description,
  linkLabel,
  additionalLinks,
  urlPhoto,
}: SectionProps) => {
  const primaryColor = `hsl(${colorHue},100%,43%,1)`;
  const secondaryColor = `hsl(${colorHue},100%,21%,1)`;

  return (
    <Box position="relative" overflow="hidden">
      <Flex
        {...MainContainerStyle}
        bgColor={secondaryColor}
        h="42rem"
        align="center"
        direction="column"
        mt="5rem"
        id={title}
      >
        <Img
          src={urlPhoto}
          alt="bg"
          position="absolute"
          rounded="full"
          right="-10%"
          opacity="0.05"
          h="100vh"
          sx={{
            filter: "grayscale(90%)",
          }}
        />
        <Circle bgColor={primaryColor} rounded="full" size="7.5rem" mt="4rem">
          <CustomIcon
            name={icon}
            props={{ color: "white", boxSize: "4.5rem" }}
          />
        </Circle>
        <Text {...LabelSecondaryStyle}>{label}</Text>
        <Text {...TitleSecondaryStyle} color={primaryColor}>
          {title}
        </Text>
        <Text {...DescriptionSecondaryStyle}>{description}</Text>
        <Box {...SeparateSecondaryStyle} />

        <HStack mt="2rem" gap="1rem">
          <PrimaryButton label={linkLabel} colorHue={colorHue} />
          {additionalLinks.map((btn) => (
            <SecondaryButton
              label={btn.label}
              icon={btn.icon}
              color={primaryColor}
              key={btn.label}
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default SectionFullColor;
