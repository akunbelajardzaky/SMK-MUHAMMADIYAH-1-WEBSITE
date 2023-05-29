"use client";

import Image from "next/image";
// import Link from "next/link";
import { getProjects } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

import React from "react";
import {
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Link,
  Text,
  Icon,
  Tag,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";

export default async function Home() {
  const project = await getProjects();
  return (
    <Container p={{ base: 5, md: 10 }}>
      <VStack spacing={8} w={{ base: "auto", md: "2xl" }}>
        {project.map((project) => (
          <Stack
            key={project._id}
            direction="column"
            spacing={4}
            p={4}
            bg={useColorModeValue("gray.100", "gray.800")}
            border="1px solid"
            borderColor="blue.100"
            _hover={{
              borderColor: "blue.300",
              boxShadow: useColorModeValue(
                "0 4px 6px rgba(160, 174, 192, 0.6)",
                "0 4px 6px rgba(9, 17, 28, 0.9)"
              ),
            }}
            rounded="lg"
          >
            <HStack spacing={2} mb={1}>
              {/* {project.tags.map((cat, index) => (
                <Tag
                  key={index}
                  colorScheme={useColorModeValue("blackAlpha", "gray")}
                  borderRadius="full"
                >
                  {cat}
                </Tag>
              ))} */}
            </HStack>
            <Box textAlign="left">
              <Link
                fontSize="xl"
                lineHeight={1.2}
                fontWeight="bold"
                w="100%"
                _hover={{ color: "blue.400", textDecoration: "underline" }}
              >
                {project.name}
              </Link>
              <Text
                fontSize="md"
                color="gray.500"
                noOfLines={2}
                lineHeight="normal"
              >
                <PortableText value={project.content} />{" "}
              </Text>
            </Box>
            <Box>
              {/* <Avatar
                size="sm"
                title="Author"
                mb={2}
                src={article.userAvatar}
              /> */}
              <Stack
                justify="space-between"
                direction={{ base: "column", sm: "row" }}
              >
                <Box>
                  {/* <Text fontSize="sm" fontWeight="bold">
                    {article.username}
                  </Text> */}
                  {/* <Text fontSize="sm" color="gray.500">
                    {project._createdAt}
                  </Text> */}
                </Box>
                <HStack
                  as={Link}
                  spacing={1}
                  p={1}
                  alignItems="center"
                  height="2rem"
                  w="max-content"
                  margin="auto 0"
                  rounded="md"
                  color="blue.400"
                  _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
                >
                  <Text fontSize="sm"> Read more</Text>
                  <Icon as={GoChevronRight} w={4} h={4} />
                </HStack>
              </Stack>
            </Box>
          </Stack>
        ))}
      </VStack>
    </Container>
  );
}
