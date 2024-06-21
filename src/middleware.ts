import { clerkMiddleware } from '@clerk/nextjs/server';

// Define the middleware
const middleware = clerkMiddleware();

// Export the middleware as default
export default middleware;

// Configure which routes the middleware should apply to
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
