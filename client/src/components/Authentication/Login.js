import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  useToast,
 
} from "@chakra-ui/react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setshow] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  const handleClick = () => setshow(!show);



  const submitHandler = async () => {
    setloading(true);
    if (!email || !password) {
      toast({
        title: "please Fill Up All The Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setloading(false);
      navigate("/Home");
    } catch (error) {
      console.log(email,password);
      toast({
        title: "Error occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
    }
  };

  return (
    <VStack spacing="5px" color="black"  
    >
      <FormControl id="email1" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          border={"2px solid grey"}
          _placeholder={{color:"black", fontWeight:"thin" }}

        />
      </FormControl>
      <FormControl id="password1" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            border={"2px solid grey"}
            _placeholder={{color:"black", fontWeight:"thin" }}


          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="orange"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
        _hover={{ backgroundColor: "green" }}
        bg={"#50C878"}
      >
        Login
      </Button>
      
    </VStack>
  );
};

export default Login;
