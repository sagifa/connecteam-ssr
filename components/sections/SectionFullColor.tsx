import { Box, Circle, Flex, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MainContainerStyle } from "../../styles/style";
import CustomIcon from "../CustomIcon";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import ShowHtml from "../ShowHtml";
import {
  DescriptionSecondaryStyle,
  LabelSecondaryStyle,
  SeparateSecondaryStyle,
  TitleSecondaryStyle,
} from "./style";

type SectionProps = {
  icon: string;
  colorHue: number;
  label: string;
  title: string;
  descriptionHtml: string;
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
  descriptionHtml,
  linkLabel,
  additionalLinks,
  urlPhoto,
}: SectionProps) => {
  const primaryColor = `hsl(${colorHue},100%,43%,1)`;
  const secondaryColor = `hsl(${colorHue},100%,21%,1)`;
  //TODO!! add width to all content + flex. add const space 2rem and use it here
  return (
    <Box position="relative" overflow="hidden" h="46rem" pt="5rem">
      <Flex
        {...MainContainerStyle}
        bgColor={secondaryColor}
        h="46rem"
        align="center"
        direction="column"
        // mt="5rem"
        id={title}
      >
        <Img
          src={urlPhoto}
          alt="bg"
          position="absolute"
          rounded="full"
          right="-8rem"
          opacity="0.05"
          h="46rem"
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
        <VStack width="71.5rem" spacing="2rem">
          <div
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "19px",
              lineHeight: "22px",
              textAlign: "center",
              color: "white",
              marginTop: "2rem",
            }}
          />
          <Box {...SeparateSecondaryStyle} />
          <HStack gap="1rem">
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
        </VStack>
      </Flex>
    </Box>
  );
};

export default SectionFullColor;
