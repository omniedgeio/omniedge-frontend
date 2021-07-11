import { createStandaloneToast } from "@chakra-ui/react";

export function showError(title = "Error", message = "Unexpected error: Please try again later") {
  const toast = createStandaloneToast({});

  toast({
    title: title,
    status: "error",
    description: message,
    duration: 3000,
    isClosable: true,
  });
}

export function showSuccess(title = "Success", message?: string) {
  const toast = createStandaloneToast({});

  toast({
    title: title,
    status: "success",
    description: message,
    duration: 3000,
    isClosable: true,
  });
}
