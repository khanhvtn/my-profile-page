import React, { FunctionComponent } from 'react';

type Props = {};

const Footer: FunctionComponent<Props> = () => {
    return (
        <footer className="w-full h-32 bg-gray-300 absolute left-0 bottom-0 flex items-center justify-center">
            <p className="text-gray-700">
                Made with love and
                <a
                    className="pl-1 font-bold text-black"
                    href="https://reactjs.org/"
                    target="_blank"
                >
                    React
                </a>
            </p>
        </footer>
    );
};

export default Footer;
