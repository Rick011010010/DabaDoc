import React from 'react'
import { RiDeleteBin6Line, RiTeamFill } from 'react-icons/ri'

function QuesModel({question}) {

    const deletequestion = async () => {

        const response = await fetch(`/api/questions/${question._id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

    }







    return (
        <div>
            <div>
                <div className="relative">
                    {/* <!-- box-1 --> */}
                    <div className="px-2">
                        <div className="flex h-8 w-full rounded-t-lg border-b-2 border-slate-300 bg-slate-100 pl-[90px] shadow-lg">
                            <small className="my-auto flex  items-center text-xs font-light tracking-tight text-slate-700">{question.inputTitle}</small>
                        </div>
                    </div>
                    {/* <!-- box-2 --> */}
                    <div className="flex justify-between pr-2 h-12 w-full rounded-lg bg-white pl-[98px] shadow-xl">
                        <small className="my-auto  font-medium text-slate-700 text-xl">{question.inputQuestion}</small>
                        <p className=" text-black pt-2 text-xl ">Age:{player.inputAge}</p>
                        <button className='ml-[10%] hover:bg-gray-400 rounded-2xl ' onClick={deletequestion}><RiDeleteBin6Line color='black' size={20} /></button>
                    </div>
                    {/* <!-- circle --> */}

                </div>
            </div>
        </div>
    )
}

export default QuesModel