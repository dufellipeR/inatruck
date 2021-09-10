import { 
  useBreakpointValue,
  Grid,
  Box,
  Flex,
  Text, 
  Divider,
} from '@chakra-ui/react';

interface HeaderContentProps {
  title: string;
  description?: string;
}

export default function HeaderContent({ title, description = '' }: HeaderContentProps) {
  const isSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Box
      w="100%" 
      p="3rem 0"
      bg="#D02129" 
      mb="2rem"
    >
      {isSmallScreen ? (
        <Flex
          direction="column"
          align="center"
        >
          <Text fontSize="2rem" color="#FFF">{title}</Text>
          <Divider 
            w="80%" 
            border="none"
            h="2px"
            bg="#FFF"
            borderRadius={4}
            opacity={1}
          />
          { !!description && <Text fontSize="1rem" color="#FFF">A empresa</Text> }
        </Flex>
      ) : (
        <Grid 
          h="100%"
          m="0 auto"
          p={{ sm: '2rem', lg: '0' }}
          templateColumns="1fr 1fr"
          justify={{ sm: 'center', lg: 'space-between' }}
          alignItems="center"
        > 
          <Flex direction="column" align="flex-end" gridGap="0.5rem" maxW="70%">
            <Text fontSize="2rem" color="#FFF">{title}</Text>
            <Divider 
              w="100%" 
              border="none"
              h="2px"
              bg="#FFF"
              borderRadius={4}
              opacity={1}
            />
            { !!description && <Text fontSize="1rem" color="#FFF">A empresa</Text> }
          </Flex>
          
          <Box 
            borderBottomWidth={4}
            borderBottomColor="#000"
            borderBottomStyle="solid"
            borderRadius={4}
            pt="6rem"
            w="100%"
            ml="auto"
            maxW="70%"
          />
        </Grid>
      )}
      
    </Box>
  );
}