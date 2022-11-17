import React from 'react'
import { useState, useEffect } from 'react'
import QuesModel from './QuesModel'

function Questions() {

    const [inputTitle, setinputTitle] = useState('')

    const inputTitleHandler = (e) => {

        setinputTitle(e.target.value)
    }


    const [inputQuestion, setInputQuestion] = useState('')

    const inputQustionHandler = (e) => {

        setInputQuestion(e.target.value)
    }


    const [questions, setQuestions] = useState([])




    const addPlayerDb = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/questions", {
            method: "Post",
            body: JSON.stringify({
                inputTitle: inputTitle,
                inputQuestion: inputQuestion,
                username: session.user.name,
                email: session.user.email,
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
    }, []);





    return (
        <div className=' h-screen'>
            <div className=" py-4 px-8 text-xl font-bold border-b border-grey-500 text-white w-[50%] mx-[25%]  ">Ask Question
            </div>

            <form name="Player Information" id="Player Information" action="">
                <div className="py-10 px-8 w-[50%] mx-[25%]">

                    <div className="mb-4">

                        <label className="block text-grey-darker text-sm font-bold mb-2">Title:</label>
                        <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                            name="Player Name" value={inputTitle} id="Player Name" placeholder="Enter Title" onChange={inputTitleHandler} required />

                    </div>


                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2">Question</label>
                        <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="number" maxLength="2"
                            name="Player Age" id="Player Age" value={inputQuestion} placeholder="Enter Question" onChange={inputQustionHandler} required />

                    </div>


                    <div className="">
                        <button
                            className="mb-2 mx-10 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 " onClick={addPlayerDb}>
                            Post
                        </button>
                    </div>
                </div>
            </form>


            <div className="text-center">
                <ul className=" flex flex-col gap-3">
                  {questions.map((question) => (

                            <QuesModel question={question} key={question._id}  />

                        ))}
                        
                    







                </ul>

            </div>








        </div>
    )
}

export default Questions