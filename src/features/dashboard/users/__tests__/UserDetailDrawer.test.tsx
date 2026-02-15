import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserDetailDrawer } from "../components/UserDetailDrawer";
import { mockUser } from "./mockData";

describe("UserDetailDrawer", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not render when user is null", () => {
    render(<UserDetailDrawer user={null} onClose={mockOnClose} />);

    expect(screen.queryByTestId("user-detail-drawer")).not.toBeInTheDocument();
  });

  it("should render user details when user is provided", () => {
    render(<UserDetailDrawer user={mockUser} onClose={mockOnClose} />);

    // Check if drawer is rendered
    expect(screen.getByTestId("user-detail-drawer")).toBeInTheDocument();

    // Check full name
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    // Check contact information
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("+1 234 567 890")).toBeInTheDocument();

    // Check company information
    expect(screen.getByText("Acme Inc")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();

    // Check address
    expect(screen.getByText("New York, USA")).toBeInTheDocument();
  });

  it("should render all section headers", () => {
    render(<UserDetailDrawer user={mockUser} onClose={mockOnClose} />);

    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
  });

  it("should render dividers between sections", () => {
    render(<UserDetailDrawer user={mockUser} onClose={mockOnClose} />);

    // Should have 3 dividers (between sections)
    const dividers = screen.getAllByTestId("divider");
    expect(dividers).toHaveLength(3);
  });

  it("should call onClose when Escape key is pressed", async () => {
    render(<UserDetailDrawer user={mockUser} onClose={mockOnClose} />);

    await userEvent.keyboard("{Escape}");

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when backdrop is clicked", async () => {
    render(<UserDetailDrawer user={mockUser} onClose={mockOnClose} />);

    const backdrop = document.querySelector(".MuiBackdrop-root");
    await userEvent.click(backdrop!);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
