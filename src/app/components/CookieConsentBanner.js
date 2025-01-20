
"use client"
import React, { useState } from 'react';

export default function CookieConsentBanner() {

    const [showCookie, ToggleShowCookie] = useState(true);

    const handleCookies = () => {
        ToggleShowCookie(!showCookie)
    }

    return (
        <>
            {showCookie && (
                <div className='w-full py-4 px-8 flex items-center justify-center sticky bottom-0 bg-black ' >
                    <div className='flex items-center justify-between flex-col sm:flex-col md:sm:flex-row lg:sm:flex-row xl:sm:flex-row'>
                        <h1 className="text-base    " onClick={handleCookies}>This website uses cookies to enhance the user experience.</h1>
                        <div className='p-4 '>
                            <button className='px-3  rounded-md py-2 border me-2' onClick={handleCookies}>Decline</button>
                            <button className='px-3 rounded-md py-2 border hover:bg-primary duration-150 transition-all ' onClick={handleCookies}>Accept</button>

                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

