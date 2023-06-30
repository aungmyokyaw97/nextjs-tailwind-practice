import Image from "next/image"


export default () => {
    return(
      <div className='grid justify-between grid-cols-1 mx-8 sm:mx-28 sm:grid-cols-2'>
        <div className='z-10 pt-16 md:pt-2 lg:pt-28'>
          <div className='text-2xl font-medium leading-snug md:text-2xl lg:text-4xl xl:text-5xl'>Want anything to be <br/> easy with <b>LaslesVPN</b>.</div>
          <div className='mt-4 text-sm font-light md:text-sm lg:text-md'>Provide a network for all your needs with ease and fun using  <b>LaslesVPN</b> discover interesting features from us.</div>
          <div className='flex justify-center mt-10 sm:justify-start'>
            <a href="" className='text-white bg-[#F53838] h-12 w-48 px-8 rounded flex items-center justify-center shadow-custom'>Get Started</a>
          </div>
        </div>

        <div className='lg:pt-20 absolute opacity-[0.15] z-0 sm:opacity-100 sm:relative'>
          <Image src="banner.svg" alt='Image' width={650} height={700} />
        </div>
      </div>
    );
}