import { DefaultHeader } from "./headers/default";
import { HiddenHeader } from "./headers/hidden";

import HeaderMenuContainer from "./menu/container";
import HeaderMenuDivider from "./menu/divider";
import HeaderMenuItem from "./menu/item";
import HeaderMenuUser from "./menu/user";

export { ThemedStatusBar } from "./themed-statusbar";

export const Header = {
  Hidden: HiddenHeader,
  Default: DefaultHeader,
};

export const HeaderMenu = {
  Container: HeaderMenuContainer,
  Divider: HeaderMenuDivider,
  Item: HeaderMenuItem,
  User: HeaderMenuUser,
};
