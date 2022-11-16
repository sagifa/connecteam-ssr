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
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import {
  DescriptionSecondaryStyle,
  LabelSecondaryStyle,
  SeparateSecondaryStyle,
  TitleSecondaryStyle,
} from "./style";

type SectionFullColorProps = {
  Icon: (props: IconProps) => JSX.Element;
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
  Icon,
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
    <Flex
      {...MainContainerStyle}
      bgColor={secondaryColor}
      h="90vh"
      align="center"
      direction="column"
    >
      <Center bgColor={primaryColor} rounded="full" boxSize="7rem" mt="4rem">
        <Icon color="white" boxSize="4.5rem" />
      </Center>
      <Text {...LabelSecondaryStyle}>{label}</Text>
      <Text {...TitleSecondaryStyle} color={primaryColor}>
        {title}
      </Text>
      <Text {...DescriptionSecondaryStyle}>{description}</Text>
      <Box {...SeparateSecondaryStyle} />

      <Box mt="2rem">
        <PrimaryButton label={linkLabel} color={primaryColor} />
        <SecondaryButton label="ddd" color="red" Icon={Icon} />
      </Box>
    </Flex>
  );
};

export default SectionFullColor;
