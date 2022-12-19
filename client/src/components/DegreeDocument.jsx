import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import IDCardDocument from "./IDCardDocument";
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
import { useNavigate } from "react-router-dom";

const URLSelectDegree = "http://127.0.0.1:8000/api/documents/degree/";
const URLIDCard = "http://127.0.0.1:8000/api/documents/document";

const DegreeDocument = () => {
  const modalB = useDisclosure();
  const modalM = useDisclosure();

  const [SelectDegree, setSelectDegree] = useState({
    type_of_degree: "",
    university_nation: "",
    year_of_enrollment: "",
    year_of_graduation: "",
    discipline: "",
  });

  const [IDCardInform, setIDCardInform] = useState({
    name: "",
    surname: "",
    date_of_birth: "",
    place_of_birth: "",
    issuing: "",
  });

  const [degree, setDegree] = useState("");

  const DisplayFieldDegree = (value, handleChange, SelectDegree) => {
    if (value !== "") {
      return (
        <Container>
          {" "}
          <Box>
            <Text as="b"> {value}'s University Country</Text>
            <Input
              placeholder="Italy"
              onChange={handleChange}
              value={SelectDegree.university_nation}
              name="university_nation"
              type="text"
            />
          </Box>
          <Box>
            <Text as="b" children="Year of enrollment" />
            <Input
              placeholder="2024"
              onChange={handleChange}
              value={SelectDegree.year_of_enrollment}
              name="year_of_enrollment"
            />
          </Box>
          <Box>
            <Text as="b" children="Year of graduation" />
            <Input
              placeholder="2024"
              onChange={handleChange}
              value={SelectDegree.year_of_graduation}
              name="year_of_graduation"
            />
          </Box>
          <Box>
            <Text as="b" children="Discipline" />
            <Input
              placeholder="Computer Science"
              onChange={handleChange}
              value={SelectDegree.discipline}
              name="discipline"
            />
          </Box>
        </Container>
      );
    } else {
      return (
        <Text px={1} as="b">
          {" "}
          Select a degree to see all the fields
        </Text>
      );
    }
  };

  const DisplayFieldIDCard = (value, handleChange, SelectDegree) => {
    return (
      <Container>
        {" "}
        <Box>
          <Text as="b"> Your Name </Text>
          <Input
            placeholder="Name"
            onChange={handleIDCardChange}
            value={IDCardInform.name}
            name="name"
            type="text"
          />
        </Box>
        <Box>
          <Text as="b" children="Surname" />
          <Input
            placeholder="surname"
            onChange={handleIDCardChange}
            value={IDCardInform.surname}
            name="surname"
            type="text"
          />
        </Box>
        <Box>
          <Text as="b" children="Date of birth" />
          <Input
            placeholder="DD/MM/YYYY"
            onChange={handleIDCardChange}
            value={IDCardInform.date_of_birth}
            name="date_of_birth"
          />
        </Box>
        <Box>
          <Text as="b" children="Place of birth" />
          <Input
            placeholder="Italy"
            onChange={handleIDCardChange}
            value={IDCardInform.place_of_birth}
            name="place_of_birth"
          />
        </Box>
        <Box>
          <Text as="b" children="Issuing" />
          <Input
            placeholder="DD/MM/YYYY"
            onChange={handleIDCardChange}
            value={IDCardInform.issuing}
            name="issuing"
          />
        </Box>
      </Container>
    );
  };

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
      axios.post(URLSelectDegree, studentFormData).then((response) => {
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

  const handleIDCardChange = (event) => {
    setIDCardInform(event.target.value);
  };

  const submitIDCardForm = () => {
    const studentFormIDCard = new FormData();
    studentFormIDCard.append("name", studentFormIDCard.name);
    studentFormIDCard.append("surname", studentFormIDCard.surname);
    studentFormIDCard.append("date_of_birth", studentFormIDCard.date_of_birth);
    studentFormIDCard.append(
      "place_of_birth",
      studentFormIDCard.place_of_birth
    );
    studentFormIDCard.append("issuing", studentFormIDCard.issuing);

    try {
      axios.post(URLIDCard, studentFormIDCard).then((response) => {
        console.log(response);
        navigate("/dashboard");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSelectDegree({
      ...SelectDegree,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  return (
    <ChakraProvider>
      <Center w="100%">
        <Box w="10%"></Box>
        <Box bg="grey" w="100%" p="100px" color="white">
          <Box p="3"></Box>
          <Center>
            <Button fontSize="2xl" colorScheme="grey" onClick={modalB.onOpen}>
              Documents
            </Button>
            <Modal
              onClose={modalB.onClose}
              isOpen={modalB.isOpen}
              isCentered
              size="full"
            >
              <ModalOverlay />
              <ModalContent>
                <Center>
                  <ModalHeader>Document</ModalHeader>
                </Center>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={10}>
                    <Box>
                      <Text px={1} as="b" children="Select Degree" />
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
                    {DisplayFieldDegree(degree, handleChange, SelectDegree)}
                  </Stack>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    onClick={async () => {
                      await modalB.onClose();
                      modalM.onOpen();
                    }}
                  >
                    {" "}
                    Apply{" "}
                  </Button>
                  <Box p="3"></Box>
                  <Button
                    onClick={async () => {
                      await submitDegreeForm();
                      modalB.onClose();
                    }}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Modal
              onClose={modalM.onClose}
              isOpen={modalM.isOpen}
              isCentered
              size="full"
            >
              <ModalOverlay />
              <ModalContent>
                <Center>
                  <ModalHeader> ID Card Information</ModalHeader>
                </Center>
                <ModalCloseButton />
                <ModalBody>
                  {DisplayFieldIDCard(degree, handleChange, SelectDegree)}
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" onClick={submitIDCardForm}>
                    {" "}
                    Apply{" "}
                  </Button>
                  <Box p="3"></Box>
                  <Button onClick={modalM.onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Center>
          <Box p="3"></Box>
        </Box>
        <Box w="10%"></Box>
      </Center>
    </ChakraProvider>
  );
};

export default DegreeDocument;
