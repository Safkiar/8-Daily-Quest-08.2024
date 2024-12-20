import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { useUser } from "./useUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const isEmailRestricted = user.email === "user@example.com";

  function onSubmit({ password }) {
    if (!isEmailRestricted) {
      updateUser({ password }, { onSuccess: reset });
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New password (min 8 chars)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating || isEmailRestricted}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating || isEmailRestricted}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>

      {isEmailRestricted && (
        <FormRow>
          <p style={{ color: "red" }}>
            You cannot change the password for this email address.
          </p>
        </FormRow>
      )}

      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating || isEmailRestricted}>
          Update password
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
