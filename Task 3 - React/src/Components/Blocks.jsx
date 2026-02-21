import React from 'react'

const Blocks = () => {
  return (
    <div>
        <div className="flex m-4 gap-3.5">
            <div className="bg-[#1e1e1e] w-1/4 px-13.5 py-12 tracking-wide rounded-md ">
                <h2 className="text-2xl pb-3.5">INDEPENDENCY</h2>
                <p className="text-base pb-8 text-[#cdcdcd]">Explore the creativity of independent designers from around the globe.</p>
                <p className="text-base BarlowCondensed"><i className="ri-arrow-right-up-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 mr-2.5"></i>LEARN MORE</p>
            </div>
            <div className="bg-[#1e1e1e] w-1/4 px-13.5 py-12 tracking-wide rounded-md ">
                <h2 className="text-2xl pb-3.5">UNIQUITY</h2>
                <p className="text-base pb-8 text-[#cdcdcd]">Discover the charm of unique pieces that stand out effortlessly.</p>
                <p className="text-base BarlowCondensed"><i className="ri-arrow-right-up-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 mr-2.5"></i>LEARN MORE</p>
            </div>
            <div className="bg-[#1e1e1e] w-1/4 px-13.5 py-12 tracking-wide rounded-md ">
                <h2 className="text-2xl pb-3.5">QUALITY</h2>
                <p className="text-base pb-8 text-[#cdcdcd]">Experience unparalleled craftsmanship and attention to detail.</p>
                <p className="text-base BarlowCondensed"><i className="ri-arrow-right-up-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 mr-2.5"></i>LEARN MORE</p>
            </div>
            <div className="bg-[#1e1e1e] w-1/4 px-13 py-12 tracking-wide rounded-md ">
                <h2 className="text-2xl pb-3.5">SUSTAINABILITY</h2>
                <p className="text-base pb-8 text-[#cdcdcd]">Embrace eco-conscious fashion choices without compromising on style.</p>
                <p className="text-base BarlowCondensed"><i className="ri-arrow-right-up-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 mr-2.5"></i>LEARN MORE</p>
            </div>
        </div>

        <div className="flex justify-between m-12 mx-18 BarlowCondensed">
            <div>
                <p className="text-[#cdcdcd] ">DESIGNERS</p>
                <h1 className="text-5xl font-thin tracking-wider">150+</h1>
            </div>
            <div>
                <p className="text-[#cdcdcd] ">CLIENTS</p>
                <h1 className="text-5xl font-thin tracking-wider">500+</h1>
            </div>
            <div>
                <p className="text-[#cdcdcd] ">MASTERPIECES</p>
                <h1 className="text-5xl font-thin tracking-wider">20K+</h1>
            </div>
            <div>
                <p className="text-[#cdcdcd] ">EVENTS</p>
                <h1 className="text-5xl font-thin tracking-wider">50+</h1>
            </div>
        </div>
    </div>
  )
}

export default Blocks