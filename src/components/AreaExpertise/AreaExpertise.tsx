import React, { FunctionComponent } from 'react';
import { listKeyAreaDesc, listLogo } from '../../data/data';

type Props = {};

const AreaExpertise: FunctionComponent<Props> = () => {
    const renderListAreaExpertise = listKeyAreaDesc.map((keyDesc, index) => {
        return (
            <li key={index} className="lg:text-2xl md:text-xl font-light">
                {keyDesc}
            </li>
        );
    });

    const renderListLogoLanguages = listLogo.map((logo, index) => {
        return (
            <img
                key={index}
                className="h-10"
                src={require(`../../images/${logo.path}.png`).default}
                alt={logo.name}
            />
        );
    });
    return (
        <div className="w-full flex flex-col items-center my-36 px-10">
            <div className="mb-10 border-b-2 border-black px-5">
                <p className="lg:text-4xl md:text-2xl font-mono uppercase">
                    AREAS OF EXPERTISE
                </p>
            </div>

            <div className="w-full flex flex-row flex-wrap items-center justify-between gap-y-10">
                {/*  List area of expertise  */}
                <div>
                    <ul className="list-disc list-inside">
                        {renderListAreaExpertise}
                    </ul>
                </div>
                {/*  List logo languages  */}
                <div className="flex flex-grow flex-row flex-wrap justify-center gap-10">
                    {renderListLogoLanguages}
                </div>
            </div>
        </div>
    );
};

export default AreaExpertise;
