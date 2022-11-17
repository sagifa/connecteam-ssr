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

  return variant == "regular" ? (
    <SectionRegular
      isRtl={isRtl}
      colorTheme={colorTheme}
      colorThemeLight={colorThemeLight}
      icon={icon}
      label={label}
      title={title}
      description={descriptionParse}
      linkLabel={buttonContents?.linkLabel}
      urlPhoto={urlPhoto}
    />
  ) : (
    <SectionFullColor
      icon={icon}
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
};

export default Section;
