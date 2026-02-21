import React from 'react'

const MainPage = () => {
  return (
    <div className="h-[90vh] mx-4 bg-[url(../assets/hero.png)] bg-no-repeat bg-cover rounded-[10px] flex flex-col justify-end pb-20">
      <div className=" px-22 ">
        <h1 className="text-9xl font-thin tracking-widest">DESIGN <br /><span className="ml-35">& FREEDOM</span></h1>
        <div className='flex justify-between pt-2.5'>
          <p className="w-[45ch] text-lg tracking-wider ml-35">Explore Independent Style by Embracing Uniqueness with Our Exclusive Designer Apparel</p>
          <div>
            <p className="BarlowCondensed"><i className="ri-arrow-down-long-line text-[#cdcdcd] bg-[#cdcdcd3c] text-lg border rounded-2xl p-1.5 m-2"></i>LEARN MORE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage