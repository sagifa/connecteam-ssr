import React from "react";
import { BASE_URL } from "../../utils/consts";
import SectionRegular from "./SectionRegular";
import SectionFullColor from "./SectionFullColor";

const parseHtml = (value: string) => {
  let res;
  res = value.replaceAll("</p>", "</p><br/>");
  if (res.slice(-5) === "<br/>") {
    res = res.slice(0, -5);
  }
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
  const descriptionWithBreakLine = parseHtml(description);
  const urlPhoto = BASE_URL + "/jpg/" + titleFileFormat + "-small.jpg";

  return layout == "regular" ? (
    <SectionRegular
      colorHue={colorHue}
      icon={icon}
      label={label}
      title={title}
      descriptionHtml={descriptionWithBreakLine}
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
      descriptionHtml={descriptionWithBreakLine}
      linkLabel={linkLabel || ""}
      urlPhoto={urlPhoto}
      additionalLinks={
        additionalLinks ? additionalLinks : [{ href: "", label: "", icon: "" }]
      }
    />
  );
};

export default Section;
