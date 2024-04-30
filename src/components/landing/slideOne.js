import React from 'react';
import slide from '../../res/img/slideOne.png'
import { useNavigate } from "react-router-dom";

const SlideOne = () => {

    const navigate = useNavigate();

    function redirectSignIn() {
        navigate("/signin");
    }
    function redirectSignUp() {
        navigate("/signup");
    }


    return (
        <div className="flex flex-col items-center dark:bg-black">

            <h1 className="text-7xl font-black mt-20 max-md:text-3xl dark:text-white">Générateur de cours IA</h1>

            <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
                Révolutionnez votre parcours d'apprentissage avec notre SaaS AI Course Generator
                Créez sans effort des cours attrayants et personnalisés adaptés à vos besoins
            </p>

            <div className="flex space-x-4 mb-4 mt-6">
                <button onClick={redirectSignIn} className="border-black text-black border px-3 py-2 font-medium dark:border-white dark:text-white">
                    Se connecter
                </button>
                <button onClick={redirectSignUp} className="bg-black text-white px-3 py-2 font-medium dark:bg-white dark:text-black">
                    S'inscrire
                </button>
            </div>

            <img
                src={slide}
                alt="Your Alt Text"
                className="w-full max-w-screen-xl mx-auto my-10 md:my-10"
            />
        </div>
    );
};

export default SlideOne;
