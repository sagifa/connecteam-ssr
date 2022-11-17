import React from "react";
import { IconProps } from "@chakra-ui/react";
import { Icon1 } from "../components/icons/Icon1";
import { Icon2 } from "../components/icons/Icon2";
import { Icon3 } from "../components/icons/Icon3";
import { Icon4 } from "../components/icons/Icon4";
import { Icon5 } from "../components/icons/Icon5";
import { Icon6 } from "../components/icons/Icon6";
import { Icon7 } from "../components/icons/Icon7";

type CostumeIconProps = {
  props: IconProps;
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

const CostumeIcon = ({ name, props }: CostumeIconProps) => {
  // const iconName = "icon-1";
  const IconSvg: (props: IconProps) => JSX.Element = components[name];
  return <IconSvg {...props} />;
};

export default CostumeIcon;
