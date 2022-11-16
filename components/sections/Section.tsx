import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import heroData from "../../public/home.json";
import { Icon1 } from "../icons/Icon1";
import { Icon2 } from "../icons/Icon2";
import { Icon3 } from "../icons/Icon3";
import { Icon4 } from "../icons/Icon4";
import { Icon5 } from "../icons/Icon5";
import { Icon6 } from "../icons/Icon6";
import { Icon7 } from "../icons/Icon7";
import { baseUrl } from "../../utils/config";
import { SectionData } from "../../pages/Main";
import SectionRegular from "./SectionRegular";
import SectionFullColor from "./SectionFullColor";
import CostumeIcon from "../CostumeIcon";

const parseHtml = (value: string) => {
  let array = value.split("<p>").join("").split("</p>");
  let res = "";
  array.forEach((e) => (res += `\n\n ${e}`));
  return res;
};

export type SectionProps = SectionData & { isRtl: boolean };

const Section = ({
  title,
  colorHue,
  icon,
  label,
  description,
  heroLink,
  items,
  isRtl,
}: SectionProps) => {
  const colorTheme = `hsl(${colorHue},100%,43%,1)`;
  const colorThemeLight = `hsl(${colorHue},100%,97%,1)`;
  const colorThemeDarker = `hsl(${colorHue},100%,21%,1)`;
  const titleFileFormat = title.toLowerCase().replaceAll(" ", "-");
  const iconNameFormat = icon.replaceAll("-", "");
  const descriptionParse = parseHtml(description);
  const urlPhoto = baseUrl + "/jpg/" + titleFileFormat + "-small.jpg";

  const demoData = heroData;
  const buttonContents = heroData.content.items.find((item) => {
    if (item.name === titleFileFormat) {
      return {
        linkLabel: item.linkLabel,
        links: item.additionalLinks,
        layout: item.layout,
      };
    }
  });

  const variant = buttonContents?.layout || "regular";

  const components: any = {
    icon1: Icon1,
    icon2: Icon2,
    icon3: Icon3,
    icon4: Icon4,
    icon5: Icon5,
    icon6: Icon6,
    icon7: Icon7,
  };

  const IconSvg = components[iconNameFormat];
  console.log({ variant });

  return variant == "regular" ? (
    <SectionRegular
      isRtl={isRtl}
      colorTheme={colorTheme}
      colorThemeLight={colorThemeLight}
      IconSvg={IconSvg}
      label={label}
      title={title}
      description={descriptionParse}
      linkLabel={buttonContents?.linkLabel}
      urlPhoto={urlPhoto}
    />
  ) : (
    <SectionFullColor
      Icon={IconSvg}
      primaryColor={colorTheme}
      secondaryColor={colorThemeDarker}
      label={label}
      title={title}
      description={descriptionParse}
      linkLabel={buttonContents ? buttonContents.linkLabel : ""}
      additionalLinks={
        buttonContents?.additionalLinks
          ? buttonContents.additionalLinks
          : [{ href: "", label: "", icon: "" }]
      }
      urlPhoto={urlPhoto}
    />
  );

  // <Flex
  //   {...MainContainerStyle}
  //   {...ContainerStyle}
  //   direction={isRtl ? "row-reverse" : "row"}
  //   h="40vh"
  // >

  //   <Flex className="left-side" direction="column" w="40vw" h="20px">
  //     <Flex className="title">
  //       <Flex
  //         bgColor={colorThemeLight}
  //         borderRadius="50%"
  //         w="3rem"
  //         h="3rem"
  //         justify="center"
  //         alignItems="center"
  //         mr="1rem"
  //       >
  //         <IconSvg color={colorTheme} boxSize="2rem" />
  //       </Flex>
  //       <Box>
  //         <Text {...LabelStyle}>{label}</Text>
  //         <Text {...TitleStyle} color={colorTheme}>
  //           {title}
  //         </Text>
  //       </Box>
  //     </Flex>
  //     <Box className="content-box" mt="2rem">
  //       <Text {...DescriptionStyle}>{descriptionParse}</Text>
  //       <Flex mt="1rem">
  //         <Link color={colorTheme} href="#">
  //           {buttonContents?.linkLabel}
  //           <ArrowForwardIcon />
  //         </Link>
  //       </Flex>
  //     </Box>
  //   </Flex>
  //   <CircleImage
  //     color={colorTheme}
  //     url={urlPhoto}
  //     isRtl={isRtl}
  //     IconElement={IconSvg}
  //   />
  // </Flex>
};

export default Section;
