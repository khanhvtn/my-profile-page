import React, { FunctionComponent } from 'react';
import { listWorkEx } from '../../data/data';
import classNames from 'classnames';

type Props = {};

const WorkExperience: FunctionComponent<Props> = () => {
    const renderWorkExperienceBasedOnYear = listWorkEx
        .sort((a, b) => b.year - a.year)
        .map((workEx, index) => {
            const renderListDescription = workEx.listDescription.map(
                (desc, index) => {
                    return (
                        <li key={index} className="text-xl font-light">
                            {desc}
                        </li>
                    );
                }
            );
            const renderListTechnology = workEx.listTechnology.map(
                (logo, index) => {
                    return (
                        <img
                            key={index}
                            className="h-14"
                            src={
                                require(`../../images/${logo}-logo.png`).default
                            }
                            alt={logo}
                        />
                    );
                }
            );
            return (
                <div
                    key={index}
                    className={classNames(
                        'wrapper-content',
                        (index + 1) % 2 !== 0 ? 'left' : 'right'
                    )}
                >
                    <div className="content">
                        <p className="text-2xl font-bold">{workEx.year}</p>
                        <p className="text-xl font-medium">{workEx.name}</p>
                        {/*  List description */}
                        <div>
                            <ul className="list-disc list-inside">
                                {renderListDescription}
                            </ul>
                        </div>
                        {/* List technology */}
                        <div className="w-full flex items-center justify-center gap-x-10 mt-10">
                            {renderListTechnology}
                        </div>
                    </div>
                </div>
            );
        });
    return (
        <div className="w-full flex flex-col items-center my-36 px-10">
            <div className="mb-10 border-b-2 border-black px-5">
                <p className="text-4xl font-mono uppercase">WORK EXPERIENCE</p>
            </div>

            <div className="w-full">
                {/* Timeline */}
                <div className="timeline">
                    {/* Work experience based on year */}
                    {renderWorkExperienceBasedOnYear}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
