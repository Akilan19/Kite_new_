import React from 'react';
import Link from 'next/link'

import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://wallpaperaccess.com/full/8073548.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-bl, blackAlpha.700, transparent)'}>
          <Stack maxW={'3xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={800}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '6xl' })}>
              View Some of Free APIs
            </Text>
          </Stack>

          <Stack direction={'row'} align={'center'}>
              <Link href="Second">
              <Button
                size={'lg'}
                variant='solid'
                bg={'blackAlpha.900'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                <a>Tap To View</a>
              </Button>
              </Link>
            </Stack>

        </VStack>
      </Flex>
    );
  }
  