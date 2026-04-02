import { makeStyles } from "./make-styles";

type ShadowStyleProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
};

const shadowSize = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

export const useShadowStyle = makeStyles(
  (_, { size = "xs", color = "#000" }: ShadowStyleProps) => ({
    defaultShadow: {
      shadowColor: color,
      shadowOffset: {
        width: 0,
        height: 1 * shadowSize[size],
      },
      shadowOpacity: 0.22 * shadowSize[size],
      shadowRadius: 2.22 * shadowSize[size],

      elevation: 3 * shadowSize[size],
    },
  })
);

export const useDisabledStyles = makeStyles((theme) => ({
  text: {
    opacity: 0.5,
    color: theme.colors.foreground("auto"),
  },
  button: {
    opacity: 0.5,
    backgroundColor: theme.colors.background("auto"),
  },
}));
