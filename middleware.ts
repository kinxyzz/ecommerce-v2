// middleware.js
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookies = request.cookies.getAll();
  console.log(cookies);
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/login"],
};
