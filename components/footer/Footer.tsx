import {
  Box,
  VStack,
  Flex,
  Link,
  Text,
  Input,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { MainContainerStyle } from "../../styles/style";
import footerData from "../../public/footer.json";
import { ArrowRight } from "../icons/ArrowRight";
import {
  FormTitleStyle,
  InputBoxStyle,
  LabelStyle,
  TitleStyle,
} from "../sections/style";
import { MAIN_COLOR } from "../../utils/consts";
const Footer = () => {
  const bgColor = "hsla(0, 0%, 97%, 1)";

  const TextInput = () => {
    return <></>;
  };

  return (
    <Flex {...MainContainerStyle}>
      <VStack className="left-side" w="20vw" gap="2rem">
        <Text {...TitleStyle} color={MAIN_COLOR}>
          {footerData.intro.title}
        </Text>
        <Text>{footerData.intro.text}</Text>
        <Link color={MAIN_COLOR} href="#">
          {footerData.intro.link.label}
          <ArrowRight ml="0.5rem" />
        </Link>
      </VStack>
      <Box>
        <Flex
          className="right-side"
          w="35vw"
          justifyContent="space-between"
          direction="column"
        >
          <Text {...FormTitleStyle}>{footerData.form.title}</Text>
          <SimpleGrid columns={2} spacing={10} mt="4rem">
            <Input {...InputBoxStyle} placeholder="Basic usage" />
            <Input {...InputBoxStyle} placeholder="Basic usage" />
            <Input {...InputBoxStyle} placeholder="Basic usage" />
            <Input {...InputBoxStyle} placeholder="Basic usage" />
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
