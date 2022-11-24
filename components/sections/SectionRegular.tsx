import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import CircleImage from "./CircleImage";
import CustomIcon from "../CustomIcon";
import { getDarkerColor, getPrimaryColor } from "../../utils/helpers";
import {
  PrimaryPageStyle,
  PrimarySectionContentStyle,
  PrimaryLabelStyle,
  PrimaryTitleStyle,
  PrimaryIconStyle,
  PrimaryPageMobileStyle,
  PrimarySectionContentMobileStyle,
} from "./style";
import { APP_PADDING, DEFAULT_FONT_COLOR } from "../../utils/consts";
import CustomLink from "../CustomLink";

type SectionRegularProps = {
  isRtl: boolean;
  colorHue: number;
  icon: string;
  label: string;
  title: string;
  descriptionHtml: string;
  urlPhoto: string;
  linkLabel: string;
};

const SectionRegular = ({
  isRtl,
  colorHue,
  icon,
  label,
  title,
  descriptionHtml,
  linkLabel,
  urlPhoto,
}: SectionRegularProps) => {
  const primaryColor = getPrimaryColor(colorHue);
  const secondaryColor = getDarkerColor(colorHue);
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const sectionPageStyle = isMobile ? PrimaryPageMobileStyle : PrimaryPageStyle;
  const directionPage = isMobile ? "column" : isRtl ? "row" : "row-reverse";
  const sectionContentStyle = isMobile
    ? PrimarySectionContentMobileStyle
    : PrimarySectionContentStyle;

  return (
    <Flex id={title} direction={directionPage} {...sectionPageStyle}>
      <CircleImage color={colorHue} url={urlPhoto} isRtl={isRtl} icon={icon} />
      <Flex id="text-content" {...sectionContentStyle}>
        <Flex px={isMobile ? "1rem" : ""}>
          <Flex bgColor={secondaryColor} {...PrimaryIconStyle}>
            <CustomIcon
              name={icon}
              props={{ color: primaryColor, boxSize: "2.25rem" }}
            />
          </Flex>
          <Flex justifyContent="center" direction="column" gap=".25rem">
            <Text {...PrimaryLabelStyle}>{label}</Text>
            <Text {...PrimaryTitleStyle} color={primaryColor}>
              {title}
            </Text>
          </Flex>
        </Flex>
        <Box mt={isMobile ? "" : "1.5rem"} px="1rem">
          <div
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "19px",
              lineHeight: "23px",
              color: DEFAULT_FONT_COLOR,
            }}
          />
          <Box mt="1.1rem">
            <CustomLink content={linkLabel} color={primaryColor} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SectionRegular;
