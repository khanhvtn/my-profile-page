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
        'origin-center w-96 relative flex items-center justify-center transform scale-0',
        isAnimateAvatar ? 'scale-100 transition duration-300' : ''
    );
    return (
        <div className="bg-gradient-to-l from-blue-500 to-blue-700 w-full h-80 flex flex-row flex-wrap">
            {/* Avatar */}
            <div className={avatarClass}>
                <img
                    className="object-contain rounded-full h-64 absolute -bottom-11"
                    src={require('../../images/avatar.jpg').default}
                    alt="My avatar"
                />
            </div>
            {/* Name and Major */}
            <div className="relative flex-grow">
                <p className="text-white text-2xl font-thin tracking-wide absolute left-10 bottom-32">
                    FULL-STACK WEB DEVELOPER
                </p>
                <p className="text-white text-6xl font-bold absolute left-10 bottom-10">
                    Vo Tran Nhut Khanh
                </p>
            </div>
            {/* Contact */}
            <div className="flex flex-col items-end z-20 gap-y-3 pt-5">
                <div className="relative text-white text-lg inline-flex items-center gap-3 font-extralight cursor-pointer  transform hover:scale-110 transition duration-300">
                    <a
                        href="https://www.facebook.com/leekhanh1993"
                        target="blank"
                        className="text-white absolute w-full h-full top-0 left-0"
                    />
                    <a className="text-white">fb.com/leekhnh1993</a>
                    <AiFillFacebook size="30px" />
                </div>
                <div className="relative text-white text-lg inline-flex items-center gap-3 font-extralight cursor-pointer transform hover:scale-110 transition duration-300">
                    <a
                        href="https://github.com/khanhvtn"
                        target="blank"
                        className="text-white absolute w-full h-full top-0 left-0"
                    />
                    <a className="text-white">github.com/khanhvtn</a>
                    <AiFillGithub size="30px" />
                </div>

                <div className="relative text-white text-lg inline-flex items-center gap-3 font-extralight cursor-pointer transform hover:scale-110 transition duration-300">
                    <a
                        href="https://www.linkedin.com/in/khanhvtn/"
                        target="blank"
                        className="text-white absolute w-full h-full top-0 left-0"
                    />
                    <a className="text-white">linkedin.com/in/khanhvtn</a>
                    <AiFillLinkedin size="30px" />
                </div>
                <div className="text-white text-lg inline-flex items-center gap-3 font-extralight cursor-pointer transform hover:scale-110 transition duration-300 relative">
                    <a
                        href="mailto:khanhvotrannhut93@gmail.com"
                        target="blank"
                        className="text-white absolute w-full h-full top-0 left-0"
                    />
                    <a className="text-white">khanhvotrannhut93@gmail.com</a>
                    <AiFillMail size="30px" />
                </div>
            </div>
        </div>
    );
};

export default Header;
