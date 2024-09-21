"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
// import { useFormStatus } from "react-dom";
// import { useFormState, useFormStatus } from "react-dom";
import { addNewItem } from "./list.action";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const AddNewList = ({}: Props) => {
  // const [state, formAction] = useFormState(addNewItem, null);
  // const { pending, data, action } = useFormStatus();

  // console.log("state", pending, data, action);

  return (
    <form className="flex gap-2" action={addNewItem}>
      <Input name="title" placeholder="Enter Name" />
      <Button variant="default" type="submit" value={"Add"}>
        Add
      </Button>
    </form>
  );
};
