import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = ["Documents"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const MenuHome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Menu</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}></Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box pb={4} />
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Text color="black" fontSize="2xl" px="10" fontWeight="semibold">
            List of selected tests
          </Text>
        </Box>
        <Box>
          <Text color="black" fontSize="2xl" px="10" fontWeight="semibold">
            Select tests
          </Text>
          <Box pb={4} />
          <Select placeholder="select courses">
            <option value="1"> Mathematic</option>
            <option value="2"> Computer Science</option>
            <option value="3"> Biology</option>
          </Select>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default MenuHome;
