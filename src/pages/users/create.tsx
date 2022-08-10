import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {

   return (
      <Box>
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <Box
               flex="1"
               borderRadius={8}
               bg="gray.800"
               p="8"
            >
               
            </Box>
         </Flex>
      </Box>
   )
} 