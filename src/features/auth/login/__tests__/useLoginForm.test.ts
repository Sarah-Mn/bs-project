import { act, renderHook } from "@testing-library/react";
import { useLoginForm } from "../hooks/useLoginForm";
import { useRouter } from "next/router";
import { useLoginMutation } from "../services/login.mutations";
import { setCookie } from "cookies-next";

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock("cookies-next");
jest.mock("../services/login.mutations");

describe('useLoginForm', () => {
    const pushMock = jest.fn();
    const mutateMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        
        
        (useRouter as jest.Mock).mockReturnValue({
            push: pushMock,
        });

        
        (useLoginMutation as jest.Mock).mockReturnValue({
            mutate: mutateMock,
            isPending: false,
            error: null,
        });
    });

    it("should initialize with default values", () => {
        const { result } = renderHook(() => useLoginForm());

        expect(result.current.isPending).toBe(false);
        expect(result.current.showPassword).toBe(false);
        expect(result.current.serverError).toBeNull();
    });

    it("should update showPassword state", () => {
        const { result } = renderHook(() => useLoginForm());

        act(() => {
            result.current.setShowPassword(true);
        });

        expect(result.current.showPassword).toBe(true);
    });

    it("should set cookie and redirect on success", async () => {
        const fakeResponse = { accessToken: "fake-token" };

        
        mutateMock.mockImplementation((_data, options) => {
            options.onSuccess(fakeResponse);
        });

        const { result } = renderHook(() => useLoginForm());

        await act(async () => {
            await result.current.onSubmit({
                username: "test",
                password: "1234",
                rememberMe: false
            });
        });

        expect(mutateMock).toHaveBeenCalledWith(
            { username: "test", password: "1234" },
            expect.any(Object)
        );

        expect(setCookie).toHaveBeenCalledWith(
            "accessToken",
            "fake-token",
            expect.objectContaining({
                path: "/",
            })
        );

        expect(pushMock).toHaveBeenCalledWith("/dashboard");
    });

    it("should expose server error", () => {
        
        (useLoginMutation as jest.Mock).mockReturnValue({
            mutate: mutateMock,
            isPending: false,
            error: "Invalid credentials",
        });

        const { result } = renderHook(() => useLoginForm());

        expect(result.current.serverError).toBe("Invalid credentials");
    });
});