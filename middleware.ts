// middleware.js
import axios from "axios";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { serverUrl } from "./lib/static";
import { useTokenStore } from "./store/authenticated/store";

export async function middleware(request: NextRequest) {
  const { token, setToken } = useTokenStore.getState();

  if (token) {
    const decodedToken: JwtPayload = jwt.decode(token) as JwtPayload;
    console.log(token);
    const currentTime = Date.now() / 1000;
    if (!decodedToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (decodedToken.exp! < currentTime) {
      try {
        const response = await axios.get(`${serverUrl}/api/user/token`, {
          withCredentials: true,
        });
        setToken(response.data.data.token);
      } catch (error) {
        console.error("Error refreshing token:", error);
        setToken(null);
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
