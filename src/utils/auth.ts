export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;

  return Boolean(
    document.cookie.includes("AccessToken=") ||
    localStorage.getItem("AccessToken")
  );
}
