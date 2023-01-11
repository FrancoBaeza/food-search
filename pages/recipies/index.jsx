import { useState } from "react"

const Recipies = () => {
    const [selector, setSelector] = useState(0)
    return (
        <div className="py-8 w-full flex flex-col justify-center items-center bg-slate-600 text-slate-200">
            <h1 className="sm:text-3xl text-xl font-bold text-center">WHAT ARE YOU LOOKING FOR?</h1>
            <p className="text-center text-base mt-2 font-medium text-slate-200">For what do you want to search?</p>
            <div className="flex flex-row gap-10 mt-5">
                <button onClick={() => setSelector(0)} className={`${selector === 0 ? 'bg-selected_green' : 'bg-primary_green'} sm:py-3 py-2 sm:w-40 w-32 sm:text-base text-xs font-semibold cursor-pointer hover:bg-selected_green shadow-lg`}>By name</button>
                <button onClick={() => setSelector(1)} className={`${selector === 1 ? 'bg-selected_green' : 'bg-primary_green'} sm:py-3 py-2 sm:w-40 w-32 sm:text-base text-xs font-semibold cursor-pointer hover:bg-selected_green shadow-lg`}>By ingredients</button>
            </div>
            <div className="mt-5">
                <input className="sm:w-[600px] w-[350px] border-none sm:rounded-md rounded-sm text-slate-600" type="text" />
            </div>
        </div>
    )
}

export default Recipies