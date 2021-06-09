import React, { FunctionComponent } from 'react';
import {
    AboutMe,
    AreaExpertise,
    EducationHistory,
    Footer,
    Header,
    WorkExperience,
} from './components';

const App: FunctionComponent = () => {
    return (
        <div className="min-w-full min-h-full relative">
            <div className="w-full h-80 bg-blue-500 absolute left-0 top-0"></div>
            <div className="container mx-auto z-20">
                {/* Header */}
                <Header />
                {/* About Me */}
                <AboutMe />
                {/* AREAS OF EXPERTISE */}
                <AreaExpertise />
                {/* WORK EXPERIENCE */}
                <WorkExperience />
                {/* EDUCATION HISTORY */}
                <EducationHistory />
                {/*  Bottom placeholder */}
                <div className="mt-20 w-full h-32"></div>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default App;
