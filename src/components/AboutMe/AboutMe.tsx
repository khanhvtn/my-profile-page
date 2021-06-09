import React, { FunctionComponent } from 'react';

type Props = {};

const AboutMe: FunctionComponent<Props> = () => {
    return (
        <div className="w-full flex flex-col items-center my-36 px-10">
            <div className="mb-10 border-b-2 border-black px-5">
                <p className="text-4xl font-mono uppercase">About Me</p>
            </div>
            <p className="text-2xl text-center font-light italic">
                Hi guys, I am a full-stack web developer with hands-on
                experience in all levels of web development from my school and
                side projects, including performance, functional, integration,
                system, and user experience. My dream is to create plenty of
                automatic systems and applications that can run on multiple
                platforms to help people can reduce their workload in real life.
                Hopefully, I can use my knowledge and experience in software
                engineering to contribute for community in the future
                <span className="not-italic pl-1">😁</span>
            </p>
        </div>
    );
};

export default AboutMe;
