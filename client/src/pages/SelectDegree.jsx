import NavigationBar from "../components/navigationBar";
import DegreeDocument from "../components/DegreeDocument";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-notifications/lib/notifications.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Text, Box, Center, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SelectDegree = () => {
  const navigate = useNavigate();
  return (
    <ChakraProvider>
      <Flex flexDirection="column" backgroundColor="#393E46">
        <NavigationBar />
        <Box w="100%" p="80px"></Box>
        <Center w="30%">
          <Text color="white" fontSize="3xl">
            {" "}
            Choose one of these degrees :{" "}
          </Text>
        </Center>
        <Box w="100%" p="5"></Box>
        <DegreeDocument></DegreeDocument>
        <Box w="100%" p="80px"></Box>
        <Center>
          <Button colorScheme="red" onClick={() => navigate("/")}>
            Back
          </Button>
        </Center>
        <Box w="100%" p="100px"></Box>
      </Flex>
    </ChakraProvider>
  );
};

export default SelectDegree;
