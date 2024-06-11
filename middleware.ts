import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const refreshTokenCookie = req.cookies.get("refreshToken")?.value;
  console.log("This is your refreshToken: " + refreshTokenCookie);
}

export const config = {
  matcher: ["/admin", "/login", "/register"],
};
