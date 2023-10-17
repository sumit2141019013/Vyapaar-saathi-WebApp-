import React,{useEffect} from "react";
import {
  Box,
  Container,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,

} from "@chakra-ui/react";
import Login from "../components/Authentication/Login.js";
import Signup from "../components/Authentication/Signup.js";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/login.png"
import img2 from "../assets/hotDog.png"
const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user){ navigate("/chats")};
  }, [navigate]);

  return (
    <Box className="back_pic" display={"flex"} flexDir={{base:"column",md:"row"}}> 
    <Box >
    <Image  className="login_img" src={img1} width={{md:"70rem"}}/>  
    </Box>
    <Container maxW="xl" centerContent  
       
>
  
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        backgroundColor="orange"
        

      >
        <Text fontSize="4xl" fontFamily="Work sans" color="white">
         Vyapaar Saathi
        </Text>
      </Box>
      <Box  w="100%" p={4} borderRadius="lg" borderWidth="2px" border={"2px solid grey"} >
        <Tabs isFitted variant="soft-rounded" >
          <TabList mb="1em" color={"black"}>
            <Tab >Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      
    </Container>
    <Box >
    <Image  className="login_img2" src={img2} width={{base:"20rem",md:"70rem"}}/>   
    </Box>
    </Box>
  );
};

export default Homepage;
