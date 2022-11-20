import {
  Box,
  Flex,
  Text,
  Input,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormLabelProps,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { MainContainerStyle } from "../../styles/style";
import { MAIN_COLOR } from "../../utils/consts";
import { parseHtml } from "../sections/Section";
import { ArrowSelect } from "../icons/ArrowSelect";
import RadioInput from "../RadioInput";
import { TitleStyle } from "../hero/style";
import { FormTitleStyle } from "./style";
import CustomLink from "../CustomLink";
const Form = (footerData: any) => {
  return (
    <Flex {...MainContainerStyle} mt="8rem" h="41.5rem">
      <Flex
        className="left-side"
        w="25.25rem"
        gap="2rem"
        direction="column"
        mr="2.5rem"
      >
        <Text {...TitleStyle} color={MAIN_COLOR}>
          {footerData.data.intro.title}
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html: parseHtml(footerData.data.intro.text),
          }}
          style={{
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "19px",
            lineHeight: "23px",
            color: "#6A6A6A",
          }}
        />

        <CustomLink
          content={footerData.data.intro.link.label}
          color={MAIN_COLOR}
        />
      </Flex>
      <Box>
        <Flex
          className="right-side"
          w="43.75rem"
          justifyContent="space-between"
          direction="column"
        >
          <Text {...FormTitleStyle}>{footerData.data.form.title}</Text>
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
          <RadioInput />
          <RadioInput />
          <RadioInput />
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
