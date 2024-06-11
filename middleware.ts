import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-middleware-cache", "no-store");
  const url = req.nextUrl.clone();
  const refreshTokenCookie = req.cookies?.get("refreshToken")?.value;

  console.log("This is your refreshToken: " + refreshTokenCookie);
  try {
    if (!refreshTokenCookie) {
      if (url.pathname === "/admin") {
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
      return response;
    }

    const decoded = jwt.decode(refreshTokenCookie) as jwt.JwtPayload | null;

    if (!decoded || decoded.role !== "ADMIN") {
      const protectedUrls = ["/admin", "/login", "/register"];
      if (protectedUrls.includes(url.pathname)) {
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
    }

    if (decoded && decoded.role === "USER") {
      if (url.pathname === "/login" || url.pathname === "/register") {
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
    }

    return response;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    if (url.pathname === "/admin") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    return response;
  }
}

export const config = {
  matcher: ["/admin", "/login", "/register"],
};
