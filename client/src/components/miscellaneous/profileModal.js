import { ViewIcon } from "@chakra-ui/icons";
import {
 
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
  Modal,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton display={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal display={{base:"none",md:"flex"}} size="lg"   onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent fontSize={{base:"0.7rem",md:"1.5rem"}}   bg="orange.100" height={"auto"} >
          <ModalHeader
          
          
            display="flex"
            justifyContent="center"
            textTransform="uppercase"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="8rem"
              src={user.pic}
              alt={user.name}
            />
            <Text
             
              
            >
              Email: {user.email}
            </Text>
            <Text
              
             
            > 
              Category: {user.work}
            </Text>
            <Text
             
              
            > 
              Contact: {user.phone}
            </Text>
            
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;