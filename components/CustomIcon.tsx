import React from "react";
import { IconProps } from "@chakra-ui/react";
import { Icon1 } from "./icons/Icon1";
import { Icon2 } from "./icons/Icon2";
import { Icon3 } from "./icons/Icon3";
import { Icon4 } from "./icons/Icon4";
import { Icon5 } from "./icons/Icon5";
import { Icon6 } from "./icons/Icon6";
import { Icon7 } from "./icons/Icon7";

type CustomIconProps = {
  props?: IconProps;
  name: string;
};

const components: any = {
  ["icon-1"]: Icon1,
  ["icon-2"]: Icon2,
  ["icon-3"]: Icon3,
  ["icon-4"]: Icon4,
  ["icon-5"]: Icon5,
  ["icon-6"]: Icon6,
  ["icon-7"]: Icon7,
};

const CustomIcon = ({ name, props }: CustomIconProps) => {
  // const iconName = "icon-1";
  const IconSvg: (props: IconProps) => JSX.Element = components[name];
  return <IconSvg {...props} />;
};

export default CustomIcon;
