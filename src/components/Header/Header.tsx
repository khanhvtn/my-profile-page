import React, { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';
import {
    AiFillFacebook,
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail,
} from 'react-icons/ai';

type Props = {};

const Header: FunctionComponent<Props> = () => {
    const [isAnimateAvatar, setIsAnimateAvatar] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsAnimateAvatar(true);
        }, 500);
    }, []);

    const avatarClass = classNames(
        'origin-center xl:w-64 md:w-52 xs:w-32 sm:pt-0 xs:pt-5 relative flex items-center justify-center transform scale-0',
        isAnimateAvatar ? 'scale-100 transition duration-300' : ''
    );
    return (
        <div className="bg-gradient-to-l from-blue-500 to-blue-700 w-full h-80 flex sm:flex-row sm:flex-wrap sm:items-stretch gap-5 px-5 xs:flex-col xs:items-center">
            {/* Avatar */}
            <div className={avatarClass}>
                <img
                    className="object-contain rounded-full xl:h-64 md:h-52 xs:h-32 sm:absolute xl:-bottom-12 md:-bottom-9"
                    src={require('../../images/avatar.jpg').default}
                    alt="My avatar"
                />
            </div>
            {/* Name and Major */}
            <div className="z-10 flex flex-col justify-end sm:pl-10 sm:items-stretch gap-y-5 pb-5 xs:items-center">
                <p className="text-white xl:text-2xl md:text-xl text-xs font-thin tracking-wide ">
                    FULL-STACK WEB DEVELOPER
                </p>
                <p className="text-white xl:text-6xl md:text-4xl text-2xl font-bold">
                    Vo Tran Nhut Khanh
                </p>
            </div>
            {/* Contact */}
            <div className="sm:flex-grow flex sm:flex-col sm:gap-y-3 sm:pt-5 sm:items-end z-20 flex-row gap-x-5">
                <div
                    className="relative text-white xl:text-lg lg:text-lg 
                inline-flex items-center gap-3 font-extralight cursor-pointer 
                transform hover:scale-110 transition duration-300

                "
                >
                    <a
                        href="https://www.facebook.com/leekhanh1993"
                        target="blank"
                        className="text-white absolute w-full h-full top-0 left-0"
                    />
                    <a className="hidden text-white lg:block sm:hidden">
                        fb.com/leekhnh1993
                    </a>
                    <AiFillFacebook size="30px" />
                </div>
                <div className="relative text-white  xl:text-lg lg:text-lg inline-flex items-center gap-3 font-extralight cursor-pointer transform hover:scale-110 transition duration-300">
                    <a
                        href="https://github.com/khanhvtn"
                        target="blank"
                        className="text-white absolute w-full h-full top-0 left-0"
                    />
                    <a className="hidden text-white lg:block sm:hidden">
                        github.com/khanhvtn
                    </a>
                    <AiFillGithub size="30px" />
                </div>

                <div className="relative text-white xl:text-lg lg:text-lg inline-flex items-center gap-3 font-extralight cursor-pointer transform hover:scale-110 transition duration-300">
                    <a
                        href="https://www.linkedin.com/in/khanhvtn/"
                        target="blank"
                        className="text-white absolute w-full h-full top-0 left-0"
                    />
                    <a className="hidden text-white lg:block sm:hidden">
                        linkedin.com/in/khanhvtn
                    </a>
                    <AiFillLinkedin size="30px" />
                </div>
                <div className="text-white xl:text-lg lg:text-lg inline-flex items-center gap-3 font-extralight cursor-pointer transform hover:scale-110 transition duration-300 relative">
                    <a
                        href="mailto:khanhvotrannhut93@gmail.com"
                        target="blank"
                        className="text-white absolute w-full h-full top-0 left-0"
                    />
                    <a className="hidden text-white lg:block sm:hidden">
                        khanhvotrannhut93@gmail.com
                    </a>
                    <AiFillMail size="30px" />
                </div>
            </div>
        </div>
    );
};

export default Header;
