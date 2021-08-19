import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Heading,
    HStack,
    VStack,
    Flex,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaGithub, FaTwitter, FaYoutube,FaMedium } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import Logo from '../Logo';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (<>
        <Stack
          padding="4"
          direction={["column", "row"]}
          alignContent="center"
          justifyContent="space-between"
        >
          <HStack>
            <VStack>
            <Link href="/" _hover={{ color: "inherit" }}>
            <HStack>
              <Logo height="8" />
              <Heading fontWeight="semibold" size="md" as="h6" color="brand.500">
                OMNIEDGE
              </Heading>
              </HStack>
              </Link>
              <Text fontSize={'sm'} align="center">
                © 2021 OmniEdge Inc. All rights reserved <br />
                | US | AU | CN | DE | MA |
              </Text>
              <Stack direction={'row'} spacing={3}>
                <SocialButton label={'Twitter'} href="https://twitter.com/omniedgeio">
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href="https://www.youtube.com/channel/UCe6OYOyfWDkSkN7LQ3Rp8_g">
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Github'} href="https://github.com/omniedgeio/omniedge/discussions">
                  <FaGithub />
                </SocialButton>
                <SocialButton label={'Medium'} href="https://omniedge.medium.com/">
                  <FaMedium />
                </SocialButton>
              </Stack>
              </VStack>
            </HStack>
            <VStack display={["none", "flex"]}>
            <Stack align={'flex-start'} >
              <Link href="/about">About us</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/contactus">Contact us</Link>
            </Stack>
            </VStack>
            <VStack display={["none", "flex"]}>
            <Stack align={'flex-start'}>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </Stack>
            </VStack>
        <VStack>
          <Stack>
          <ListHeader >Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('brand.500', 'brand.900')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
          </Stack>
          </VStack>
        </Stack>
        </>
    );
  }
