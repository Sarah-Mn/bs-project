import {
  Field,
  Label,
  Description,
  Input as HeadlessInput,
} from "@headlessui/react";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      description,
      error,
      endAdornment,
      className,
      containerClassName,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || props.name;

    return (
      <div className={clsx("w-full", containerClassName)}>
        <Field className="space-y-1">
          {label && (
            <Label
              htmlFor={inputId}
              className="text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </Label>
          )}

          {description && !error && (
            <Description className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </Description>
          )}

          <div className="relative mt-1">
            <HeadlessInput
              ref={ref}
              id={inputId}
              className={clsx(
                "block w-full rounded-lg border px-3 py-2 text-sm transition",
                "bg-white dark:bg-white/5",
                "text-gray-900 dark:text-white",
                "border-gray-300 dark:border-white/10",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                endAdornment && "pr-10",
                error &&
                  "border-red-500 focus:ring-red-500 focus:border-red-500",
                className,
              )}
              {...props}
            />

            {endAdornment && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {endAdornment}
              </div>
            )}
          </div>

          {error && (
            <Description className="text-sm text-red-500">{error}</Description>
          )}
        </Field>
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
