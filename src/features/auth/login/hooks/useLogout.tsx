import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useLogout = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    try {
      deleteCookie("accessToken", { path: "/" });
      sessionStorage.clear();
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, [router]);

  return { logout };
};
