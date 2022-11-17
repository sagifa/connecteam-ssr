import React from "react";
import { baseUrl } from "../../utils/config";
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
  items: {
    name: string;
    linkLabel: string;
    layout: string;
    additionalLinks?: {
      href: string;
      label: string;
      icon: string;
    }[];
  }[];
  isRtl: boolean;
};

const SectionWrapper = ({
  title,
  colorHue,
  icon,
  label,
  description,
  items,
  isRtl,
}: SectionWrapperProps) => {
  const titleFileFormat = title.toLowerCase().replaceAll(" ", "-");
  const descriptionParse = parseHtml(description);
  const urlPhoto = baseUrl + "/jpg/" + titleFileFormat + "-small.jpg";
  const buttonContents = items.find((item) => {
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
      colorHue={colorHue}
      icon={icon}
      label={label}
      title={title}
      description={descriptionParse}
      linkLabel={buttonContents?.linkLabel ? buttonContents.linkLabel : ""}
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
      linkLabel={buttonContents ? buttonContents.linkLabel : ""}
      urlPhoto={urlPhoto}
      additionalLinks={
        buttonContents?.additionalLinks
          ? buttonContents.additionalLinks
          : [{ href: "", label: "", icon: "" }]
      }
    />
  );
};

export default SectionWrapper;
