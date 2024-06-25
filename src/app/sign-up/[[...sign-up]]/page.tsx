import { SignUp, useUser } from "@clerk/nextjs";

export default function Page() {
   return (
    <div className="min-h-screen justify-center items-center flex min-w-full">
        <h1>Sign Up</h1>
        <SignUp />
    </div>
   )
}
