import { useState } from "react";

export default function Modal() {
    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="h-screen w-screen absolute bg-slate-600 z-20 opacity-75">

            </div>
            <div className="h-screen w-screen absolute z-30  flex items-center justify-center">
                <div className="w-1/2 bg-white rounded-xl">
                    <button className="bg-red-500 object-right-bottom" onClick={toggleModal}>
                        CLOSE
                    </button>
                    <h2>Hello Modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                        perferendis suscipit officia recusandae, eveniet quaerat assumenda
                        id fugit, dignissimos maxime non natus placeat illo iusto!
                        Sapiente dolorum id maiores dolores? Illum pariatur possimus
                        quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                        placeat tempora vitae enim incidunt porro fuga ea.
                    </p>
                </div>
            </div>
        </>
    );
}