import { Box, Flex, Text } from "@chakra-ui/react";
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
} from "./style";
import { DEFAULT_FONT_COLOR } from "../../utils/consts";
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

  return (
    <Flex
      id={title}
      direction={isRtl ? "row-reverse" : "row"}
      {...PrimaryPageStyle}
    >
      <Flex {...PrimarySectionContentStyle}>
        <Flex>
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
        <Box mt="1.5rem">
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
      <CircleImage color={colorHue} url={urlPhoto} isRtl={isRtl} icon={icon} />
    </Flex>
  );
};

export default SectionRegular;
