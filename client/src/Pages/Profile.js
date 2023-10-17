import React, { useState } from "react";
import SideDrawer from '../components/miscellaneous/SideDrawer';
import UserProfile from "./UserProfile";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";

const Profile = () => {
  const {user}=ChatState();

  const [name, setname] = useState();
  const [email, setemail] = useState();
  
  
  const [phone, setPhone] = useState();
 
  
  const [address,setAddress]=useState();
  
  const[pincode,setPincode]=useState();
  const [pic, setPic] = useState();
  const [loading, setloading] = useState(false);
  const [pic1, setPic1] = useState();

  const [pic2, setPic2] = useState();

  const [pic3, setPic3] = useState();

  const [pic4, setPic4] = useState();
 
  const [pic5, setPic5] = useState();
   const [work,setWork]=useState();
  const toast = useToast();
  



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
  const postDetails1 = (pics) => {
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
          setPic1(data.url.toString());
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
  const postDetails2 = (pics) => {
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
          setPic2(data.url.toString());
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
  const postDetails3 = (pics) => {
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
          setPic3(data.url.toString());
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
  const postDetails4 = (pics) => {
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
          setPic4(data.url.toString());
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
  const postDetails5 = (pics) => {
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
          setPic5(data.url.toString());
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

  try {
    const requestData = {
      name,
      email,
      phone,
      work,
      address,
      pincode,
      pic,
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.put("/api/user/profile", requestData, config);

    console.log(data);
    toast({
      title: "Profile Updated Successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    window.location.reload();
    setloading(false);

  } catch (error) {
    toast({
      title: "Error occurred",
      description: "An error occurred while updating the profile.",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    setloading(false);
  }
};

  

  return (
   
    <>
    

<div className="update_profile">
    {user && <SideDrawer />}
    <div className="background">
    <UserProfile />
  
  <div className="update_form1 ">
  <label htmlFor="fileInput">
  
</label>
<input
  type="file"
  id="fileInput"
  style={{ display: "none" }} // Hide the file input
  onChange={(e) => postDetails(e.target.files[0])}
/>    <div className="update_form2">
      <div className="update_input">
        <input
            type="text"
            id="full-name"
            placeholder="Full Name"
            onChange={(e) => setname(e.target.value)}
        />
    </div>

    <div className="update_input">
        <input
            type="email"
            id="email"
            placeholder="Email-Id"
            onChange={(e) => setemail(e.target.value)}
        />
    </div>

    <div className="update_input">
        <input
            type="tel"
            id="phone"
            placeholder="Contact no"
            onChange={(e) => setPhone(e.target.value)}
        />
    </div>
    <div className="update_input">
        <input
            type="text"
            id="phone"
            placeholder="Work category"
            onChange={(e) => setWork(e.target.value)}
        />
    </div>

    <div className="update_input" >
        <input
            type="text"
            id="address"
            placeholder="Full Address"
            onChange={(e) => setAddress(e.target.value)}
        />
    </div>

    <div className="update_input">
        <input
            type="text"
            id="pincode"
            placeholder="Pincode"
            onChange={(e) => setPincode(e.target.value)}
        />
    </div>
   
    <h1 className="update_pics"> Change Your Showcase:</h1>
    <div className="update_input2">
    <input
        multiple
        type="file"
        id="pic1"
        onChange={(e) => postDetails1(e.target.files[0])}
        accept="image/*"
    />
</div>

<div className="update_input2">
    <input
        multiple
        type="file"
        id="pic2"
        onChange={(e) => postDetails2(e.target.files[0])}
        accept="image/*"
    />
</div>

<div className="update_input2">
    <input
        multiple
        type="file"
        id="pic3"
        onChange={(e) => postDetails3(e.target.files[0])}
        accept="image/*"
    />
</div>

<div className="update_input2">
    <input
        multiple
        type="file"
        id="pic4"
        onChange={(e) => postDetails4(e.target.files[0])}
        accept="image/*"
    />
</div>

<div className="update_input2">
    <input
        multiple
        type="file"
        id="pic5"
        onChange={(e) => postDetails5(e.target.files[0])}
        accept="image/*"
    />
</div>

<div className="update_input2">
    <button className="update_btn "
        type="button"
        onClick={submitHandler}
        disabled={loading}
    >
        Update
    </button>
    </div>
</div>
</div>
</div>
</div>

    </>
  );
        };

export default Profile;


