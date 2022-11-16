import { IconProps } from "@chakra-ui/react";
import React from "react";
import { Icon1 } from "./icons/Icon1";
import { Icon2 } from "./icons/Icon2";
import { Icon3 } from "./icons/Icon3";
import { Icon4 } from "./icons/Icon4";
import { Icon5 } from "./icons/Icon5";
import { Icon6 } from "./icons/Icon6";
import { Icon7 } from "./icons/Icon7";

type CostumeIconProps = {
  iconName: string;
};

const components: any = {
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
  icon4: Icon4,
  icon5: Icon5,
  icon6: Icon6,
  icon7: Icon7,
};

const CostumeIcon = ({ iconName }: CostumeIconProps) => {
  const iconNameFormat = iconName.replaceAll("-", "");
  const IconSvg = components[iconNameFormat];

  return IconSvg;
};

export default CostumeIcon;
