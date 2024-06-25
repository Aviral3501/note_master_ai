import {  currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
    const user = await currentUser();
    return(
    <div>
        <p>This is Dashboard</p>
        <div>Welcome user :<b> {user?.fullName}</b></div>
    </div>
    )
}



