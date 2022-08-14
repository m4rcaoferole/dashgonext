import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box>
        <Text>Marcos Vinicius</Text>
        <Text color="gray.300" fontSize="small">
          marcao.vfo@gmail.com
        </Text>
      </Box>
    )}
      <Avatar
        size="md"
        name="Marcos Vinicius"
        src="https://github.com/m4rcaoferole.png"
      />
    </Flex>
  );
} 