import { Text, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import AuthInputs from './Authinputs';
import OAuthButtons from './OAuthButtons';


const AuthModal:React.FC = () => {
    
    const[modalState, setModalState] = useRecoilState(authModalState);

    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open:false,
        }));
    };
    return (
      <>
  
        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">
            {modalState.view === 'login' && 'Login'}
            {modalState.view === "signup" && "Sign Up"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pb={6}>

                <Flex
                direction="column"
                justify="center"
                align="center"
                width="70%"
                >

                    <OAuthButtons />
                    <Text color="gray.500">OR</Text>
                    <AuthInputs />
                    {/* <ResetPassword /> */}

                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
export default AuthModal;