import Image from "next/image"

export default () => {
    return(
        <>
            <div className='bg-[#F8F8F8] mt-28'>
              <div className='pt-48 pb-20 mx-8 sm:mx-28'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  
                  <div className='grid grid-flow-row'>
                    <div className='flex flex-row items-center'>
                      <Image src="logo.svg" alt='Image' width={25} height={25} />
                      <p className='pl-1 text-lg'> Lasles <b>VPN</b> </p>
                    </div>
                    <div className='pt-5 text-sm font-light sm:pt-3'>
                        LaslesVPN is a private virtual network that <br />has unique features and has high security.
                    </div>
                  </div>


                  <div className='grid justify-around grid-cols-3 pt-5 sm:pt-2'>
                    <div className='grid grid-flow-row'>
                      <p className='font-bold'>Product</p>
                      <a className='pt-3 font-light' href="">Download</a>                      
                      <a className='pt-3 font-light' href="">Pricing</a>
                      <a className='pt-3 font-light' href="">Locations</a>                     
                      <a className='pt-3 font-light' href="">Server</a>                      
                      <a className='pt-3 font-light' href="">Countries</a>                      
                      <a className='pt-3 font-light' href="">Blog</a>




                    </div>

                    <div className='grid grid-flow-row'>
                      <p className='font-bold'>Engage</p>
                      <a className='pt-3 font-light' href="">LaslesVPN ? </a>                      
                      <a className='pt-3 font-light' href="">FAQ</a>
                      <a className='pt-3 font-light' href="">Tutorials</a>                     
                      <a className='pt-3 font-light' href="">About Us</a>                      
                      <a className='pt-3 font-light' href="">Privacy Policy</a>                      
                      <a className='pt-3 font-light' href="">Terms of Service</a>
                    </div>

                    <div className='grid grid-flow-row auto-rows-max'>
                      <p className='font-bold'>Earn Money</p>
                      <a className='pt-3 font-light' href="">Affiliate</a>                      
                      <a className='pt-3 font-light' href="">Become Partner</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </>
    );
}