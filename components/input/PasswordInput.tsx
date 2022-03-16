import { Button, Input, InputGroup, InputProps, InputRightElement } from "@chakra-ui/react";
import { FieldInputProps } from "formik";
import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

const PasswordInput: React.FC<FieldInputProps<string> | InputProps> = function PasswordInput(props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input pr="2.75rem" type={show ? "text" : "password"} placeholder="Enter your password" {...props} />
      <InputRightElement width="2.75rem">
        <Button color="gray.500" variant="ghost" px="1" h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <BiHide /> : <BiShow />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
