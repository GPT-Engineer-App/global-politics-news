// Complete the Index page component for a news site focused on international politics
import { Box, Container, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import { FaGlobeAmericas } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Global Politics Today <FaGlobeAmericas />
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your daily source for the latest in international politics.
        </Text>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="lg">
            Breaking News: Diplomatic Talks Begin
          </Heading>
          <Text mt={4}>In an unprecedented move, leaders from over 30 countries have gathered to discuss global trade policies and their impact on economic stability worldwide.</Text>
          <Image src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY29uZmVyZW5jZXxlbnwwfHx8fDE3MTM5OTc0NTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="International Conference" />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="lg">
            Feature: The Rise of Digital Diplomacy
          </Heading>
          <Text mt={4}>Explore how digital platforms are transforming traditional diplomatic engagements, making it easier for nations to communicate and resolve conflicts.</Text>
          <Image src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGlwbG9tYWN5fGVufDB8fHx8MTcxMzk5NzQ1NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Digital Diplomacy" />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="lg">
            Opinion: Climate Change and Global Security
          </Heading>
          <Text mt={4}>A deep dive into how climate change is becoming a pivotal point in international relations, with potential to either unite or divide nations.</Text>
          <Image src="https://images.unsplash.com/photo-1554418651-70309daf95f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwcG9saXRpY3N8ZW58MHx8fHwxNzEzOTk3NDU1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Climate Change Politics" />
        </Box>

        <Link href="#" color="teal.500" isExternal>
          More News
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
