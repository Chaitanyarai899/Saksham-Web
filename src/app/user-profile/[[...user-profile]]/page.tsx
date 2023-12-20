import { UserProfile } from "@clerk/nextjs";
 
const UserProfilePage = () => (
    <div className="flex content-center w-full">
        <div className="p-12 m-4 w-full grid place-content-center">
            <h1 className="text-2xl text-center w-full text-stone-800 pb-2 mb-2 border-b-4 border-rose-600">Basic Account Info & Security</h1>
            <UserProfile path="/user-profile" routing="path"/> 
            <h1 className="text-2xl text-center w-full text-stone-800 pb-2 m-8 border-b-4 border-rose-600">User Progress</h1>
        </div>
    </div>
);
 
export default UserProfilePage;