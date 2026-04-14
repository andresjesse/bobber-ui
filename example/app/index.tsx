import {
  Badge,
  Button,
  Card,
  Checkbox,
  Form,
  Header,
  ScreenWrapper,
  Select,
  Text,
  TextInput,
  ToggleableContent,
  useForm,
  useModal,
} from "@andresjesse/bobber-ui";

import { z } from "zod";
import CommonUICard from "../components/cards/common-ui-card";
import DialogsModalsCard from "../components/cards/dialogs-modals-card";
import ScreenWrappersCard from "../components/cards/screen-wrappers-card";
import MainMenu from "../menus/main-menu";
import t from "../services/lang";

export default function Screen() {
  const modal = useModal();

  const form = useForm({
    initialValues: {
      email: "disabled@email.com",
      password: "",
      remember: false,
      domain: null,
    },
    validations: {
      email: z.email(t("Email inválido!")),
      password: z.string().min(6, t("Senha muito curta!")),
      remember: z
        .boolean()
        .refine((value) => value, t("Voce precisa marcar isto!")),
    },
    onSubmit: (values) => {
      console.log("Screen:", values);
    },
  });

  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Home" menu={<MainMenu />} />

      <ScreenWrappersCard />

      <CommonUICard />

      <DialogsModalsCard />

      <Card>
        <Card.Header title="Form Card" />

        <Form>
          <TextInput
            label="Email"
            {...form.getInputProps("email")}
            // disabled
          />

          <TextInput
            label="Password"
            secureTextEntry
            {...form.getInputProps("password")}
          />

          <Checkbox
            label="Remember me"
            {...form.getBooleanInputProps("remember")}
            // disabled
          />

          <Select
            data={["abc.com", "xyz.com", "asd.org"]}
            label="Domain"
            {...form.getSelectProps("domain")}
            defaultSelectedIndex={1}
            allowDeselect
            // disabled
          />

          <Button
            title="Submit"
            disabled={form.hasErrors}
            onPress={form.submit}
          />
        </Form>
      </Card>

      <Card>
        <Card.Header
          title="Headings Card"
          rightSection={<Badge color="red">Hot!</Badge>}
        />

        <Card.Divider />

        <Text h1 firstChild>
          Heading H1
        </Text>
        <Text textAlign="justify">
          [textAlign="justify"] Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Text>

        <ToggleableContent>
          <Text h2 firstChild>
            Heading H2
          </Text>
          <Text fontStyle="italic">
            [fontStyle="italic"] Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </Text>

          <Text h3>Heading H3</Text>
          <Text fontWeight="bold">
            [fontWeight="bold"] Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </Text>

          <Text h4>Heading H4</Text>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{ textTransform: "capitalize" }}>
            [customStyle with textTransform:"capitalize"] Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </Text>
        </ToggleableContent>
      </Card>
    </ScreenWrapper.Scrollable>
  );
}
