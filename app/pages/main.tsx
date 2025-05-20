"use client";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import Footer from "../components/common/footer";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import heroImage1 from "../assets/desktop-image-hero-1.jpg";
import heroImage2 from "../assets/desktop-image-hero-2.jpg";
import heroImage3 from "../assets/desktop-image-hero-3.jpg";
import rightArrowIcon from "../assets/icon-arrow.svg";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Header from "../components/common/header";
import { useMemo, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
const Main = () => {
  const slides = useMemo(
    () => [
      {
        id: 0,
        heroImage: heroImage1,
        message: "Discover innovative ways to decorate",
        description: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
      },
      {
        id: 1,
        heroImage: heroImage2,
        message: "We are available all across the globe",
        description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
      },
      {
        id: 2,
        heroImage: heroImage3,
        message: "Manufactured with the best materials",
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
      },
    ],
    []
  );

  const [activeCarouselSlide, setActiveCarouselSlide] = useState(0);
  const onCarouselPrevious = () => {
    setActiveCarouselSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const onCarouselNext = () => {
    setActiveCarouselSlide((prev) => (prev < 2 ? prev + 1 : prev));
  };

  const activeSlideDetails = useMemo(
    () => slides.find((x) => Number(x.id) === activeCarouselSlide),
    [slides, activeCarouselSlide]
  );

  const isSmallScreen = useMediaQuery("(max-width:640px)");
  const CarouselControls = () => (
    <Group
      className="black-bg min-h-[2.5rem]"
      w={"5rem"}
      justify="space-between"
    >
      <ActionIcon
        variant="transparent"
        className="grey-500-txt !h-full grey-800-bg-on-hover"
        onClick={onCarouselPrevious}
      >
        <IconChevronLeft />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        className="grey-500-txt !h-full grey-800-bg-on-hover"
        onClick={onCarouselNext}
      >
        <IconChevronRight />
      </ActionIcon>
    </Group>
  );

  return (
    <Container fluid className="!w-full !p-0 !min-h-screen">
      <Flex
        className={`!w-full !p-0 ${
          isSmallScreen ? "!min-h-[50vh]" : "!h-[70vh]"
        } `}
        justify={"space-between"}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          className={`w-full md:!w-[60%] ${
            isSmallScreen ? `!h-[50vh]` : `!h-[70vh]`
          } `}
        >
          <Carousel
            className={`${isSmallScreen ? "!h-[50vh]" : "!h-[70vh]"}  !w-full`}
            withControls={false}
            withIndicators={false}
            initialSlide={activeCarouselSlide}
            onSlideChange={setActiveCarouselSlide}
            slideSize={"100%"}
          >
            {slides.map((_, i) => (
              <CarouselSlide
                key={i}
                className={`${isSmallScreen ? "!h-[50vh]" : "!h-[70vh]"} `}
              >
                <Box
                  className={`${
                    isSmallScreen ? `heroBox${i + 1}-sm` : `heroBox${i + 1}`
                  } !h-full !w-full`}
                >
                  {isSmallScreen ? (
                    <Flex
                      justify={"space-between"}
                      direction={"column"}
                      className="!h-full"
                    >
                      <Header />
                      <Box className="ms-auto w-auto">{CarouselControls()}</Box>
                    </Flex>
                  ) : (
                    <Header />
                  )}
                </Box>
              </CarouselSlide>
            ))}
          </Carousel>
        </Box>
        <Box className="!h-auto md:!h-full w-full md:!w-[40%] flex flex-col justify-between">
          <Center className="!w-full flex flex-grow justify-center items-center">
            <Stack align="start" className="w-[90%] md:w-[60%] p-5 md:p-0">
              <Stack key={activeSlideDetails?.message} className="w-full">
                <Text fw={"bold"} className="!text-3xl">
                  {activeSlideDetails?.message}
                </Text>
                <Text>{activeSlideDetails?.description}</Text>
              </Stack>
              <Button
                className="tracking-[0.5rem] black-txt gray-text-on-hover"
                variant="transparent"
                rightSection={<Image src={rightArrowIcon} alt="Right Arrow" />}
                p={0}
              >
                SHOP NOW
              </Button>
            </Stack>
          </Center>
          {!isSmallScreen && CarouselControls()}
        </Box>
      </Flex>
      <Box className="h-auto md:h-[30vh] !w-full">
        <Footer />
      </Box>
    </Container>
  );
};

export default Main;
