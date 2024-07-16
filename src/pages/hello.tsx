import React from 'react';
import { Box, Button, Flex, Heading, Image, Text, Checkbox,Link } from '@chakra-ui/react';

const HelloPage = () => {
  return (
    <Box p={4}>
     
      <Flex align="center" justify="space-between" mb={4}>
        <Flex align="center">
          <Image
            borderRadius="full"
            boxSize="81px"
            src="https://www.wallpaper-box.com/cat/1366768/images/cat167.jpg"
            alt="Cat"
          />
          <Heading as="h1" size="lg" ml={4}>Take</Heading>
        </Flex>
        <Checkbox>Check me</Checkbox>
      </Flex>

     
      <Box textAlign="center">
        <Text fontSize="2xl" mb={2}>Hello!</Text>
        <Text mb={4}>This is a simple Hello World page.</Text>
        <Button colorScheme="blue">Button</Button>
        
      </Box>
    </Box>
  );
};

export default HelloPage;
