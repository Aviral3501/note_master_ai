//  /api/createNotebook

import { generateImagePrompt } from "@/lib/openai";
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
    const image_description = await generateImagePrompt(name);
    console.log(image_description);

    return new NextResponse("Image description generated",{status:200})

    // get the image form dalle based on the name
    


}