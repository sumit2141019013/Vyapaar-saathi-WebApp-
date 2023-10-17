import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  
  Select
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setshow] = useState(false);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  

  const [options, setOptions] = useState();
 
  const [pic, setPic] = useState();
  const [loading, setloading] = useState(false);
 

  const toast = useToast();
  const handleClick = () => setshow(!show);
  const navigate = useNavigate();



  const postDetails = (pics) => {
    setloading(true);
    if (pics === undefined) {
      toast({
        title: "please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      

      data.append("file", pics);
      data.append("upload_preset", "chat-app-vs");
      data.append("cloud_name", "dzrhp8ms2");
      fetch("https://api.cloudinary.com/v1_1/dzrhp8ms2/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    } else {
      toast({
        title: "please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
      return;
    }
  };
 
  const submitHandler = async () => {
    setloading(true);
    if (!name || !email || !options || !password || !confirmpassword) {
      toast({
        title: "please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Password do not match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        { name, email,options, password,pic },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // localStorage.setItem("userInfo", JSON.stringify(data));
      setloading(false);
      navigate("/");
    } catch (error) {
      toast({
        title: "Error occured",
        description: "hii",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
    }
  };

  return (
    <VStack spacing="15px" color="black" >
      <FormControl id="first-name" isRequired >
        <Input
          placeholder="Full Name"
          onChange={(e) => setname(e.target.value)}
          border={"2px solid grey"}
          _placeholder={{color:"black", fontWeight:"thin" }}
           />
      </FormControl>

      <FormControl id="email" isRequired>
        <Input
          placeholder="Email-Id"
          onChange={(e) => setemail(e.target.value)}
          border={"2px solid grey"}
          _placeholder={{color:"black", fontWeight:"thin" }}

        />
      </FormControl>
      
      <FormControl id="option" isRequired>
      <Select
        placeholder="Select Option"
        onChange={(e) => setOptions(e.target.value)}
        border={"2px solid grey"}
       color={"black"}
       fontWeight={"thin"}

      >
        <option value="hawker">Hawker</option>
        <option value="buyer">Buyer</option>
      </Select>
    </FormControl>
  
    
      <FormControl id="password" isRequired>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
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
      <FormControl id="confirmpassword" isRequired>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder=" Confirm password"
            onChange={(e) => setconfirmpassword(e.target.value)}
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
      <FormControl id="pic">
        <FormLabel  color={"black"}
       fontWeight={"thin"}>Upload Your Pic</FormLabel>
        <Input
        multiple
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
          border={"2px solid grey"}
          color={"black"}
       fontWeight={"thin"}

        />
      </FormControl>
    
   
      <Button
        color="black"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
        _hover={{ backgroundColor: "green" }}
        bg={"#50C878"}
        
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
