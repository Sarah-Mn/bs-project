import { fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "../components/LoginForm";
import { useLoginForm } from "../hooks/useLoginForm";
import { SubmitHandler } from "react-hook-form";
import { LoginFormInputs } from "../types";
import userEvent from "@testing-library/user-event";

jest.mock("../hooks/useLoginForm.tsx");

const mockUseLoginForm = useLoginForm as jest.Mock;

const defaultMock = {
  register: jest.fn(() => ({})),
  handleSubmit: (fn: SubmitHandler<LoginFormInputs>) => (e: FormDataEvent) => {
    e.preventDefault();
    fn({ username: "test", password: "12345678" });
  },
  onSubmit: jest.fn(),
  errors: {},
  showPassword: false,
  setShowPassword: jest.fn(),
  isPending: false,
  serverError: null as null | string,
};

const setup = (mock: typeof defaultMock) => {
  mockUseLoginForm.mockReturnValue(mock);

  render(<LoginForm />);
};

describe("Login From", () => {
  it("renders username and password inputs", () => {
    setup(defaultMock);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("calls setShowPassword when visibility button is clicked", async () => {
    setup(defaultMock);

    const toggleButton = screen.getAllByRole("button")[0];
    await userEvent.click(toggleButton);

    expect(defaultMock.setShowPassword).toHaveBeenCalled();
  });

  it("shows server error message when serverError exists", () => {
    setup({
      ...defaultMock,
      serverError: "error",
    });

    expect(
      screen.getByText(/login failed\. please try again\./i),
    ).toBeInTheDocument();
  });

  it("disables submit button when isPending is true", () => {
    setup({
      ...defaultMock,
      isPending: true,
    });

    const button = screen.getByTestId("login-form-submit-btn");
    expect(button).toBeDisabled();
  });

  it("shows loading spinner when isPending is true", () => {
    setup({
      ...defaultMock,
      isPending: true,
    });

    expect(screen.queryByText("Login")).not.toBeInTheDocument();
  });

  it("calls onSubmit when form is submitted", async () => {
    const onSubmitMock = jest.fn();

    setup({
      ...defaultMock,
      onSubmit: onSubmitMock,
    });

    const form = screen.getByTestId("login-form-submit-btn");
    await userEvent.click(form);

    expect(onSubmitMock).toHaveBeenCalled();
  });
});
