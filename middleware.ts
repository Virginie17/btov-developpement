import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Protéger uniquement les routes admin
    if (req.nextUrl.pathname.startsWith("/admin")) {
      // Vérifier l'authentification pour les routes admin
      if (!req.nextauth.token?.role) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
      }
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Définir explicitement les routes à protéger
export const config = {
  matcher: ["/admin/:path*"]
}
