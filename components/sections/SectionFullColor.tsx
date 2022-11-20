import { Box, Circle, Flex, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { getPrimaryColor, getSecondaryColor } from "../../utils/helpers";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import CustomIcon from "../CustomIcon";
import {
  LabelSecondaryStyle,
  SecondaryIconBg,
  SecondaryImgStyle,
  SecondaryPageStyle,
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
  linkLabel: string;
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
  const primaryColor = getPrimaryColor(colorHue);
  const secondaryColor = getSecondaryColor(colorHue);
  return (
    <Flex id={title} {...SecondaryPageStyle} bgColor={secondaryColor}>
      <Img src={urlPhoto} {...SecondaryImgStyle} />
      <Circle bgColor={primaryColor} {...SecondaryIconBg}>
        <CustomIcon name={icon} props={{ color: "white", boxSize: "4.5rem" }} />
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
              key={btn.label}
              label={btn.label}
              icon={btn.icon}
              color={primaryColor}
              width="15rem"
            />
          ))}
        </HStack>
      </VStack>
    </Flex>
  );
};

export default SectionFullColor;
