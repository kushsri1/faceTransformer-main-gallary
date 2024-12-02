import React from 'react'

const Hero = () => {
  return (
    <div className='hero bg-[#DED0C5] pl-6 w-full h-full '>
        <div className="section-1 text-section pt-20 p-0 md:pl-10 md:text-start text-center gap-5">
            <div className="text-img">
            <img src="/img/GALLERY.png" alt="" />
            </div>
            <div className="text w-full md:w-[70%] pt-5">
            <p className='text-[#796355]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            </ div>

            <div className="section-2 flex md:flex-row flex-col justify-center items-center px-10 py-10 gap-5">


            <div className="flex flex-col gap-5">
              <div className="img-container relative group peer">
              <img
        src="/img/face-img/face-1/G1.png"
        alt=""
        className="img-1 transition-transform hover:scale-y-125 duration-300 hover:opacity-95"
    />
                <div className='text-overlay h-0 transition-all ease-in-out w-full absolute bottom-0 left-0 duration-300 overflow-hidden group-hover:h-[50%]'>
                  <img src="/img/before-after/BEFORE.png" alt="" />
                </div>
    </div>

    <div className='img-container-2 hover:opacity-90 group duration-300 peer-hover:scale-y-75 relative'>
    <img
        src="/img/face-img/face-1/G2.png"
        alt=""
        className="img-2 duration-300 transition-transform hover:scale-y-125"
    />
    <div className='text-overlay h-0 absolute left-0 bottom-0  transition-all ease-in-out duration-300 overflow-hidden group-hover:h-1/2'>
    <img src="/img/before-after/AFTER.png" alt="" />
    </div>
    </div>
</div>


                <div className='flex flex-col gap-5 relative group'>
                    <img className='transition-transform duration-300 hover:opacity-90  hover:scale-y-125' src="/img/face-img/face-2/G3.png" alt="" />

                    <div className='text-overlay h-0 absolute left-0 bottom-0 overflow-hidden transition-all ease-in-out duration-300 group-hover:h-1/2'>
                      <img src="/img/before-after/DETAILS.png" alt="" />
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                <div className="image-container relative group peer">
  <img
    className="img-1 transition-transform group-hover:scale-y-125 duration-300 hover:opacity-90"
    src="/img/face-img/face-3/Rectangle 7.png"
    alt=""
  />

  <div className="text-overlay h-0 transition-all ease-in-out w-full absolute bottom-0 left-0 overflow-hidden duration-300 group-hover:h-1/2">
    <img src="/img/before-after/BEFORE.png" alt="" />
  </div>
</div>
<div className='image-container-2 duration-300 peer-hover:scale-y-75 group relative'>
                    <img className="img-2 hover:opacity-90 peer-hover:scale-y-50 duration-300 transition-transform hover:scale-y-125" src="/img/face-img/face-3/Rectangle 10.png" alt="" />
                    <div className='text-overlay h-0 absolute left-2 bottom-0 overflow-hidden transition-all ease-in-out duration-300 group-hover:h-1/2'>
                      <img src="/img/before-after/AFTER.png" alt="" />
                    </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5 group relative'>
                    <img className='transition-transform duration-300 hover:opacity-90  hover:scale-y-125' src="/img/face-img/face-4/G6.png" alt="" />
                    <div className='text-overlay h-0 overflow-hidden absolute left-0 bottom-0 transition-all ease-in-out duration-300 group-hover:h-1/2'>
                      <img src="/img/before-after/DETAILS.png" alt="" />
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                  <div className="img-container-1 group peer relative">
                    <img className='img-1 hover:opacity-90 transition-transform hover:scale-y-125 duration-300 peer' src="/img/face-img/face-5/G7.png" alt="" />
                    <div className='text-overlay h-0 absolute left-0 bottom-0 overflow-hidden transition-all ease-in-out duration-300 group-hover:h-1/2'>
                      <img src="/img/before-after/BEFORE.png" alt="" />
                    </div>
                    </div>
                    <div className="img-container-2 duration-300 peer-hover:scale-y-75 relative group">                    
                    <img className="img-2 hover:opacity-90 peer-hover:scale-y-50 duration-300 transition-transform hover:scale-y-125" src="/img/face-img/face-5/G8.png" alt="" />
                    <div className='text-overlay h-0 absolute overflow-hidden left-2 bottom-0 transition-all ease-in-out duration-300 group-hover:h-1/2'>
                      <img src="/img/before-after/BEFORE.png" alt="" />
                    </div>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default Hero