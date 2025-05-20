"use client";
import { ActionIcon, Box, Button, Drawer, Flex, Text } from "@mantine/core";
import logoImage from "../../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import humbergurIcon from "../../assets/icon-hamburger.svg";
import closeIcon from "../../assets/icon-close.svg";
const Header = () => {
  const navLinks = [
    { title: "home", href: "/home" },
    { title: "shop", href: "/shop" },
    { title: "about", href: "/about" },
    { title: "contact", href: "/contact" },
  ];
  const isSmallScreen = useMediaQuery("(max-width:640px)");
  const [isDrawerOpened, { open, close }] = useDisclosure();
  
  return (
    <Box>
      {isSmallScreen ? (
        <Flex
          className="pt-10 w-[90%] mx-auto"
          align={"center"}
          justify={"space-between"}
        >
          <Box>
            <Button variant="transparent" onClick={open}>
              <Image src={humbergurIcon} alt="Burger icon" />
            </Button>
          </Box>
          <Box>
            <Link href={"/"}>
              <Image src={logoImage} alt="Logo" />
            </Link>
          </Box>
          <Box></Box>
        </Flex>
      ) : (
        <Flex className="w-[90%] mx-auto pt-10" gap={25} align={"center"}>
          <Link href={"/"}>
            <Image src={logoImage} alt="Logo" />
          </Link>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.title}>
              <Text
                className="white-txt link-underline-after-on-hover"
                fw={"bold"}
              >
                {link.title}
              </Text>
            </Link>
          ))}
        </Flex>
      )}
      <Drawer
        opened={isDrawerOpened}
        onClose={close}
        styles={{ content: { height: "5rem" } }}
        withCloseButton={false}
      >
        <Flex justify={"space-between"} align={"center"} mih={50}>
          <Box>
            <ActionIcon variant="transparent" onClick={close}>
              <Image src={closeIcon} alt="Close icon" />
            </ActionIcon>
          </Box>
          <Flex gap={15}>
            {navLinks.map((link) => (
              <Link href={link.href} key={link.title}>
                <Text className="black-txt" fw={"bold"}>
                  {link.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Drawer>
    </Box>
  );
};

export default Header;
