import { TouchableOpacity, View } from "react-native";

import { Flex } from "../flex";
import { Icon } from "../icon";
import { Text } from "../text";
import { makeStyles } from "../theme";
import { useDisabledStyles } from "../theme/default-styles";
import FieldErrors from "./field-errors";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  errors?: string[];
  disabled?: boolean;
};

export function Checkbox({
  checked,
  onChange,
  label,
  errors,
  disabled = false,
}: CheckboxProps) {
  const styles = useStyles();
  const disabledStyles = useDisabledStyles();

  return (
    <Flex direction="column" gap="xs">
      <TouchableOpacity onPress={() => onChange(!checked)} disabled={disabled}>
        <Flex direction="row" align="center" gap="xs">
          <View style={styles.iconContainer}>
            {checked && (
              <View
                style={[styles.iconBackground, disabled && styles.disabled]}
              />
            )}
            <Icon
              type="material"
              name={checked ? "check-box" : "check-box-outline-blank"}
              color={
                checked ? styles.iconChecked.color : styles.iconUnchecked.color
              }
              style={[disabled && disabledStyles.text]}
            />
          </View>

          {label && (
            <Text style={[styles.label, disabled && disabledStyles.text]}>
              {label}
            </Text>
          )}
        </Flex>
      </TouchableOpacity>

      <FieldErrors errors={errors} />
    </Flex>
  );
}

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    position: "relative",
  },
  iconBackground: {
    position: "absolute",
    width: 16,
    height: 16,
    top: 4,
    left: 4,
    backgroundColor: theme.colors.background("light"),
  },
  iconChecked: {
    color: theme.colors.get("primary", "background"),
  },
  iconUnchecked: {
    color: theme.colors.select(
      theme.colors.get("gray", 4)!,
      theme.colors.get("gray", 6)!
    ),
  },
  label: {
    color: theme.colors.foreground("auto"),
  },
  disabled: { backgroundColor: "transparent" },
}));
