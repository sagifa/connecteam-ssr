import {
  Box,
  VStack,
  Flex,
  Link,
  Text,
  Input,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  TextProps,
  FormLabelProps,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { ButtonContentStyle, MainContainerStyle } from "../../styles/style";
import footerData from "../../public/footer.json";
import { ArrowRight } from "../icons/ArrowRight";
import {
  FormTitleStyle,
  InputBoxStyle,
  LabelStyle,
  TitleStyle,
} from "../sections/style";
import { MAIN_COLOR } from "../../utils/consts";
import { parseHtml } from "../sections/Section";
import { Icon1 } from "../icons/Icon1";
import { ArrowSelect } from "../icons/ArrowSelect";
const Form = () => {
  const bgColor = "hsla(0, 0%, 97%, 1)";

  return (
    <Flex {...MainContainerStyle} mt="4rem">
      <Flex
        className="left-side"
        w="25.25rem"
        gap="2rem"
        direction="column"
        mr="2.5rem"
      >
        <Text {...TitleStyle} color={MAIN_COLOR}>
          {footerData.intro.title}
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html: parseHtml(footerData.intro.text),
          }}
          style={{
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "19px",
            lineHeight: "23px",
            color: "#6A6A6A",
          }}
        />
        <Link color={MAIN_COLOR} href="#">
          <Flex alignItems="center" justifyContent="start">
            <Text {...ButtonContentStyle} color={MAIN_COLOR}>
              {footerData.intro.link.label}
            </Text>
            <ArrowRight ml="0.6rem" />
          </Flex>
        </Link>
      </Flex>
      <Box>
        <Flex
          className="right-side"
          w="43.75rem"
          justifyContent="space-between"
          direction="column"
        >
          <Text {...FormTitleStyle}>{footerData.form.title}</Text>
          <SimpleGrid
            columns={2}
            spacingX="1.1rem"
            spacingY="1.5rem"
            mt="1.1rem"
          >
            <FormControl variant="floating" id="first-name">
              <Input
                color="#6A6A6A"
                placeholder=" "
                w="21.3rem"
                h="3rem"
                border="1px solid #EAEAEA"
                borderRadius="1.5rem"
                focusBorderColor={MAIN_COLOR}
              />
              <FormLabel {...PlaceholderStyle}>Facere ipsa quod</FormLabel>
            </FormControl>
            <FormControl variant="floating" id="first-name">
              <Input
                color="#6A6A6A"
                placeholder=" "
                w="21.3rem"
                h="3rem"
                border="1px solid #EAEAEA"
                borderRadius="1.5rem"
                focusBorderColor={MAIN_COLOR}
              />
              <FormLabel {...PlaceholderStyle}>Neque sed quisquam</FormLabel>
            </FormControl>
            <FormControl variant="floating" id="first-name">
              <Input
                color="#6A6A6A"
                placeholder=" "
                w="21.3rem"
                h="3rem"
                border="1px solid #EAEAEA"
                borderRadius="1.5rem"
                focusBorderColor={MAIN_COLOR}
              />
              <FormLabel {...PlaceholderStyle}>Quod sunt enim optio</FormLabel>
            </FormControl>
            <Select
              icon={<ArrowSelect mr="1.4rem" />}
              placeholder="Eius distinctio nobis"
              w="21.3rem"
              h="3rem"
              border="1px solid #EAEAEA"
              borderRadius="1.5rem"
              focusBorderColor={MAIN_COLOR}
              fontFamily="Inter"
              fontWeight="600"
              fontSize="1rem"
              lineHeight="1.4rem"
            />
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Form;
export const PlaceholderStyle: FormLabelProps = {
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "1.4rem",
  color: "#242424",
  alignContent: "center",
  justifyContent: "center",
};
