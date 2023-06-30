import Image from "next/image"


export default () => {
    return(
        <>
            <div id='testimonials' className='mx-8 sm:mx-28 mt-28'>
              <div className='grid grid-flow-row justify-items-center'>
                <div className='text-3xl font-bold'>Huge Global Network of Fast VPN</div><br />
                <div className='pt-3 text-sm font-light'>See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.</div>
                <Image src="global.svg" alt='Global' className='mt-20' height={430} width={800}></Image>
              </div>
              <div className='grid items-center grid-cols-1 sm:mt-10 sm:grid-cols-5 justify-items-center'>
                <Image src='netflix.svg' className='pt-8' width={190} height={60} alt='netflix'></Image>                
                <Image src='reddit.svg' className='pt-8' width={190} height={60} alt='netflix'></Image>
                <Image src='amazon.svg' className='pt-8' width={190} height={60} alt='netflix'></Image>
                <Image src='discord.svg' className='pt-8' width={190} height={60} alt='netflix'></Image>
                <Image src='spotify.svg' className='pt-8' width={190} height={60} alt='netflix'></Image>
              </div>
            </div>
        </>
    );
}