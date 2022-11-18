import React from 'react'
import { RiDeleteBin6Line, RiTeamFill } from 'react-icons/ri'
import {GrFavorite} from 'react-icons/gr'
import { useState, useEffect } from 'react'
import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";

function QuesModel({ question, postQus, setPostQus }) {

    const { data: session, status } = useSession();

    


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


    const postFavQuestion = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/favQuestions", {
            method: "Post",
            body: JSON.stringify({
                inputTitle: question.inputTitle,
                inputQuestion: question.inputQuestion,
                position: position[0]?.localisation,
                username: session.user.name,
                userImg: session.user.image,
                email: session.user.email,
                userId: session.user.id,
                createdAt: new Date().toString(),

            }),
            headers: {
                "Content-Type": "application/json",
            },


        })
        const responseData = await response.json();


        console.log(responseData);

        

    }










    return (
        <div>
            <div className='w-[700px] border rounded-xl bg-gray-300'>
                <div className="relative  ">
                    {/* <!-- box-1 --> */}
                    <div className="px-2  ">
                        <div className=" flex flex-row justify-between h-8 w-full rounded-t-lg border-b-2 border-slate-300 bg-slate-100 pl-[90px] shadow-lg">
                            <small className="my-auto flex  items-center text-xl font-semibold tracking-tight text-slate-700"><p className=' font-light '>Title:</p> {question.inputTitle}</small>
                            <small className="my-auto flex  items-center text-xl font-light tracking-tight text-slate-700"><p className=' font-semibold'>User:</p> {question.username}</small>
                            <button className=' hover:bg-red-400 rounded-full flex py-1 px-1 active:scale-90 transition duration-150  ' onClick={postFavQuestion}><GrFavorite size={22}/></button>
                        </div>
                        
                    </div>
                    
                    {/* <!-- box-2 --> */}
                    <div className="flex justify-between pr-2 h-12 w-full rounded-lg bg-white pl-[98px] shadow-xl">
                        <small className="my-auto w-44  font-medium text-slate-700 text-xl">{question.inputQuestion}</small>
                        <div className="flex items-center mt-4 text-gray-700">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                            </svg>
                            <h1 className="px-2 text-xs">{question.position}</h1>
                        </div>
                        
                    </div>
                    {/* <!-- circle --> */}
                    <div className="absolute top-2 left-6 h-16 w-16 rounded-full border-2 border-white shadow-md">
                        <img className="rounded-full  w-full h-full " src="question2.png" alt="" />
                    </div>

                    <div className="mb-4">

                        <label className="block text-grey-darker text-sm font-bold mb-2 text-white text-left  ">answer:</label>
                        <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                            name="inputanswer"  id="inputanswer" placeholder="whrite your answer" required />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default QuesModel