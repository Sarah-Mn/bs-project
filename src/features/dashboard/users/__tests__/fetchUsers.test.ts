import { fetchUsers } from "../services/users.api";

describe("fetchUsers", () => {
  const mockResponse = {
    users: [{ id: 1, name: "John Doe" }],
    total: 1,
    page: 1,
    limit: 10,
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call fetch with correct query params", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    await fetchUsers(1, 10, "john");

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/users?page=1&limit=10&q=john"
    );
  });

  it("should return parsed JSON when response is ok", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchUsers(1, 10, "john");

    expect(result).toEqual(mockResponse);
  });

  it("should throw error when response is not ok", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchUsers(1, 10, "john")).rejects.toThrow(
      "Failed to load users"
    );
  });
});
