require('dotenv').config()
// console.log(process.env)

import Login from "@/components/Login";
import { ChakraProvider, Spinner, Center } from "@chakra-ui/react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebaseconfig";

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return(
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl"/>
        </Center>
      </ChakraProvider>
      
    )
  }

  if (!user) {
    return (
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    )
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
