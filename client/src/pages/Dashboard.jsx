import NavigationBar from "../components/navigationBar";
import MenuHome from "../components/menu";
import "react-datepicker/dist/react-datepicker.css";
import "react-notifications/lib/notifications.css";
import { ChakraProvider } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <ChakraProvider>
      <NavigationBar />
      <MenuHome />
    </ChakraProvider>
  );
};

export default Dashboard;
