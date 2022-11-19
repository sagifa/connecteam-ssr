import { Box, Circle, Flex, IconProps, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonContentStyle, MainContainerStyle } from "../../styles/style";
import CircleImage from "./CircleImage";
import {
  ContainerStyle,
  DescriptionStyle,
  LabelStyle,
  TitleStyle,
} from "./style";
import CustomIcon from "../CustomIcon";
import { ArrowRight } from "../icons/ArrowRight";
import { getDarkerColor, getPrimaryColor } from "../../utils/helpers";

type SectionRegularProps = {
  isRtl: boolean;
  colorHue: number;
  icon: string;
  label: string;
  title: string;
  description: string;
  urlPhoto: string;
  linkLabel: string;
};

const SectionRegular = ({
  isRtl,
  colorHue,
  icon,
  label,
  title,
  description,
  linkLabel,
  urlPhoto,
}: SectionRegularProps) => {
  const primaryColor = getPrimaryColor(colorHue); // `hsl(${colorHue},100%,43%,1)`;
  const secondaryColor = getDarkerColor(colorHue); //`hsl(${colorHue},100%,97%,1)`;

  return (
    <Flex
      id={title}
      px="18vw"
      bgColor="white"
      mt="2.3em"
      direction={isRtl ? "row-reverse" : "row"}
      h="26.25rem"
      // justifyContent="center"
    >
      <Flex
        className="left-side"
        direction="column"
        justifyContent="center"
        // w="40vw"
        w="43.5rem"
        // h="18rem"
        px="2rem"
      >
        <Flex className="title">
          <Flex
            bgColor={secondaryColor}
            borderRadius="full"
            w="3.75rem"
            h="3.75rem"
            justify="center"
            alignItems="center"
            mr="1rem"
          >
            <CustomIcon
              name={icon}
              props={{ color: primaryColor, boxSize: "2.25rem" }}
            />
          </Flex>
          <Flex justifyContent="center" direction="column">
            <Text {...LabelStyle}>{label}</Text>
            <Text {...TitleStyle} color={primaryColor}>
              {title}
            </Text>
          </Flex>
        </Flex>
        <Box className="content-box" mt="1.5rem">
          <Text {...DescriptionStyle}>{description}</Text>
          <Box mt="1.1rem">
            <Link href="#" color={primaryColor} flexDirection="row">
              <Flex alignItems="center">
                <Text {...ButtonContentStyle} color={primaryColor}>
                  {linkLabel}
                </Text>
                <ArrowRight ml="0.6rem" />
              </Flex>
            </Link>
          </Box>
        </Box>
      </Flex>
      <CircleImage color={colorHue} url={urlPhoto} isRtl={isRtl} icon={icon} />
    </Flex>
  );
};

export default SectionRegular;
