import React from 'react'
import { useState, useEffect } from 'react'
import QuesModel from './QuesModel'
import MapLocation from './MapLocation'
import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";

function Questions() {

    const { data: session, status } = useSession();

    const [inputTitle, setinputTitle] = useState('')

    const [location, setLocation] = useState(false)

    const [postQus, setPostQus] = useState(false)

    const locationHandler = () => {
        setLocation(!location)
    }

    const inputTitleHandler = (e) => {

        setinputTitle(e.target.value)
    }


    const [inputQuestion, setInputQuestion] = useState('')

    const inputQustionHandler = (e) => {

        setInputQuestion(e.target.value)
    }


    const [questions, setQuestions] = useState([])




    const postQuestion = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/questions", {
            method: "Post",
            body: JSON.stringify({
                inputTitle: inputTitle,
                inputQuestion: inputQuestion,
                position: position[0]?.localisation,
                username: session.user.name,
                userImg: session.user.image,
                userId: session.user.id,
                createdAt: new Date().toString(),

            }),
            headers: {
                "Content-Type": "application/json",
            },


        })
        const responseData = await response.json();


        console.log(responseData);

        setinputTitle("");
        setInputQuestion("");
        setPostQus(!postQus)

    }


    useEffect(() => {
        const fetchQuestion = async () => {
            const response = await fetch("/api/questions", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const responseData = await response.json();
            setQuestions(responseData);


        };

        fetchQuestion();
    }, [postQus]);

    const [position, setPosition] = useState([])


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





    return (
        <div className=' h-screen bg-[#000300]  '>

            <div className=" py-4 px-8 text-xl font-bold border-b border-grey-500 text-white w-[50%] mx-[25%]  ">Ask Question
            </div>

            <form name="questions form" id="questions form" action="">
                <div className="py-10 px-8 md:w-[50%] md:mx-[25%] w-[100%]">

                    <div className="mb-4">

                        <label className="block text-grey-darker text-sm font-bold mb-2">Title:</label>
                        <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                            name="inputTitle" value={inputTitle} id="inputTitle" placeholder="Enter Title" onChange={inputTitleHandler} required />

                    </div>


                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2">Question</label>
                        <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text" maxLength="100"
                            name="inputQuestion" id="inputQuestion" value={inputQuestion} placeholder="Enter Question" onChange={inputQustionHandler} required />

                    </div>





                    <div className=" flex flex-col md:flex-row md:justify-between justify-center relative ">
                        <button
                            className=" rounded-full py-1 px-16 md:px-24 bg-gradient-to-r from-green-400 to-blue-500 active:scale-90 transition duration-150  " onClick={postQuestion}>
                            Post
                        </button>
                        <div className="">
                            <button
                                className=" rounded-full py-1 px-16 md:px-24 bg-green-400 active:scale-90 transition duration-150   " onClick={locationHandler}>
                                Add Your Location
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <div className=' md:flex md:gap-2 grid grid-cols-1 bg-[#000300] '>
                <div className="text-center overflow-auto md:h-[600px]">
                    <ul className=" flex flex-col gap-3">
                        {questions.map((question) => (

                            <QuesModel question={question} key={question._id} postQus={postQus} setPostQus={setPostQus} />

                        ))}











                    </ul>

                </div>

                <div className={location ? " md:w-[50%] w-[100%] h-[400px]  border text-left rounded-2xl py-5 px-8 my-60 md:my-5 relative" : 'hidden'}>

                    <MapLocation />
                </div>

            </div>










        </div>
    )
}

export default Questions