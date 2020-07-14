import React, { FC } from "react";
import { Box } from "@chakra-ui/core";

const DefaultLayout: FC = ({ children }) => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Box maxW="4xl" mx="auto" py={8} px={[8, 8, 8, 0]}>
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
