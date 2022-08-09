import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
   ssr: false,
})

const options = {

}

const series = [
   { name: "series1", data: [30, 40, 45, 50, 49, 60, 70, 91] },
]

export default function Dashboard() {

   return (
      <Flex direction="column" h="100vh">
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
               <Box
                  p="8"
                  bg="gray.800"
                  borderRadius={8}
               >
                  <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                  <Chart options={options} series={series} type="area" height={160} />
               </Box>

               <Box
                  p="8"
                  bg="gray.800"
                  borderRadius={8}
               >
                  <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
               </Box>

            </SimpleGrid>
         </Flex>
      </Flex>
   )
}