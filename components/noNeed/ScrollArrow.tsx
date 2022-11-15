import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react";
const Scroll: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Scroll",
  viewBox: "0 0 20 8",
  d: "M19 1l-9 6-9-6",
});

const ScrollArrow = () => {
  let totalArrows: ComponentWithAs<"svg", IconProps>[] = [];
  for (let i = 1; i < 3; i++) {
    totalArrows.push(Scroll);
    return totalArrows;
  }
};

export default ScrollArrow;
