import { useEffect, useState } from "react";
import z from "zod";

type UseFormProps = {
  initialValues: Record<string, any>;
  validations?: Record<string, z.ZodType>;
  onSubmit: (values: Record<string, any>) => void;
};

export function useForm({
  initialValues,
  validations = {},
  onSubmit,
}: UseFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  useEffect(() => {
    let initialValidatedFields: Record<string, string[]> = {};

    // pre-validate initialValues (avoids a correct initial form to be detected as isNotFullyValidated)
    for (const [key, value] of Object.entries(initialValues)) {
      if (validations[key]) {
        const result = validations[key].safeParse(value);

        if (result.success) {
          initialValidatedFields[key] = [];
        }
      }
    }

    setErrors((prev) => ({ ...prev, ...initialValidatedFields }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFieldValue = (key: string, value: any) => {
    if (validations[key]) {
      const result = validations[key].safeParse(value);

      setErrors((prev) => ({
        ...prev,
        [key]: result.success
          ? []
          : result.error.issues.map((issue) => issue.message),
      }));
    }

    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getInputProps = (name: string) => {
    if (!(name in initialValues)) {
      throw new Error(`Field "${name}" not found in initialValues`);
    }

    return {
      value: values[name],
      onChangeText: (value: string) => setFieldValue(name, value),
      errors: errors[name],
    };
  };

  const getBooleanInputProps = (name: string) => {
    if (!(name in initialValues)) {
      throw new Error(`Field "${name}" not found in initialValues`);
    }

    return {
      checked: values[name],
      onChange: (value: boolean) => setFieldValue(name, value),
      errors: errors[name],
    };
  };

  const getSelectProps = (name: string) => {
    if (!(name in initialValues)) {
      throw new Error(`Field "${name}" not found in initialValues`);
    }

    return {
      selected: values[name],
      onChange: (value: any) => setFieldValue(name, value),
      errors: errors[name],
    };
  };

  const isNotFullyValidated =
    // Object.keys(errors).length !== Object.keys(validations).length;
    Object.keys(errors).length !== Object.keys(validations).length;

  const someFieldHasError = Object.values(errors).some(
    (error) => error.length > 0
  );

  return {
    getInputProps,
    getBooleanInputProps,
    getSelectProps,
    hasErrors: isNotFullyValidated || someFieldHasError,
    submit: () => onSubmit(values),
    reset: () => {
      setValues(initialValues);
      setErrors({});
    },
  };
}
