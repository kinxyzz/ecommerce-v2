import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const refreshTokenCookie = req.cookies.get("refreshToken")?.value;

  if (!refreshTokenCookie) {
    if (url.pathname === "/admin") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  try {
    const decoded = jwt.decode(refreshTokenCookie) as jwt.JwtPayload | null;

    if (!decoded || decoded.role !== "ADMIN") {
      if (url.pathname === "/admin") {
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
    }

    if (!decoded || decoded.role === "USER") {
      if (url.pathname === "/login" || url.pathname === "/register") {
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error decoding JWT:", error);
    if (url.pathname === "/admin") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin", "/login", "/register"],
};
