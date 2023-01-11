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
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URLSelectDegree = "http://127.0.0.1:8000/api/documents/degree/";
const URLIDCard = "http://127.0.0.1:8000/api/documents/document";

const DegreeDocument = () => {
  const SelectDegreeModal = useDisclosure();
  const DocumentIDModal = useDisclosure();
  const DocumentSelectDepartment = useDisclosure();
  const navigate = useNavigate();

  /* START SELECT DEGREE MODAL (variables, fuctions)*/

  const [degree, setDegree] = useState(""); // Creation of tow useState() to save the selection degree variables
  const [SelectDegree, setSelectDegree] = useState({
    type_of_degree: "",
    university_nation: "",
    year_of_enrollment: "",
    year_of_graduation: "",
    discipline: "",
  });

  const submitDegreeForm = () => {
    // submitDegreeForm is here to send (post) the information tha tthe user put in the text field to the backend and the database
    SelectDegree.type_of_degree = degree;
    const studentFormData = new FormData(); // Creation of a DataForm
    studentFormData.append("type_of_degree", SelectDegree.type_of_degree); // Add information inside
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
        // Send information with the url (URLSelectDegree : "http://127.0.0.1:8000/api/documents/degree/" and the studentFormData)
        console.log(response);
      });
    } catch (error) {
      console.log(error);
      setSelectDegree({ status: false });
    }
  };

  const handleDegreeChange = (event) => {
    // HandleDegreeChange is here to modify the variables informations with the informations that the user put
    setDegree(event.target.value);
  };

  const DisplayFieldDegree = (value) => {
    // DisplayFieldDegree is here to display the different field
    if (value !== "") {
      return (
        <Container>
          {" "}
          <Box>
            <Text as="b"> {value}'s University Country</Text>
            <Input
              placeholder="Italy"
              onChange={handleDegreeChange}
              value={SelectDegree.university_nation}
              name="university_nation"
              type="text"
            />
          </Box>
          <Box>
            <Text as="b" children="Year of enrollment" />
            <Input
              placeholder="2024"
              onChange={handleDegreeChange}
              value={SelectDegree.year_of_enrollment}
              name="year_of_enrollment"
            />
          </Box>
          <Box>
            <Text as="b" children="Year of graduation" />
            <Input
              placeholder="2024"
              onChange={handleDegreeChange}
              value={SelectDegree.year_of_graduation}
              name="year_of_graduation"
            />
          </Box>
          <Box>
            <Text as="b" children="Discipline" />
            <Input
              placeholder="Computer Science"
              onChange={handleDegreeChange}
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
  /* END SELECT DEGREE MODAL (variables, fuctions)*/
  /* START DOCUMENT ID MODAL (variables, fuctions)*/
  /* This part is the same concept than the DegreeSelect */
  const [IDCardInform, setIDCardInform] = useState({
    name: "",
    surname: "",
    date_of_birth: "",
    place_of_birth: "",
    issuing: "",
  });

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
      });
    } catch (error) {
      console.log(error);
    }
  };

  const DisplayFieldIDCard = () => {
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
  /* END DOCUMENT ID MODAL (variables, fuctions)*/

  /* START SELECT DEPARMENT MODAL (variables, fuctions)*/
  /* This part is the same concept than the DegreeSelect */
  const [SelectDepartment, setSelectDepartment] = useState([
    { id: 1, label: "Informatic", checked: false },
    { id: 2, label: "Science", checked: false },
    { id: 3, label: "Literature", checked: false },
    { id: 4, label: "Foreign language", checked: false },
    { id: 5, label: "Lawyer", checked: false },
    { id: 6, label: "Veterinary", checked: false },
  ]);

  const handleSelectDepartmentChange = (id) => {
    setSelectDepartment((prevChecklist) =>
      prevChecklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const DisplayFieldSelectDepartment = () => {
    return (
      <Stack>
        {SelectDepartment.map((item) => (
          <Checkbox
            key={item.id}
            onChange={() => handleSelectDepartmentChange(item.id)}
          >
            {item.label}
          </Checkbox>
        ))}
      </Stack>
    );
  };
  /* END SELECT DEPARTMENT MODAL (variables, fuctions)*/

  return (
    <ChakraProvider>
      <Center w="100%">
        <Box w="10%"></Box>
        <Box bg="grey" w="100%" p="100px" color="white">
          <Box p="3"></Box>
          <Center>
            <Button
              fontSize="2xl"
              colorScheme="grey"
              onClick={SelectDegreeModal.onOpen}
            >
              Documents
            </Button>
          </Center>
          <Modal
            onClose={SelectDegreeModal.onClose}
            isOpen={SelectDegreeModal.isOpen}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <Center>
                <ModalHeader style={{ textAlign: "center" }}>
                  Document
                </ModalHeader>
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
                  {DisplayFieldDegree(degree)}
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={async () => {
                    if (!submitDegreeForm()) {
                      await SelectDegreeModal.onClose();
                      DocumentIDModal.onOpen();
                    }
                  }}
                >
                  {" "}
                  Next{" "}
                </Button>
                <Box p="3"></Box>
                <Button
                  onClick={async () => {
                    SelectDegreeModal.onClose();
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal
            onClose={DocumentIDModal.onClose}
            isOpen={DocumentIDModal.isOpen}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader style={{ textAlign: "center" }}>
                ID Card Information
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>{DisplayFieldIDCard()}</ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={async () => {
                    if (!submitIDCardForm()) {
                      await DocumentIDModal.onClose();
                      DocumentSelectDepartment.onOpen();
                    }
                  }}
                >
                  {" "}
                  Next{" "}
                </Button>
                <Box p="3"></Box>
                <Button onClick={DocumentIDModal.onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal
            onClose={DocumentSelectDepartment.onClose}
            isOpen={DocumentSelectDepartment.isOpen}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader style={{ textAlign: "center" }}>
                List of Departments
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>{DisplayFieldSelectDepartment()}</ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={async () => {
                    if (!submitIDCardForm()) {
                      await DocumentIDModal.onClose();
                      navigate("/dashboard");
                    }
                  }}
                >
                  {" "}
                  Next{" "}
                </Button>
                <Box p="3"></Box>
                <Button onClick={DocumentSelectDepartment.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Box p="3"></Box>
        </Box>
        <Box w="10%"></Box>
      </Center>
    </ChakraProvider>
  );
};

export default DegreeDocument;
