import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Box,
  Center,
  Input,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Stack,
  Select,
  Container,
} from "@chakra-ui/react";
import axios from "axios";

const URLIDCard = "http://127.0.0.1:8000/api/documents/document";

const DisplayIDDocumentField = (value, handleChange, SelectDegree) => {
  return (
    <Container>
      {" "}
      <Box>
        <Text> {value}'s University Country</Text>
        <Input
          placeholder="Italy"
          onChange={handleChange}
          value={SelectDegree.university_nation}
          name="university_nation"
          type="text"
        />
      </Box>
      <Box>
        <Text children="Year of enrollment" />
        <Input
          placeholder="2024"
          onChange={handleChange}
          value={SelectDegree.year_of_enrollment}
          name="year_of_enrollment"
        />
      </Box>
      <Box>
        <Text children="Year of graduation" />
        <Input
          placeholder="2024"
          onChange={handleChange}
          value={SelectDegree.year_of_graduation}
          name="year_of_graduation"
        />
      </Box>
      <Box>
        <Text children="Discipline" />
        <Input
          placeholder="Computer Science"
          onChange={handleChange}
          value={SelectDegree.discipline}
          name="discipline"
        />
      </Box>
    </Container>
  );
};

const IDCardDocument = () => {
  const modalD = useDisclosure();

  const [SelectDegree, setSelectDegree] = useState({
    type_of_degree: "",
    university_nation: "",
    year_of_enrollment: "",
    year_of_graduation: "",
    discipline: "",
  });

  const [degree, setDegree] = useState("");

  const submitDegreeForm = () => {
    SelectDegree.type_of_degree = degree;
    const studentFormData = new FormData();
    studentFormData.append("type_of_degree", SelectDegree.type_of_degree);
    studentFormData.append("university_nation", SelectDegree.university_nation);
    studentFormData.append(
      "year_of_enrollment",
      SelectDegree.year_of_enrollment
    );
    studentFormData.append(
      "year_of_graduation",
      SelectDegree.year_of_graduation
    );
    studentFormData.append("discipline", SelectDegree.discipline);

    try {
      axios.post(URLIDCard, studentFormData).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
      setSelectDegree({ status: false });
    }
  };
  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
  };

  async function postSendDegree() {
    const studentFormData = new FormData();
    studentFormData.append("type_of_degree", SelectDegree.type_of_degree);
    studentFormData.append("university_nation", SelectDegree.university_nation);
    studentFormData.append(
      "year_of_enrollment",
      SelectDegree.year_of_enrollment
    );
    studentFormData.append(
      "year_of_graduation",
      SelectDegree.year_of_graduation
    );
    studentFormData.append("discipline", SelectDegree.discipline);

    const rawResponse = await fetch(URLIDCard, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentFormData),
    });
    const content = await rawResponse.json();

    console.log(content);
  }

  const handleChange = (event) => {
    setSelectDegree({
      ...SelectDegree,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <ChakraProvider>
      <Modal
        onClose={modalD.onClose}
        isOpen={modalD.isOpen}
        isCentered
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader> ID Card Documents</ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={10}>
              <Box>
                <Text children="Select Degree" />
                <Select
                  placeholder="select degree"
                  onChange={handleDegreeChange}
                  value={degree}
                  id="select_degree"
                >
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="Doctorate">Doctorate</option>
                </Select>
              </Box>
              {DisplayIDDocumentField(degree, handleChange, SelectDegree)}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={submitDegreeForm}>
              {" "}
              Apply{" "}
            </Button>
            <Box p="3"></Box>
            <Button onClick={modalD.onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default IDCardDocument;
