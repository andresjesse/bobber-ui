import {
  Button,
  Card,
  Checkbox,
  Form,
  Header,
  ScreenWrapper,
  Select,
  TextInput,
  useForm,
} from "@andresjesse/bobber-ui";
import z from "zod";
import t from "../../services/lang";

export default function Screen() {
  const form = useForm({
    initialValues: {
      email: "disabled@email.com",
      password: "",
      remember: false,
      domain: null,
    },
    validations: {
      email: z.email(t("Invalid Email!")),
      password: z.string().min(6, t("Password is too short!")),
      remember: z
        .boolean()
        .refine((value) => value, t("You need to check this!")),
    },
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <ScreenWrapper.Scrollable>
      <Header.Default title="Form" />

      <Card>
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
    </ScreenWrapper.Scrollable>
  );
}
