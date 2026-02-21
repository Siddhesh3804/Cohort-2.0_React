import React from 'react'

const About = () => {
  return (
    <div className="h-122 mx-4 flex gap-3.5 mb-10">
        <div className="w-1/2 bg-[#1e1e1e] rounded-md p-12.5">
            <p className="BarlowCondensed font-semibold tracking-wider ">ABOUT</p>
            <h1 className="mt-18 text-5xl font-thin">WHERE FASHION MEETS FREEDOM</h1>
            <div className="flex mt-8 gap-15">
                <p className="w-[60ch] ">We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering a community of creativity and innovation,</p>
                <p className="w-[55ch] ">we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</p>
            </div>
        </div>
        <div className="w-1/2 bg-[url(../assets/girlWearingLongCoat.png)] rounded-md">
        </div>
    </div>
  )
}

export default About