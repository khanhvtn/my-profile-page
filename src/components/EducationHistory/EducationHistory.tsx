import React, { FunctionComponent } from 'react';
import { listEducationHistory } from '../../data/data';
import classNames from 'classnames';

type Props = {};

const EducationHistory: FunctionComponent<Props> = () => {
    const renderListEducationHistory = listEducationHistory
        .sort((a, b) => b.graduateYear - a.graduateYear)
        .map((educationHistory, index) => {
            const renderListActivities = educationHistory.activities.map(
                (activity, index) => {
                    return (
                        <li key={index} className="text-xl font-light">
                            {activity}
                        </li>
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
                        <p className="text-2xl font-bold">
                            {educationHistory.schoolName},
                            {educationHistory.graduateYear}
                        </p>
                        <p className="text-xl font-medium">
                            {educationHistory.major}
                        </p>
                        {/* List Activities */}
                        <div>
                            <ul className="list-disc list-inside">
                                {renderListActivities}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        });
    return (
        <div className="w-full flex flex-col items-center my-36 px-10">
            <div className="mb-10 border-b-2 border-black px-5">
                <p className="text-4xl font-mono uppercase">
                    EDUCATION HISTORY
                </p>
            </div>
            <div className="w-full">
                {/* Timeline */}
                <div className="timeline">
                    {/* Education history based on year */}
                    {renderListEducationHistory}
                </div>
            </div>
        </div>
    );
};

export default EducationHistory;
