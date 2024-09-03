import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";
import { AUTH_TOKEN } from "@/constants";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const signinWithGithub = async () => {
    setIsAuthenticated(true);
    setCookie(AUTH_TOKEN, "true", { maxAge: 3600 });
    router.push("/dashboard");
  };

  const isLoggedIn = () => {
    const authStatus = getCookie(AUTH_TOKEN);
    return authStatus === "true";
  };

  // useEffect(() => {
  //   const authStatus = isLoggedIn();
  //   if (authStatus) {
  //     setIsAuthenticated(true);
  //     router.push("/dashboard");
  //   } else if (router.pathname !== "/") {
  //     router.push("/");
  //   }
  // }, [router]);

  return { isAuthenticated, signinWithGithub, isLoggedIn };
};
