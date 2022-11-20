import { Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { ButtonContentStyle } from "./buttons/style";
import { ArrowRight } from "./icons/ArrowRight";

export const CustomLink = ({
  content,
  color,
}: {
  content: string;
  color: string;
}) => (
  <Link href="#" color={color} flexDirection="row">
    <Flex alignItems="center">
      <Text {...ButtonContentStyle} color={color}>
        {content}
      </Text>
      <ArrowRight ml="0.6rem" />
    </Flex>
  </Link>
);

export default CustomLink;
