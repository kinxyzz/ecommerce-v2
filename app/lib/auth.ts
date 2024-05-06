import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "next-auth";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "default_refresh_token_secret";

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 8);
}

export async function comparePasswords(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function createToken(user: {
  id: string;
}): Promise<{ accessToken: string; refreshToken: string }> {
  const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  await prisma.refreshToken.create({
    data: {
      hashedToken: refreshToken,
      userId: user.id,
    },
  });

  return { accessToken, refreshToken };
}

export async function verifyAccessToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}

export async function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
}

export async function getUserByCredentials(
  email: string,
  password: string
): Promise<User> {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }

  const validPassword = await comparePasswords(password, user.password);
  if (!validPassword) {
    throw new Error("Invalid password");
  }

  return { email: user.email, name: user.username, id: user.id };
}
