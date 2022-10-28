import React, { useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { ModalView } from "../../../atoms/authModalAtom";
// import { auth } from "../../../firebase/clientApp";
// import { FIREBASE_ERRORS } from "../../../firebase/errors";
// import InputItem from "../../Layout/InputItem";

type LoginProps = {
};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  
  //firebase logic
  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setLoginForm((prev)=> ({
        ...prev,
        [event.target.name]:event.target.value,
    }));
  }
  
  return (
    <form onSubmit={onSubmit}>
      <Input
      required
      name="email"
      placeholder="email"
      type="email"
      mb={2}
      onChange={onChange}
      fontSize="10pt"
      _placeholder={{color: "gray.500"}}
      _hover={{
        bg:"white",
        border:"1px solid",
        borderColor:"blue.500"
      }}
      _focus={{
        outline: "none",
        bg:"white",
        border: "1px solid",
        bordercolor:"blue.500",
      }}>
      </Input>

      <Input
      required
      name="Password"
      placeholder="password"
      type="password"
      mb={2}
      onChange={onChange}
      fontSize="10pt"
      _placeholder={{color: "gray.500"}}
      _hover={{
        bg:"white",
        border:"1px solid",
        borderColor:"blue.500"
      }}
      _focus={{
        outline: "none",
        bg:"white",
        border: "1px solid",
        bordercolor:"blue.500",
      }}
      bg="gray.50">
      </Input>
      <Button
        width="100%" height="36px" mt={2} mb={2} type="submit"
      >
        Log In
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New Here?</Text>
        <Text
         color="blue.500"
         fontWeight={700}
         cursor="pointer"
         onClick={()=>
             setAuthModalState((prev)=> ({
                 ...prev,
                 view: "signup",
             }))}
        >
           SIGN UP
        </Text>
      </Flex>      
    </form>
  );
};
export default Login;