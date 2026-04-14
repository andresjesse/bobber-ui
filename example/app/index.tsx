import { Header, ScreenWrapper } from "@andresjesse/bobber-ui";

import CommonUICard from "../components/cards/common-ui-card";
import DialogsModalsCard from "../components/cards/dialogs-modals-card";
import ScreenWrappersCard from "../components/cards/screen-wrappers-card";
import MainMenu from "../menus/main-menu";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Home" menu={<MainMenu />} />

      <ScreenWrappersCard />

      <CommonUICard />

      <DialogsModalsCard />
    </ScreenWrapper.Scrollable>
  );
}
