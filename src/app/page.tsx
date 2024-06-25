import TypeWriterTitle from "@/components/ui/TypeWriterTitle";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100 grainy">
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
              <h1 className="font-semibold text-7xl text-center">
                AI <span className="text-green-700 font-bold">{' '}note taking</span>{' '} assistant
              </h1>
              <div className="mt-4">
                <h2 className="font-semibold text-3xl text-center text-slate-700">
                  AI Powered,{' '}<span className="text-slate-500"> boost your productivity by</span>{' '} <b>10X</b>  
                </h2>
                <div className="text-3xl text-center font-bold text-slate-600 mt-6">
                <TypeWriterTitle/>
                </div>

                <div className="mt-8 flex justify-center items-center">
                <Link href={'/dashboeard'}>
                    <Button className="bg-green-700/90">Get Started 
                    <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3}/>
                    </Button>
                </Link>
                </div>
                

              </div>
             
        </div>
    </div>
  );
}
