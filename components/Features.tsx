import Image from "next/image"

export default () => {
    return(
        <>
        <div id='about' className='py-4 mx-8 mt-20 rounded sm:mx-28 sm:mt-20 shadow-card-custom'>
        <div className='grid grid-cols-1 divide-y sm:divide-y-0 sm:grid-cols-3 sm:divide-x divide-[#EEEFF2]'>
          
          <div className='flex flex-row items-center justify-center py-8'>
            <div className='w-12 h-12 rounded-full bg-[#FFECEC] justify-center flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className='relative fill-[#F53838]' height="1em" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
              </svg>
            </div>
            <div className='pl-5'>
              <div className='text-md'><b className='text-xl'> 95+ </b> <br /> <span className='font-light'>Users</span> </div>
            </div>
          </div>

          <div className='flex flex-row items-center justify-center py-8'>
            <div className='w-12 h-12 rounded-full bg-[#FFECEC] justify-center flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='relative fill-[#F53838]' height="1em" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
            </div>
            <div className='pl-5'>
              <div className='text-md'><b className='text-xl'> 30+ </b> <br /> <span className='font-light'>Locations</span> </div>
            </div>
          </div>

          <div className='flex flex-row items-center justify-center py-8'>
            <div className='w-12 h-12 rounded-full bg-[#FFECEC] justify-center flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='relative fill-[#F53838]' height="1em" viewBox="0 0 512 512">
              <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
              </svg>
            </div>
            <div className='pl-5'>
              <div className='text-md'><b className='text-xl'> 50+ </b> <br /> <span className='font-light'>Servers</span> </div>
            </div>
          </div>
        
        </div>
      </div>


      <div id='features' className='grid mx-8 mt-20 sm:mx-28 sm:grid-cols-2 justify-items-center'>
          <div>
            <Image src="feature.svg" alt='Image' height={400} width={400}></Image>
          </div>
          <div className='pt-9'>
            <div className='text-3xl font-medium'>We Provide Many <br /> Features You Can Use</div>
            <div className='pt-5 text-sm font-light'>You can explore the features that we provide with fun and <br /> have their own functions each feature.</div>
            
            <div className='pt-5'>
              <div className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>
                <span className='pl-2 text-sm font-light'>Powerfull online protection.</span>
              </div>
            </div>

            <div className='pt-5'>
              <div className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>
                <span className='pl-2 text-sm font-light'>Internet without borders.</span>
              </div>
            </div>

            <div className='pt-5'>
              <div className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>
                <span className='pl-2 text-sm font-light'>Supercharged VPN</span>
              </div>
            </div>

            <div className='pt-5'>
              <div className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>
                <span className='pl-2 text-sm font-light'>No specific time limits.</span>
              </div>
            </div>

          </div>
      </div>
      </>
    );
}