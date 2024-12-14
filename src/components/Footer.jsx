import React from 'react';

const Footer = () => {
    return (
        <div className="">

            <div className="bg-gray-100">
                <div
                    className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                    <div className="p-5 flex items-center">
                        <h3 className="font-bold text-3xl text-blue-600 items-center">Alpha Cars</h3>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-blue-600 font-bold">Resources</div>
                        <a className="my-3 block" href="/#">Documentation <span
                            className="text-teal-600 text-xs p-1"></span></a><a
                        className="my-3 block" href="/#">Tutorials <span
                        className="text-teal-600 text-xs p-1"></span></a><a
                        className="my-3 block" href="/#">Support <span className="text-teal-600 text-xs p-1">New</span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-blue-600 font-bold">Support</div>
                        <a className="my-3 block" href="/#">Help Center <span
                            className="text-teal-600 text-xs p-1"></span></a><a
                        className="my-3 block" href="/#">Privacy Policy <span
                        className="text-teal-600 text-xs p-1"></span></a><a
                        className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-blue-600 font-bold">Contact us</div>
                        <a className="my-3 block" href="/#">Spinny Car Hub, Universal Trade Tower, Sector 49, Gurgaon
                            <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@alphacars.com
                        <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
                    <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
                </div>
            </div>



        </div>
    );
};

export default Footer;