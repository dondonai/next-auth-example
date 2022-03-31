import { DefaultUser } from "next-auth"
import "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth" {
  interface Session {
    idToken?: string
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
    idToken?: string
    user?: DefaultUser & User
  }

  interface User {
    name?: string | null
    createdAt?: Date
    lastLoggedIn?: Date
  }
}
