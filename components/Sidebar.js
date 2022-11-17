
import { useState, useEffect } from 'react'
import { signOut, useSession } from "next-auth/react";




function Sidebar() {

    const [position, setPosition] = useState([])
    console.log(position[0]?.localisation, "sssssssssssssssssssss")





    useEffect(() => {
        const fetchposition = async () => {
            const response = await fetch("/api/position?user=" + session.user.email, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const responseData = await response.json();
            setPosition(responseData);


        };

        fetchposition();
    }, []);

    


   

    









    const { data: session } = useSession();

    return (
        <div className="space-y-2 p-2 my-5 z-0 ">
            {/* Top */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-[500px]     my-3 bg-[#00d8ff] ">
                <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
                <div className="flex justify-center -mt-8">
                    <img src={session?.user?.image} className="rounded-full border-solid border-white border-2 -mt-3 w-32" />
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-black text-sm bold font-sans">Welcome,  {session?.user?.name}</h3>
                    <p className="mt-2 font-sans font-light text-black">Hello, Be ready to create your team!</p>
                </div>
                <div className=" px-6">
                    
                    <div className="flex items-center mt-4 text-gray-700">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                        </svg>
                        <h1 className="px-2 text-sm">{position[0]?.localisation}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                        </svg>
                        <h1 className="px-2 text-sm">{session?.user?.email}</h1>
                    </div>
                </div>
            </div>






            
            

            


        </div>
    );
}

export default Sidebar;