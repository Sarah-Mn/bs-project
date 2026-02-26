import { CookieValueTypes, deleteCookie, getCookie, setCookie } from "cookies-next";

let accessToken: CookieValueTypes | Promise<CookieValueTypes> | null = null;


export const getAccessToken = () => accessToken;

export const setAccessToken = (token:string) => {
    setCookie("accessToken", token );
   accessToken =token;
};

export const clearAccessToken = () => {
    deleteCookie("accessToken");
};