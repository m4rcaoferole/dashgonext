import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box>
        <Text>Marcos Vinicius</Text>
        <Text color="gray.300" fontSize="small">
          marcao.vfo@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Marcos Vinicius"
        src="https://github.com/m4rcaoferole.png"
      />
    </Flex>
  );
}
