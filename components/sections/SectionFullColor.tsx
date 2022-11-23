import {
  Box,
  Circle,
  Flex,
  HStack,
  Img,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { getPrimaryColor, getSecondaryColor } from "../../utils/helpers";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import CustomIcon from "../CustomIcon";
import {
  LabelSecondaryStyle,
  SecondaryIconBg,
  SecondaryIconMobileBg,
  SecondaryImgMobileStyle,
  SecondaryImgStyle,
  SecondaryPageMobileStyle,
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
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
  });

  const pageStyle = isMobile ? SecondaryPageMobileStyle : SecondaryPageStyle;
  const imgStyle = isMobile ? SecondaryImgMobileStyle : SecondaryImgStyle;
  const iconBgStyle = isMobile ? SecondaryIconMobileBg : SecondaryIconBg;
  const iconSize = isMobile ? "3rem" : "4rem";
  return (
    <Flex id={title} {...pageStyle} bgColor={secondaryColor}>
      <Img src={urlPhoto} {...imgStyle} />
      <Box px={isMobile ? "1rem" : ""}>
        <Flex
          direction="column"
          alignItems={isMobile ? "flex-start" : "center"}
        >
          <Circle bgColor={primaryColor} {...iconBgStyle}>
            <CustomIcon
              name={icon}
              props={{ color: "white", boxSize: iconSize }}
            />
          </Circle>
          <Text {...LabelSecondaryStyle}>{label}</Text>
          <Text {...TitleSecondaryStyle} color={primaryColor}>
            {title}
          </Text>
        </Flex>
        <VStack spacing="2rem" px={isMobile ? "" : "20%"}>
          {" "}
          <div
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "19px",
              lineHeight: "22px",
              textAlign: isMobile ? "start" : "center",
              color: "white",
              marginTop: "2rem",
            }}
          />
          <Box {...SeparateSecondaryStyle} w={isMobile ? "22rem" : "71.5rem"} />
          <Stack direction={isMobile ? "column" : "row"} gap="1rem">
            <PrimaryButton
              label={linkLabel}
              colorHue={colorHue}
              height="3.43rem"
              width={isMobile ? "22rem" : "21.18rem"}
            />
            {additionalLinks.map((btn) => (
              <SecondaryButton
                key={btn.label}
                label={btn.label}
                icon={btn.icon}
                props={{
                  color: primaryColor,
                  width: isMobile ? "22rem" : "15rem",
                }}
              />
            ))}
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SectionFullColor;
