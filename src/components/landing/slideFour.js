import React from "react";
import PricingPlan from "../pricing";
import { FreeType, FreeCost, FreeTime, MonthType, MonthTime, MonthCost, YearType, YearCost, YearTime } from '../../constants';

const SlideFour = () => {

    const freeData = `{"type": "${FreeType}", "cost": "${FreeCost}", "time": "${FreeTime}", "one": "Générer 5 sous-thèmes", "two": "Créer un cours illimité", "three": "Cours vidéo et théorique", "four": "Accès à vie", "five": "Cours Théorie & Image"}`;
    const parsedFreeData = JSON.parse(freeData);

    const monthData = `{"type": "${MonthType}", "cost": "${MonthCost}", "time": "/${MonthTime}", "one": "Générer 10 sous-thèmes", "two": "Créer un cours illimité", "three": "Cours vidéo et théorique", "four": "Accès 1 mois", "five": "Cours Théorie & Image"}`;
    const parsedMonthData = JSON.parse(monthData);

    const YearData = `{"type": "${YearType}", "cost": "${YearCost}", "time": "/${YearTime}", "one": "Générer 10 sous-thèmes", "two": "Créer un cours illimité", "three": "Cours vidéo et théorique", "four": "Accès 1 an", "five": "Cours Théorie & Image"}`;
    const parsedYearData = JSON.parse(YearData);

    return (
        <div className="dark:bg-black py-14">
            <div className="px-11 items-start justify-start text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:bg-white dark:border-white mb-2">Plans &amp; Tarifs</div>
                <div className="text-4xl max-md:text-2xl font-black dark:text-white">Des plans flexibles.</div>
                <p className="py-3 font-medium max-md:text-xs dark:text-white">Choisissez le bon plan pour votre éducation et votre avenir</p>
            </div>
            <div className="lg:flex py-10">

                <div className="flex flex-col items-center justify-center lg:w-1/3 max-md:pt-4">
                    <PricingPlan data={parsedFreeData} />
                </div>

                <div className="flex flex-col items-center justify-center lg:w-1/3 max-md:pt-4">
                    <PricingPlan data={parsedMonthData} />
                </div>

                <div className="flex flex-col items-center justify-center lg:w-1/3 max-md:pt-4">
                    <PricingPlan data={parsedYearData} />
                </div>
            </div>
        </div>
    );
};

export default SlideFour;
