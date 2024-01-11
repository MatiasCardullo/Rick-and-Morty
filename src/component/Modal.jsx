/* eslint-disable react/prop-types */

export default function Modal({ ch, setCh }) {

    console.log(ch)
    return (
        <>
            <div className="h-screen w-screen absolute bg-slate-600 z-20 opacity-75">

            </div>
            <div className="h-screen w-screen absolute z-30  flex items-center justify-center border-solid border-2 border-black">
                <div className="w-1/2 bg-white rounded-full">
                    <button className="bg-red-500 object-right-bottom" onClick={() => setCh(null)}> X </button>
                    <div className="flex justify-center items-center grid-cols-2 pb-7">
                        <img className="rounded-lg" src={ch.image} alt={ch.name} />
                        <div className="text-black list-none p-10">
                            <h1>{ch.name}</h1>
                            <p>{ch.type} </p>
                            <p>{ch.gender} </p>
                            <p>{ch.species} </p>
                            <p>{ch.origin.name} </p>
                            <p>{ch.location.name} </p>
                            <p>{ch.status} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}