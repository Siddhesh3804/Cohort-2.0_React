import React from 'react'

const Advantage = () => {
    return (
        <div className="flex flex-col gap-3.5 mb-7">
            <h1 className="text-3xl ml-15 my-3">
                OUR ADVANTAGES
            </h1>
            <div className="mx-4 flex gap-3.5">
                <div className="w-1/2 bg-[url(../assets/girlModel.png)] bg-cover rounded-md"></div>
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="bg-[#1e1e1e] p-10 rounded-md">
                        <h2 className="text-xl mb-4">INDEPENDENT DESIGNERS</h2>
                        <div className="flex justify-between">
                            <p className="w-[53ch] ">Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers.</p>
                            <div className="flex flex-col-reverse">
                                <p className="BarlowCondensed "><i className="ri-arrow-right-up-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 m-2"></i>EXPLORE</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1e1e1e] p-10 rounded-md">
                        <h2 className="text-xl mb-4">EXCLUSIVE & UNIQUITY</h2>
                        <div className="flex justify-between">
                            <p className="w-[53ch] ">Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.</p>
                            <div className="flex flex-col-reverse">
                                <p className="BarlowCondensed "><i className="ri-arrow-right-up-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 m-2"></i>EXPLORE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-4 flex gap-3.5">
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="bg-[#1e1e1e] p-10 rounded-md ">
                        <h2 className="text-xl mb-4">HIGH QUALITY</h2>
                        <div className="flex justify-between">
                            <p className="w-[48ch] ">Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style.</p>
                            <div className="flex flex-col-reverse">
                                <p className="BarlowCondensed "><i className="ri-arrow-right-up-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 m-2"></i>EXPLORE</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1e1e1e] p-10 rounded-md ">
                        <h2 className="text-xl mb-4">ECO-FRIENDLY</h2>
                        <div className="flex justify-between">
                            <p className="w-[53ch] ">Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices.</p>
                            <div className="flex flex-col-reverse">
                                <p className="BarlowCondensed "><i className="ri-arrow-right-up-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 m-2"></i>EXPLORE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-[url(../assets/mannequins.png)] bg-cover rounded-md"></div>
            </div>
        </div>
    )
}

export default Advantage