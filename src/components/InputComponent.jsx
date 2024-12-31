"use client";

import {  Label, TextInput } from "flowbite-react";

export function InputComponent(...props) {
  const [label] = props;
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor={label.label}
            value= {label.label}
            className=" font-heading_secondary font-semibold"
          />
        </div>
        <TextInput id="email1" type="email" placeholder="John Dore" required />
      </div>
    </form>
  );
}
