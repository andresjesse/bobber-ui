import { type ReactNode, useEffect } from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { select } from "../dialog/select";
import { Flex } from "../flex";
import { isArrayOfStrings } from "../helpers/is-array-of-strings";
import { Icon } from "../icon";
import { DEFAULT_STRINGS } from "../lang/default-strings";
import { Text } from "../text";
import { makeStyles } from "../theme";
import { useDisabledStyles } from "../theme/default-styles";
import FieldErrors from "./field-errors";

type SelectProps<T> = {
  onChange: (selected: T | string | null) => void;
  label?: string;
  errors?: string[];
  disabled?: boolean;
  defaultSelectedIndex?: number;
  allowDeselect?: boolean;
  style?: TouchableOpacityProps["style"];
} & (
  | { data: string[]; selected: string }
  | {
      data: { values: T[]; renderItem: (item: T, key: React.Key) => ReactNode };
      selected: T;
    }
);

export function Select<T>({
  data,
  selected,
  onChange,
  label,
  errors,
  disabled = false,
  defaultSelectedIndex,
  allowDeselect = false,
  style,
}: SelectProps<T>) {
  const styles = useStyles();
  const disabledStyles = useDisabledStyles();

  useEffect(() => {
    if (allowDeselect && defaultSelectedIndex === undefined) {
      return;
    }

    if (isArrayOfStrings(data)) {
      if (data.length === 0) {
        return;
      }

      if (defaultSelectedIndex !== undefined) {
        onChange(data[defaultSelectedIndex]!);
      } else {
        onChange(data[0]!);
      }
    } else {
      if (data.values.length === 0) {
        return;
      }

      if (defaultSelectedIndex !== undefined) {
        onChange(data.values[defaultSelectedIndex]!);
      } else {
        onChange(data.values[0]!);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openSelect = () => {
    // Dialog.select causes require cycle, so keep import from source function here.
    select(
      label || DEFAULT_STRINGS.select,
      data,
      (item: T | string) => {
        onChange(item);
      },
      {
        cancelable: false,
      }
    );
  };

  return (
    <Flex direction="column" gap="xs">
      {label && <Text>{label}</Text>}

      <TouchableOpacity
        onPress={openSelect}
        disabled={disabled}
        style={[styles.input, style]}
      >
        <Flex direction="row" justify="space-between" gap="xs" align="center">
          {isArrayOfStrings(data) ? (
            <Text style={[disabled && disabledStyles.text]}>
              {selected as string}
            </Text>
          ) : (
            data.renderItem(selected as T, 0)
          )}

          <Flex direction="row" gap="xs" align="center">
            {allowDeselect && selected && (
              <TouchableOpacity
                onPress={() => onChange(null)}
                disabled={disabled}
              >
                <Icon
                  type="material"
                  name="close"
                  size={16}
                  style={[disabled && disabledStyles.text]}
                />
              </TouchableOpacity>
            )}

            <Flex gap={0}>
              <Icon
                type="material"
                name="keyboard-arrow-up"
                size={14}
                style={[styles.upperIcon, disabled && disabledStyles.text]}
              />
              <Icon
                type="material"
                name="keyboard-arrow-down"
                size={14}
                style={[styles.lowerIcon, disabled && disabledStyles.text]}
              />
            </Flex>
          </Flex>
        </Flex>
      </TouchableOpacity>

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
  upperIcon: {
    marginBottom: -4,
  },
  lowerIcon: {
    marginTop: -4,
  },
}));
