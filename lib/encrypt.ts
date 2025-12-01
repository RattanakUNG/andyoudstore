import { randomBytes, scryptSync } from "crypto";

export async function hash(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const hashed = scryptSync(password, salt, 32).toString("hex");
  return `${salt}:${hashed}`;
}

export async function verify(password: string, hash: string): Promise<boolean> {
  const [salt, key] = hash.split(":");
  const keyBuffer = Buffer.from(key, "hex");
  const derivedKey = scryptSync(password, salt, 32);
  return keyBuffer.equals(derivedKey);
}
