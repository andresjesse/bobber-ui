import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from "react-native";

import { Flex } from "../flex";
import { Text } from "../text";
import { makeStyles } from "../theme";
import { useDisabledStyles } from "../theme/default-styles";
import FieldErrors from "./field-errors";

type TextInputProps = {
  label?: string;
  errors?: string[];
  disabled?: boolean;
} & RNTextInputProps;

export function TextInput({
  label,
  errors,
  disabled = false,
  ...rest
}: TextInputProps) {
  const styles = useStyles();
  const disabledStyles = useDisabledStyles();

  return (
    <Flex direction="column" gap="xs">
      {label && <Text>{label}</Text>}

      <RNTextInput
        style={[styles.input, disabled && disabledStyles.text]}
        editable={!disabled}
        {...rest}
        placeholderTextColor={styles.placeholder.color}
      />

      <FieldErrors errors={errors} />
    </Flex>
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    borderWidth: 1,
    borderRadius: theme.radius("default"),
    borderColor: theme.colors.get("gray", [4, 6]),
    padding: theme.spacing("default"),
    color: theme.colors.get("gray", [8, 2]),
  },
  placeholder: {
    color: theme.colors.get("gray", [4, 6]),
  },
}));
