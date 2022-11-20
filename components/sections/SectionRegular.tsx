import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import CircleImage from "./CircleImage";
import CustomIcon from "../CustomIcon";
import { ArrowRight } from "../icons/ArrowRight";
import { getDarkerColor, getPrimaryColor } from "../../utils/helpers";
import { ButtonContentStyle } from "../buttons/style";
import { TitleStyle } from "../hero/style";
import {
  PrimaryPageStyle,
  PrimaryLeftSide,
  PrimaryLabelStyle,
  PrimaryTitleStyle,
  PrimaryIconStyle,
} from "./style";
import { InterNormalStyle } from "../../styles/style";
import { DEFAULT_FONT_COLOR } from "../../utils/consts";

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

export const CustomLinkTo = ({
  content,
  color,
}: {
  content: string;
  color: string;
}) => (
  <Link href="#" color={color} flexDirection="row">
    <Flex alignItems="center">
      <Text {...ButtonContentStyle} color={color}>
        {content}
      </Text>
      <ArrowRight ml="0.6rem" />
    </Flex>
  </Link>
);

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
      <Flex {...PrimaryLeftSide}>
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
            <CustomLinkTo content={linkLabel} color={primaryColor} />
          </Box>
        </Box>
      </Flex>
      <CircleImage color={colorHue} url={urlPhoto} isRtl={isRtl} icon={icon} />
    </Flex>
  );
};

export default SectionRegular;
