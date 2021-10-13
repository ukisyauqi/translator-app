import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import translate from "translate";

function App() {
  const [fromLang, setFromLang] = useState();
  const [toLang, setToLang] = useState();
  const [unTranslated, setUnTranslated] = useState("");
  const [translated, setTranslated] = useState("");
  const toast = useToast();

  const doTranslate = async () => {
    if (!fromLang || !toLang) {
      toast({
        description: "Please Select The Language",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return false;
    }
    if (unTranslated === "") {
      toast({
        description: "Please Input The Text",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return false;
    }
    const linesOfUnTranslated = unTranslated.split("\n");
    const linesOfTranslated = [];

    for (const i of linesOfUnTranslated) {
      linesOfTranslated.push(
        await translate(i, { from: fromLang, to: toLang })
      );
    }

    setTranslated(linesOfTranslated.join("\n"));
  };

  return (
    <Box className="App">
      <Center w="100vw" h="60px" bg="purple.700" color="white">
        <Heading size="lg">My Translator</Heading>
      </Center>
      <Flex
        bg="#fefcff"
        align="center"
        justify="center"
        h="calc(100vh - 60px)"
      >
        <Box
          bg="white"
          h="380px"
          border="1px solid #DDE3EA"
          borderRadius="10px"
        >
          <Flex h="320px" width="80vw" p="10px 20px 0 20px">
            <Box w="50%">
              <Center mb="10px">
                <Text mr="20px" align="center" py="2" noOfLines={1}>
                  Translate From:
                </Text>
                <Select
                  w="200px"
                  placeholder="Select Language"
                  onChange={(el) => setFromLang(el.target.value)}
                >
                  <option value="en">English</option>
                  <option value="id">Indonesia</option>
                  <option value="ja">Japan</option>
                </Select>
              </Center>
              <Textarea
                borderTopRightRadius="0px"
                borderBottomRightRadius="0px"
                resize="none"
                h="240px"
                value={unTranslated}
                onChange={(el) => {
                  setUnTranslated(el.target.value);
                  setTranslated("");
                }}
              ></Textarea>
            </Box>
            <Box w="50%">
              <Center mb="10px">
                <Text mr="20px" align="center" py="2" noOfLines={1}>
                  Translate To:
                </Text>
                <Select
                  w="200px"
                  placeholder="Select Language"
                  onChange={(el) => setToLang(el.target.value)}
                >
                  <option value="en">English</option>
                  <option value="id">Indonesia</option>
                  <option value="ja">Japan</option>
                </Select>
              </Center>
              <Textarea
                borderTopLeftRadius="0px"
                borderBottomLeftRadius="0px"
                position="relative"
                left="-1px"
                resize="none"
                h="240px"
                value={translated}
              ></Textarea>
            </Box>
          </Flex>
          <Center>
            <Button colorScheme="purple" _focus={{}} onClick={doTranslate}>
              TRANSLATE
            </Button>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
