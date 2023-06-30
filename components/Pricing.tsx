import Image from "next/image"


export default () => {
    return(
        <>
              <div id='pricing' className='mx-8 sm:mx-28 mt-28'>
              <div className='grid grid-flow-row justify-items-center'>
                <div className='text-3xl font-bold'>Choose Your Plan</div>
                <div className='pt-3 text-sm'>Let's choose the package that is best for you and explore it happily and cheerfully.</div>
              </div>

              <div className='grid grid-cols-1 pt-28 md:grid-cols-2 lg:grid-cols-3 justify-items-around justify-items-center'>

                {/* Free Plan */}
                <div className='w-fit py-10 px-20 border-2 grid grid-flow-row justify-items-center rounded-md border-[#DDDDDD] group hover:border-[#F53838]'>

                    <Image src="plan.svg" alt='Pricing' className='pt-10' height={165} width={144}></Image>

   
                    <div className='mt-10 text-lg font-medium h-fit'>Free Plan</div>
                
                    <div className='mt-7 h-60'>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Unlimited Bandwitch</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Encrypted Connection</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> No Traffic Logs</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Works on All Devices</span>
                        </div>
                      </div>
                    </div>


                    <div className='mt-16 text-xl font-bold h-fit'>Free</div>
                    <a href="" className='mt-4 h-10 px-14 box-border border-2 border-[#F53838] rounded-full flex items-center  text-[#F53838] text-sm group-hover:text-white group-hover:bg-[#F53838] group-hover:shadow-custom'>Select</a>


                </div>
                {/* Free Plan */}

                {/* Standard Plan */}
                <div className='w-fit py-10 px-20 border-2 grid grid-flow-row justify-items-center rounded-md border-[#DDDDDD] group hover:border-[#F53838]'>

                    <Image src="plan.svg" alt='Pricing' className='pt-10' height={165} width={144}></Image>

   
                    <div className='mt-10 text-lg font-medium h-fit'>Standard Plan</div>
                
                    <div className='mt-7 h-60'>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Unlimited Bandwitch</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Encrypted Connection</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Yes Traffic Logs</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Works on All Devices</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Connect Anyware</span>
                        </div>
                      </div>
                    </div>


                    <div className='mt-16 text-xl h-fit'> <b> $9 </b> / mo</div>
                    <a href="" className='mt-4 h-10 px-14 box-border border-2 border-[#F53838] rounded-full flex items-center  text-[#F53838] text-sm group-hover:text-white group-hover:bg-[#F53838] group-hover:shadow-custom'>Select</a>


                </div>
                {/* Standard Plan */}


                {/* Premium Plan */}
                <div className='w-fit py-10 px-20 border-2 grid grid-flow-row justify-items-center rounded-md border-[#DDDDDD] group hover:border-[#F53838] ho'>

                    <Image src="plan.svg" alt='Pricing' className='pt-10' height={165} width={144}></Image>

   
                    <div className='mt-10 text-lg font-medium h-fit'>Premium Plan</div>
                
                    <div className='mt-7 h-60'>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Unlimited Bandwitch</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Encrypted Connection</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Yes Traffic Logs</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                          </svg>
                          <span className='pl-2 text-sm font-light'> Works on All Devices</span>
                        </div>
                      </div>
                      <div className='pt-4'>
                          <div className='flex flex-row items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                            <span className='pl-2 text-sm font-light'> Connect Anyware</span>
                          </div>
                      </div>
                      <div className='pt-4'>
                          <div className='flex flex-row items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#2FAB73]' height="1em" viewBox="0 0 448 512">
                              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>
                            <span className='pl-2 text-sm font-light'> Get New Features</span>
                          </div>
                      </div>   
                    </div>


                    <div className='mt-16 text-xl h-fit'><b>$12</b> /mo </div>
                    <a href="" className='mt-4 h-10 px-14 box-border border-2 border-[#F53838] rounded-full flex items-center  text-[#F53838] text-sm group-hover:text-white group-hover:bg-[#F53838] group-hover:shadow-custom'>Select</a>


                </div>
                {/* Premium Plan */}
                </div>
                </div>
        </>
    );
}