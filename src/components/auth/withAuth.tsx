import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function withAuth<T extends object>(Component: React.ComponentType<T>) {
  const ProtectedComponent = (props: T) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace("/auth/login");
      }
    }, [router]);

    if (!isAuthenticated()) return null;

    return <Component {...props} />;
  };

  return ProtectedComponent;
}
