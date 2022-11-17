import {
  Box,
  Button,
  Center,
  Flex,
  IconProps,
  Img,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MainContainerStyle } from "../../styles/style";
import CostumeIcon from "../CostumeIcon";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import {
  DescriptionSecondaryStyle,
  LabelSecondaryStyle,
  SeparateSecondaryStyle,
  TitleSecondaryStyle,
} from "./style";
import { Icon6 } from "../icons/Icon6";

type SectionFullColorProps = {
  icon: string;
  primaryColor: string;
  secondaryColor: string;
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
  primaryColor,
  secondaryColor,
  label,
  title,
  description,
  linkLabel,
  additionalLinks,
  urlPhoto,
}: SectionFullColorProps) => {
  console.log(additionalLinks);

  return (
    <Box position="relative">
      <Img
        src={urlPhoto}
        alt="bg"
        position="absolute"
        rounded="full"
        right="-15vw"
        top="-10vh"
        boxSize="120vh"
        overflow="hidden"
        // opacity="0.1"
        // backgroundPosition="center"
      />
      <Flex
        {...MainContainerStyle}
        bgColor={secondaryColor}
        h="90vh"
        align="center"
        direction="column"
        mt="5rem"
      >
        <Center bgColor={primaryColor} rounded="full" boxSize="7rem" mt="4rem">
          <CostumeIcon
            name={icon}
            props={{ color: "white", boxSize: "4.5rem" }}
          />
        </Center>
        <Text {...LabelSecondaryStyle}>{label}</Text>
        <Text {...TitleSecondaryStyle} color={primaryColor}>
          {title}
        </Text>
        <Text {...DescriptionSecondaryStyle}>{description}</Text>
        <Box {...SeparateSecondaryStyle} />

        <Box mt="2rem">
          <PrimaryButton label={linkLabel} color={primaryColor} />
          {additionalLinks.map((btn) => (
            <SecondaryButton
              label={btn.label}
              icon={btn.icon}
              color={primaryColor}
              key={btn.label}
            />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default SectionFullColor;
