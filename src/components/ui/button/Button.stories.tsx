import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Click me",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const WithIcons: Story = {
  args: {
    variant: "primary",
    leftIcon: <ArrowRightIcon className="w-4 h-4" />,
    rightIcon: <ArrowRightIcon className="w-4 h-4" />,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
