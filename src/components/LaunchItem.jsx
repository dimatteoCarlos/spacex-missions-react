import React from 'react';
import { Box, Flex, Text, Spacer, Tag, Button, Center } from '@chakra-ui/react';
import { HiCalendar } from 'react-icons/hi';

function LaunchItem(item) {
  return (
    <>
      <Box bg='gray.100' p={4} m={4} borderRadius={'lg'}>
        <Flex display='flex'>
          <Text fontSize='2xl'>
            [{item.flight_number}] Mission:
            <strong>{item.mission_name} </strong>
            <Text>
              {item.mission_name} ({item.launch_year})
            </Text>
          </Text>
          <Spacer />
          <Tag p={2} colorScheme={item.launch_success ? 'green' : 'red'}>
            {item.launch_success ? 'Successfull' : 'Failed'}
          </Tag>
        </Flex>
        <Flex align='center'>
          <HiCalendar style={{ color: '#005288' }} />
          {'  '}
          <Text fontSize='sm' ml={2} color='gray.500'>
            {item.launch_date_local.split('T')[0]}
          </Text>
        </Flex>
        {<br></br>}
        <Center>
          <img
            alt={'mission-logo'}
            src={item.links.mission_patch}
            width={350}
          />
        </Center>
        <Button
          mt={2}
          bgColor='#005288'
          colorScheme='lightGrey'
          onClick={() => {}}
        >
          View Details
        </Button>
      </Box>
    </>
  );
}

export default LaunchItem;
