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
                            <h1 className="text-5xl p-1">{ch.name}</h1>
                            <p className="text-2xl p-1">Gender: {ch.gender} </p>
                            <p className="text-2xl p-1">Species: {ch.species} </p>
                            {ch.type && <p className="text-2xl p-1">Type: {ch.type} </p>}
                            <p className="text-2xl p-1">Origin: {ch.origin.name} </p>
                            <p className="text-2xl p-1">Location: {ch.location.name} </p>
                            <p className="text-2xl p-1">Status: {ch.status} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}