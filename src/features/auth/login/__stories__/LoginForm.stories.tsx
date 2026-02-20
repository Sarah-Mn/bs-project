import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import { LoginForm } from "../components/LoginForm";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// create a test QueryClient with retries disabled for faster testing
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

// a helper function to create a mock hook with default values and allow overrides
const createMockHook = (overrides = {}) => {
  const mockSetShowPassword = fn();

  return {
    register: fn().mockImplementation((name) => ({
      name,
      onChange: fn(),
      onBlur: fn(),
      ref: fn(),
    })),
    handleSubmit: fn().mockImplementation((cb) => (e: FormDataEvent) => {
      e?.preventDefault?.();
      cb({ username: "test", password: "password" });
    }),
    onSubmit: fn(),
    errors: {},
    showPassword: false,
    setShowPassword: mockSetShowPassword,
    isPending: false,
    serverError: null,
    ...overrides,
  };
};

// define the meta for the LoginForm stories
const meta = {
  title: "Features/Auth/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const queryClient = createTestQueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <div className="p-4 max-w-md w-full">
            <Story />
          </div>
        </QueryClientProvider>
      );
    },
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// define the different stories for the LoginForm component
export const Default: Story = {
  args: {
    useLoginFormHook: () => createMockHook(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const usernameInput = canvas.getByPlaceholderText("example: emilys");
    const passwordInput = canvas.getByPlaceholderText("example: emilyspass");
    const submitBtn = canvas.getByTestId("login-form-submit-btn");

    await userEvent.type(usernameInput, "emily");
    await userEvent.type(passwordInput, "password123");

    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(submitBtn).toBeInTheDocument();
    });
  },
};

export const WithErrors: Story = {
  args: {
    useLoginFormHook: () =>
      createMockHook({
        errors: {
          username: { message: "username is required" },
          password: { message: "Password must be at least 8 characters" },
        },
      }),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("username is required")).toBeInTheDocument();

    expect(
      canvas.getByText("Password must be at least 8 characters"),
    ).toBeInTheDocument();
  },
};

export const Pending: Story = {
  args: {
    useLoginFormHook: () => createMockHook({ isPending: true }),
  },
};

export const WithServerError: Story = {
  args: {
    useLoginFormHook: () =>
      createMockHook({
        serverError: "Login failed. Please try again.",
      }),
  },
};
