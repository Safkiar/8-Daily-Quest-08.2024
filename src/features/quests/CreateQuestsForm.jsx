import { useForm } from "react-hook-form";
import { useCreateQuest } from "./useCreateQuest";
import { useEditQuest } from "./useEditQuest";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useUser } from "../authentication/useUser";
import { useState, useEffect } from "react";

function CreateQuestsForm({ questToEdit = {}, onCloseModal }) {
  const { isCreating, createQuest } = useCreateQuest();
  const { isEditing, editQuest } = useEditQuest();
  const { user } = useUser();
  const isWorking = isCreating || isEditing;
  const today = new Date().toISOString().split("T")[0];
  const [isEverydayChecked, setIsEverydayChecked] = useState(false);
  const { id: editId, ...editValues } = questToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, setValue, formState, getValues } =
    useForm({
      defaultValues: {
        ...editValues,
        everyday: editValues.everyday || false,
        monday: editValues.monday || false,
        tuesday: editValues.tuesday || false,
        wednesday: editValues.wednesday || false,
        thursday: editValues.thursday || false,
        friday: editValues.friday || false,
        saturday: editValues.saturday || false,
        sunday: editValues.sunday || false,
      },
    });
  const { errors } = formState;

  useEffect(() => {
    setIsEverydayChecked(getValues("everyday"));
  }, [getValues, isEditSession]);

  const handleEverydayChange = (e) => {
    const isChecked = e.target.checked;
    setIsEverydayChecked(isChecked);
    setValue("everyday", isChecked);
    if (isChecked) {
      // Uncheck and disable other days
      setValue("monday", false);
      setValue("tuesday", false);
      setValue("wednesday", false);
      setValue("thursday", false);
      setValue("friday", false);
      setValue("saturday", false);
      setValue("sunday", false);
    }
  };

  function onSubmit(data) {
    console.log("Form Data: ", data);
    if (isEditSession)
      editQuest(
        { newQuestData: { ...data }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createQuest(
        {
          ...data,
          everyday: data.everyday === true,
          monday: !isEverydayChecked && data.monday === true,
          tuesday: !isEverydayChecked && data.tuesday === true,
          wednesday: !isEverydayChecked && data.wednesday === true,
          thursday: !isEverydayChecked && data.thursday === true,
          friday: !isEverydayChecked && data.friday === true,
          saturday: !isEverydayChecked && data.saturday === true,
          sunday: !isEverydayChecked && data.sunday === true,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <Input
        type="hidden"
        id="nr"
        value={user.email}
        {...register("nr", {
          required: "This field is required",
        })}
      />

      {!isEditSession && (
        <Input
          type="hidden"
          id="id"
          value={Math.floor(Math.random() * 1000000).toString()}
          {...register("id", {
            required: "This field is required",
          })}
        />
      )}

      {!isEditSession && (
        <Input
          type="hidden"
          id="id2"
          value={Math.floor(Math.random() * 1000000).toString()}
          {...register("id2", {
            required: "This field is required",
          })}
        />
      )}

      {!isEditSession && (
        <Input
          type="hidden"
          id="show"
          value={true}
          {...register("show", {
            required: "This field is required",
          })}
        />
      )}

      <FormRow label="Task name" error={errors?.name?.message}>
        <Input
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
            maxLength: {
              value: 16,
              message: "Maxiumum of 16 characters",
            },
          })}
        />
      </FormRow>
      <FormRow label="Additional info" error={errors?.info?.message}>
        <Textarea
          id="info"
          disabled={isWorking}
          {...register("info", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Deadline" error={errors?.date?.message}>
        <Input
          type="date"
          id="date"
          disabled={isWorking}
          min={today} // Set the minimum allowable date to today
          {...register("date", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Time of Event" error={errors?.eventTime?.message}>
        <Input
          type="time"
          id="time"
          disabled={isWorking}
          {...register("time", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Everyday" error={errors?.everyday?.message}>
        <Input
          type="checkbox"
          id="everyday"
          disabled={isWorking}
          {...register("everyday")}
          checked={isEverydayChecked}
          onChange={handleEverydayChange}
        />
      </FormRow>
      <FormRow label="Every Monday" error={errors?.monday?.message}>
        <Input
          type="checkbox"
          id="monday"
          disabled={isWorking || isEverydayChecked}
          {...register("monday")}
        />
      </FormRow>
      <FormRow label="Every Tuesday" error={errors?.tuesday?.message}>
        <Input
          type="checkbox"
          id="tuesday"
          disabled={isWorking || isEverydayChecked}
          {...register("tuesday")}
        />
      </FormRow>
      <FormRow label="Every Wednesday" error={errors?.wednesday?.message}>
        <Input
          type="checkbox"
          id="wednesday"
          disabled={isWorking || isEverydayChecked}
          {...register("wednesday")}
        />
      </FormRow>
      <FormRow label="Every Thursday" error={errors?.thursday?.message}>
        <Input
          type="checkbox"
          id="thursday"
          disabled={isWorking || isEverydayChecked}
          {...register("thursday")}
        />
      </FormRow>
      <FormRow label="Every Friday" error={errors?.friday?.message}>
        <Input
          type="checkbox"
          id="friday"
          disabled={isWorking || isEverydayChecked}
          {...register("friday")}
        />
      </FormRow>
      <FormRow label="Every Saturday" error={errors?.saturday?.message}>
        <Input
          type="checkbox"
          id="saturday"
          disabled={isWorking || isEverydayChecked}
          {...register("saturday")}
        />
      </FormRow>
      <FormRow label="Every Sunday" error={errors?.sunday?.message}>
        <Input
          type="checkbox"
          id="sunday"
          disabled={isWorking || isEverydayChecked}
          {...register("sunday")}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          // onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit Quest" : "Add new Quest"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateQuestsForm;
