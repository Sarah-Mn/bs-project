import { render, screen } from "@testing-library/react";
import { UserSearch } from "../components/UserSearch";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("User Search", () => {
  const mockOnChange = jest.fn();

  const setup = (value = "") => {
    render(<UserSearch value={value} onChange={mockOnChange} />);

    return {
      input: screen.getByTestId("user-search"),
    };
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component", () => {
    const { input } = setup("jack");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("jack");
  });

  it("calls onChange with typed value", async () => {
    const { input } = setup();

    await userEvent.type(input, "emily");

    expect(mockOnChange).toHaveBeenCalledTimes(5);
  });

  it("updates value when input changes", async () => {
    const Wrapper = () => {
      const [value, setValue] = React.useState("");
      return <UserSearch value={value} onChange={setValue} />;
    };

    render(<Wrapper />);
    const input = screen.getByPlaceholderText("Search users...");

    await userEvent.type(input, "emily");

    expect(input).toHaveValue("emily");
  });
});
