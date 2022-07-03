import React from 'react';
import {Box, Text} from '../../../components';

export const EmptyList = () => (
  <Box
    flex={1}
    justifyContent="center"
    alignItems="center"
    mx="s"
    pb="s"
    mt="xl"
    mb="s">
    <Text color="black">There is no reddit items available</Text>
  </Box>
);
