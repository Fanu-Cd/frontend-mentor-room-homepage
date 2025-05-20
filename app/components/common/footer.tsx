import { Box, Center, Flex, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import aboutImage1 from "../../assets/image-about-dark.jpg";
import aboutImage2 from "../../assets/image-about-light.jpg";

const Footer = () => {
  return (
    <Flex className="!h-full !w-full" direction={{ base: "column", md: "row" }}>
      <Box className="w-full md:!w-[30%] md:!h-full">
        <Image
          src={aboutImage1}
          alt="About Image 1"
          objectFit="cover"
          className="h-full w-full"
        />
      </Box>
      <Box className="w-full md:!w-[calc(30%+5rem)] p-10">
        <Center className="w-full h-full">
          <Stack gap={3}>
            <Text fw={"bold"} className="tracking-[0.4rem]">
              ABOUT OUR FURNITURE
            </Text>
            <Text className="grey-500-txt" size="xs">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </Text>
          </Stack>
        </Center>
      </Box>
      <Box className="w-full md:!h-full md:!w-[calc(100%-5rem-30%-30%)]">
        <Image
          src={aboutImage2}
          alt="About Image 2"
          objectFit="cover"
          className="h-full w-full"
        />
      </Box>
    </Flex>
  );
};

export default Footer;
