import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props={};

const DashboardPage = async (props:Props) => {
  const user = await currentUser();

  return (
    // Get user details
    // <div>
    //   <p>This is the Dashboard</p>
    //   {user ? (
    //     <div>Welcome user: <b>{user.fullName}</b></div>
    //   ) : (
    //     <div>Loading...</div>
    //   )}
    // </div>
    <>
    <div className="grainy min-h-screen ">
        <div className="max-w-7xl mx-auto p-5 ">
            <div className="h-10 mb-10"></div>
            <div className="flex justify-between items-center md:flex-row flex-col">
                <div className="flex items-center justicy-center">
                    <Link href={'/'}>
                        <Button className="bg-green-700/90" size={'sm'}>
                            <ArrowLeft className="mr-2  w-5 h-5" strokeWidth={3}/>
                            Back 
                        </Button>
                    </Link>

                    <div className="w-4"></div>
                    <div className="text-4xl font-bold text-gray-900">
                        My Notes
                    </div>
                    <div className="ml-4 flex justify-center items-center mt-2">
                        <UserButton/>
                    </div>
                   
                </div>
            </div>

            <div className="h-8"></div>

                    <Separator className="border-gray-300 border-2"/>
                    {/* list all the notes */ }
                    {/* todo conditionally rendered */}
                    <div className="flex items-center justify-center ">
                                <h2 className="text-xl text-gray-500 mt-4 font-semibold ">You have no notes yet</h2>
                    </div>
            

        </div>
    </div>
    </>
  );
};

export default DashboardPage;