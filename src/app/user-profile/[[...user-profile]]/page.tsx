"use client"
import { UserProfile } from "@clerk/nextjs";
import { PieChart } from 'react-minimal-pie-chart';
const UserProfilePage = () => (
    <div className="flex content-center w-full">
        <div className="p-12 m-4 w-full grid place-content-center">
            <h1 className="text-2xl text-center w-full text-stone-800 pb-2 mb-2 border-b-4 border-rose-600">Basic Account Info & Security</h1>
            <UserProfile path="/user-profile" routing="path"/> 
            <div className="text-lg font-semibold ml-7 mt-5">The Data is as Follows :</div> <PieChart className="h-40 mt-3"
  data={[
    { title: 'wrong', value: 10, color: '#E38627' },
    { title: 'correct', value: 15, color: '#C13C37' },
  ]}
/>;
            <h1 className="text-2xl text-center w-full text-stone-800 pb-2 m-8 border-b-4 border-rose-600">User Progress</h1>
        </div>
    
    </div>
);
 
export default UserProfilePage;