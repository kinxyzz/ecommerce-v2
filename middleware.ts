import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const refreshTokenCookie = req.cookies.get("refreshToken")?.value;
  console.log("this is your refreshtoken" + refreshTokenCookie);

  if (!refreshTokenCookie) {
    if (url.pathname === "/admin") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  const refreshToken = refreshTokenCookie;

  try {
    const decoded = jwt.decode(refreshToken) as jwt.JwtPayload | null;

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
