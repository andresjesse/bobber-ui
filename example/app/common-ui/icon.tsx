import { Header, Icon, ScreenWrapper } from "@andresjesse/bobber-ui";

export default function Screen() {
  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Icon" />

      <Icon type="material" name="home" size={32} color="lime" />

      <Icon type="material-community" name="home" size={32} color="lime" />

      <Icon type="material" name="home" size={48} color="teal" />

      <Icon type="material-community" name="home" size={48} color="teal" />
    </ScreenWrapper.Scrollable>
  );
}
