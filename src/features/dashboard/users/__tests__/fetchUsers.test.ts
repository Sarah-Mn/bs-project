import { http } from "@/lib/http";
import { UsersApiResponse } from "../types";
import { fetchUsers } from "../services/users.api";

jest.mock("@/lib/http", () => ({
  http: {
    get: jest.fn(),
  },
}));

describe("fetchUsers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch users with correct parameters", async () => {
    const mockResponse: UsersApiResponse = {
      users: [
        { id: 1, firstName: "John ", username:"john", birthDate: "1990-01-01", role: "admin", email: "john@example.com" },
        { id: 2, firstName: "Jane", username:"jane", birthDate: "1992-05-15", role: "user", email: "jane@example.com" },
      ],
      total: 2,
      skip: 1,
      limit: 10,
    };

    (http.get as jest.Mock).mockResolvedValueOnce({
      data: mockResponse,
    });

    const result = await fetchUsers(1, 10, "john");

   
    expect(http.get).toHaveBeenCalledTimes(1);
    expect(http.get).toHaveBeenCalledWith("/users?page=1&limit=10&q=john");
    expect(result).toEqual(mockResponse);
  });

  it("should handle empty query string", async () => {
    const mockResponse: UsersApiResponse = {
      users: [],
      total: 0,
      skip: 1,
      limit: 10,
    };

    (http.get as jest.Mock).mockResolvedValueOnce({
      data: mockResponse,
    });

    const result = await fetchUsers(1, 10, "");

    expect(http.get).toHaveBeenCalledWith("/users?page=1&limit=10&q=");
    expect(result).toEqual(mockResponse);
  });

  it("should handle special characters in query", async () => {
    const mockResponse: UsersApiResponse = {
      users: [],
      total: 0,
      skip: 1,
      limit: 10,
    };

    (http.get as jest.Mock).mockResolvedValueOnce({
      data: mockResponse,
    });

    const result = await fetchUsers(1, 10, "john@doe");

    expect(http.get).toHaveBeenCalledWith("/users?page=1&limit=10&q=john@doe");
    expect(result).toEqual(mockResponse);
  });

  it("should handle different page and limit values", async () => {
    const mockResponse: UsersApiResponse = {
      users: [],
      total: 0,
      skip: 2,
      limit: 20,
    };

    (http.get as jest.Mock).mockResolvedValueOnce({
      data: mockResponse,
    });

    const result = await fetchUsers(2, 20, "test");

    expect(http.get).toHaveBeenCalledWith("/users?page=2&limit=20&q=test");
    expect(result).toEqual(mockResponse);
  });

  it("should handle HTTP errors", async () => {
    const error = new Error("Network error");
    (http.get as jest.Mock).mockRejectedValueOnce(error);

    await expect(fetchUsers(1, 10, "test")).rejects.toThrow("Network error");
    expect(http.get).toHaveBeenCalledTimes(1);
  });

  it("should handle non-200 responses", async () => {
    (http.get as jest.Mock).mockRejectedValueOnce({
      response: {
        status: 404,
        data: { message: "Not found" },
      },
    });

    await expect(fetchUsers(1, 10, "test")).rejects.toEqual({
      response: {
        status: 404,
        data: { message: "Not found" },
      },
    });
  });

  
});