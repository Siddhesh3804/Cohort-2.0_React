import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center mx-4 my-3.5">
            <h1 className="text-3xl">DVSY</h1>
            <div className="flex gap-x-2.5 BarlowCondensed">
                <h3 className="bg-[#1e1e1e] px-3 py-2 rounded-sm">DESIGNERS</h3>
                <h3 className="bg-[#1e1e1e] px-3 py-2 rounded-sm">COLLASS</h3>
                <h3 className="bg-[#1e1e1e] px-3 py-2 rounded-sm">EVENTS</h3>
                <h3 className="bg-[#1e1e1e] px-3 py-2 rounded-sm">BLOG</h3>
                <h3 className="bg-[#1e1e1e] px-3 py-2 rounded-sm">CARD</h3>
                <h3 className="bg-[#ec7058] text-[#060504] font-bold px-3 py-2 rounded-sm">GET IN TOUCH</h3>
            </div>
        </div>
    )
}

export default Navbar