import { Flex } from "@chakra-ui/react";
import * as React from "react";

const SvgComponent = () => (
  <Flex direction="column" gap="-30px">
    <svg width={20} height={8} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m19 1-9 6-9-6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <svg width={20} height={8} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m19 1-9 6-9-6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <svg width={20} height={8} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m19 1-9 6-9-6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Flex>
);

export default SvgComponent;
