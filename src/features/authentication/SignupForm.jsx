import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowLogin from "../../ui/FormRowLogin";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import Heading from "../../ui/Heading";
import RegisterLink from "../../ui/Login/RegisterLink";

// Email regex: /\S+@\S+\.\S+/

function SignupForm({ action, loginLink }) {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form typeB="typeB" onSubmit={handleSubmit(onSubmit)} action={action}>
      <Heading as="h4">Create an account</Heading>

      <FormRowLogin label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRowLogin>

      <FormRowLogin label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowLogin>

      <FormRowLogin
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowLogin>

      <FormRowLogin
        label="Repeat password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRowLogin>

      <FormRowLogin>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRowLogin>
      <RegisterLink loginLink={loginLink} />
    </Form>
  );
}

export default SignupForm;
