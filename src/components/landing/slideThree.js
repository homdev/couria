import React from "react";
import { PiKeyboard, PiVideo    } from "react-icons/pi";
import { RiAiGenerate } from "react-icons/ri";

const SlideThree = () => {
    return (

        <div className="dark:bg-black">
            <div className="flex items-center justify-center text-center">
                <div className="text-4xl font-black dark:text-white max-md:text-2xl">Comment ça fonctionne</div>
            </div>
            <div className="lg:flex py-24 max-md:py-14">
              
                <div className="flex flex-col items-center justify-center lg:w-1/3 pt-6">
                    <PiKeyboard className="text-4xl max-md:text-3xl dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">Entrez le titre du cours</div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white"  >Saisissez le titre du cours pour lequel vous souhaitez générer du contenu à l'aide de l'IA</div>
                </div>

         
                <div className="flex flex-col items-center justify-center lg:w-1/3 pt-6">
                    <RiAiGenerate  className="text-4xl max-md:text-3xl dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">L'IA génère un sous-thème</div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white" >L'IA générera des sujets et sous-thèmes en fonction du titre que vous fournissez</div>
                </div>

               
                <div className="flex flex-col items-center justify-center lg:w-1/3 pt-6">
                    <PiVideo   className="text-4xl max-md:text-3xl  dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">Cours vidéo et théorique</div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white" >L'IA générera une vidéo et un cours théorique vous permettant de commencer à apprendre</div>
                </div>
            </div>
        </div>
    );
};

export default SlideThree;
