import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChatState } from '../Context/ChatProvider';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import { Flex, Box, Text, Image, useToast } from '@chakra-ui/react';


import Carousel from './Carousel';
import { useNavigate } from "react-router-dom";
import UserListItem from '../components/userAvatar/UserListItem';

const Market = () => {
 
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();
  const toast = useToast();
  const {
    setSelectedChat,
    user,
  
    chats,
    setChats,
  } = ChatState();
  

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user/market');
        setMarketData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const accessChat = async (userId) => {
   

    try {
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      navigate("/chats")
     
      
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  return (
    <>
     <Flex className="market_main" direction="column" align="center" width="100%" height="100%" >
    {user && <SideDrawer />}
    <Box className="cards-container" width="90%" maxWidth="800px" marginTop={"3rem"}>
        {loading && <Text>Loading...</Text>}
        {!loading &&
            marketData.map((item, index) => (
              <Flex width="100%"
                    borderRadius="25px"
                    boxShadow="lg"
                    backgroundColor="#F0FFFF"
                    transition="transform 0.3s ease"
                    _hover={{
                       
                        transform: "scale(1.05)"
                    }} 
                    mb={8}
                    
                    p={4} 
                    flexDirection="column"
                    marginBottom={"2rem"}
                   >
                <Flex
                    key={index}
                    className="card_market"
                   
                    flexDir={{ base: 'column', md: 'column-reverse' }} 
                    alignItems="center"
                   backgroundColor={" #FFAA33 "}
                   height={"auto"}
                   borderRadius={"25px"}
                   boxShadow={"lg"}
                 
                >
                    <Box
                        order={{ base: 2, md: 1 }} 
                        flexBasis={{ base: '100%', md: '40%' }}
                        mb={{ base: 2, md: 0 }} 
                    >
                        <Image
                            src={item.pic}
                            alt="server_fault"
                            boxSize="150px"
                            borderRadius="50%"
                            marginBottom={"-50px"}
                            mx={"auto"}
                            className='market_img'
                            
                           
                        />
                    </Box>
                    <Box
                        order={{ base: 1, md: 2 }} 
                        flexBasis={{ base: '100%', md: '60%' }} 
                        textAlign="left"
                        ml={{ base: 0, md: 4 }} 
                        padding={{base:"2rem"}}
                    >
                    <Text p="0.1rem" fontSize="xl" fontWeight="semibold">
                        <span className="dec">Name: </span>
                        {item.name}
                    </Text>
                    <Text p="0.1rem" fontSize="xl">
                        <span className="dec"></span>
                        {item.work}
                    </Text>
                    <Text p="0.1rem" fontSize="xl">
                        <span className="dec"></span>
                        {item.phone}
                    </Text>
                    <Text p="0.1rem" fontSize="xl">
                        <span className="dec">Address: </span>
                        {item.address}
                    </Text>
                    <Text p="0.1rem" fontSize="xl">
                        <span className="dec">Time: {item.id}</span>
                        {item.time}
                    </Text>
                   
                    
                    </Box>
                  
                </Flex>
                    <Box>
                      <Carousel pic1={item.pic1} pic2={item.pic2} pic3={item.pic3} pic4={item.pic4} pic5={item.pic5}/>
                    <Box marginTop={"1rem"} overflow={"visible"}
                        color={"white"}  >
                  <UserListItem
                  className="bn9"
                  key={item._id}
                  user={item}
                  handleFunction={() => accessChat(item._id)}
                />
                {/* <button className="bn9"><span>☝️ Chat With Me</span></button> */}
                   
                    
                    </Box>
                    </Box>
                       <a href="/"><button className="bn632-hover bn27">☝️Send Message</button></a>
                </Flex>
            ))}
    </Box>
</Flex>

    </>
  );
};

export default Market;

