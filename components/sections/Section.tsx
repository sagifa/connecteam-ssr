import React from "react";
import { BASE_URL } from "../../utils/consts";
import SectionRegular from "./SectionRegular";
import SectionFullColor from "./SectionFullColor";

const parseHtml = (value: string) => {
  let array = value.split("<p>").join("").split("</p>");
  let res = "";
  array.forEach((e) => (res += `\n\n ${e}`));
  return res;
};

type SectionWrapperProps = {
  title: string;
  colorHue: number;
  icon: string;
  label: string;
  description: string;
  linkLabel: string;
  layout: string;
  additionalLinks?: {
    href: string;
    label: string;
    icon: string;
  }[];
  isRtl: boolean;
};

const Section = ({
  title,
  colorHue,
  icon,
  label,
  description,
  linkLabel,
  layout,
  additionalLinks,
  isRtl,
}: SectionWrapperProps) => {
  const titleFileFormat = title.toLowerCase().replaceAll(" ", "-");
  const descriptionParse = parseHtml(description);
  const urlPhoto = BASE_URL + "/jpg/" + titleFileFormat + "-small.jpg";
  // const buttonContents = items.find((item) => {
  //   if (item.name === titleFileFormat) {
  //     return {
  //       linkLabel: item.linkLabel,
  //       links: item.additionalLinks,
  //       layout: item.layout,
  //     };
  //   }
  // });
  return layout == "regular" ? (
    <SectionRegular
      colorHue={colorHue}
      icon={icon}
      label={label}
      title={title}
      description={descriptionParse}
      linkLabel={linkLabel || ""}
      urlPhoto={urlPhoto}
      isRtl={isRtl}
    />
  ) : (
    <SectionFullColor
      icon={icon}
      colorHue={colorHue}
      label={label}
      title={title}
      description={descriptionParse}
      linkLabel={linkLabel || ""}
      urlPhoto={urlPhoto}
      additionalLinks={
        additionalLinks ? additionalLinks : [{ href: "", label: "", icon: "" }]
      }
    />
  );
};

export default Section;
