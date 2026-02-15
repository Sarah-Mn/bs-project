import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserDetailDrawer } from "../components/UserDetailDrawer";
import { User } from "../types";

describe("UserDetailDrawer", () => {
  const mockOnClose = jest.fn();

  const mockUser: User = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    maidenName: "Smith",
    age: 30,
    gender: "male",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    username: "johndoe",
    birthDate: "1990-01-01",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bloodGroup: "A+",
    height: 180,
    weight: 75,
    eyeColor: "brown",
    hair: {
      color: "black",
      type: "straight",
    },
    address: {
      address: "123 Main St",
      city: "New York",
      state: "NY",
      stateCode: "NY",
      postalCode: "10001",
      country: "USA",
      coordinates: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
    university: "Example University",
    bank: {
      cardExpire: "12/25",
      cardNumber: "1234 5678 9012 3456",
      cardType: "Visa",
      currency: "USD",
      iban: "US00 1234 5678 9012 3456 78",
    },
    company: {
      name: "Acme Inc",
      title: "Software Engineer",
      department: "Engineering",
      address: {
        address: "123 Main St",
        city: "New York",
        state: "NY",
        stateCode: "NY",
        postalCode: "10001",
        country: "USA",
        coordinates: {
          lat: 40.7128,
          lng: -74.006,
        },
      },
    },
    crypto: {
      coin: "Bitcoin",
      wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      network: "Bitcoin",
    },
    role: "admin",
  };

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
