import React, {  useState } from "react";
import { Box, Tooltip, Button, Text, Avatar, Drawer, DrawerOverlay, DrawerBody, DrawerContent, DrawerHeader, Input, useDisclosure, Spinner } from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import {AiFillHome} from "react-icons/ai"
import { BsChatSquareDots } from 'react-icons/bs'
import {FaPeopleRoof} from "react-icons/fa6"
import { useToast } from "@chakra-ui/react";
// import ProfileModal from "./profileModal";
import { ChatState } from "../../Context/ChatProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChatLoading from "../ChatLoading";
import UserListItem from "../userAvatar/UserListItem";
import { getSender } from "../../config/ChatLogic";
import { Effect } from 'react-notification-badge'
import NotificationBadge from "react-notification-badge/lib/components/NotificationBadge";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = ChatState();
  // const [userProfile,setUserProfile]=useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();




  const logoutHandler = () => {
   localStorage.removeItem("userInfo");
    navigate("/")
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
     
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    // console.log(userId);

    try {
      setLoadingChat(true);
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
      setLoadingChat(false);
      onClose();
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
      <Box display="flex"
         flexDir={"row"}
        justifyContent={"space-between"}
        alignItems="center"
        bg="white"
        width="100%"
        p="0"
        borderWidth="5px"
        boxSizing="border-box" 
        position="fixed"
        zIndex={"1000"}>
        <Menu justifyContent="start">
        
          <Tooltip label="Search User to Chat" hasArrow placement="bottom-end"  >
          <Button variant="ghost" onClick={onOpen} backgroundColor={"gray.200"} ml="2rem">
            <i class="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} pl="10" >Search User</Text>
          </Button>

        </Tooltip>
        
        
        </Menu>
       
<div className="navbar_compo">
<Link to="/Home" className="nav-link" >
            <AiFillHome  />
            <Text display={{ base: "none", md: "flex" }} marginRight={{base:"none",md:"4rem"}}>Home</Text>
          </Link>

<Link to="/Market" className="nav-link">
            <FaPeopleRoof  />
            <Text display={{ base: "none", md: "flex" }} marginRight={{base:"none",md:"4rem"}}>Market</Text>
          </Link>
          <Link to="/chats" className="nav-link">
            <BsChatSquareDots  />
            <Text display={{ base: "none", md: "flex" }} marginRight={{base:"none",md:"4rem"}}>Chat</Text>
          </Link>


<Menu justifyContent="end">


     
  <MenuButton p={1}>
  <NotificationBadge
      count={notification.length}
      effect={Effect.SCALE}
    />
    <BellIcon fontSize="2xl" m={2} />
  </MenuButton>

  <MenuList pl={2}>
    {!notification.length && "No New Messages"}
    {notification.map((notif) => (
      <MenuItem
        key={notif._id}
        onClick={() => {
          setSelectedChat(notif.chat);
          setNotification(notification.filter((n) => n !== notif));
        }}
      >
        {notif.chat.isGroupChat
          ? `New Message in ${notif.chat.chatName}`
          : `New Message from ${getSender(user, notif.chat.users)}`}
      </MenuItem>
    ))}
  </MenuList>
</Menu>
<Menu >
  <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />} >
    <Avatar
      size="sm"
      cursor="pointer"
      name={user.name}
      src={user.pic}
      
    />
  </MenuButton>
  <MenuList >
    {/* <Link to="/userprofile">
      <MenuItem _hover={{backgroundColor:"orange.200"}}>My Profile</MenuItem>{" "}
    </Link> */}
    <MenuDivider />
    <Link to="/profile"><MenuItem _hover={{backgroundColor:"orange.200"}}>Edit Profile</MenuItem></Link>
    <MenuDivider />
    <Link to="/About"> <MenuItem _hover={{backgroundColor:"orange.200"}}>About</MenuItem></Link> 
    <MenuDivider />
    <MenuItem onClick={logoutHandler} _hover={{backgroundColor:"orange.200"}}>Log out</MenuItem>

   
  </MenuList>
</Menu>
</div>

        
      </Box>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent bg="orange.100">
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch} bg="orange">Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
             
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
