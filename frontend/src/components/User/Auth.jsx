import React from 'react';
import homepage from '../../assests/images/homepage.webp';
import phones from '../../assests/images/phones.webp';

const Auth = ({ children }) => {
    return (
        <div className="w-full h-full">

            <div className="flex w-full h-screen md:w-2/3 py-8 mx-auto">

                <div className="hidden md:block my-10 h-full bg-no-repeat"
      style={{ backgroundImage: `url(${phones})` }}>
                    <img draggable="false" className="mr-[80px] ml-[50px]" src={homepage} alt="homepage" />
                </div>

                <div className="flex flex-col gap-3 w-full md:w-2/5">

                    {children}

                </div>
            </div>
        </div>
    )
}

export default Auth