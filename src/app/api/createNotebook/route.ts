//  /api/createNotebook

// import { generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    // check if user is authenticated
    const {userId} = auth();
    if(!userId){
        return new NextResponse('unauthorised , login or sign up to create a notebook', {status:401})
    }

    // user is  authenticated
    const body = await req.json();
    const {name} = body;

    // get the image description from openai


    // const image_description = await generateImagePrompt(name);
    // console.log(image_description);

    // return new NextResponse("Image description generated",{status:200})

    // get the image form dalle based on the name
}



// to check if user is authenticated or not

// export async function GET(req: Request) {
//     try {
//       // Check if user is authenticated
//       const { userId } = auth();
//       if (!userId) {
//         return new NextResponse("Unauthorized, login or sign up to access this resource", { status: 401 });
//       }
  
//       // User is authenticated
//       return new NextResponse("User is authenticated", { status: 200 });
//     } catch (error) {
//       console.error("Error checking authentication status:", error);
//       return new NextResponse("Internal Server Error", { status: 500 });
//     }
//   }