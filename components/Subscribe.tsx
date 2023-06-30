export default () => {
    return(
        <>
            <div className='absolute left-0 right-0 z-20 grid mx-8 bg-white border-2 border-white rounded-md sm:mx-28 h-60 shadow-card-custom'>
              <div className='relative grid items-center grid-cols-1 sm:grid-cols-2 justify-items-center'>
                <div className=''>
                    <div className='text-3xl font-medium'>Subscribe Now for <br /> Get Special Features!</div>                    
                    <div className='pt-3 font-light text-md'>Let's subscribe with us and find the fun.</div>
                </div>
                <div className=''>
                  <a href="" className='text-white bg-[#F53838] h-12 w-48 px-8 rounded flex items-center justify-center shadow-custom'>Subscribe Now</a>
                </div>
              </div>
            </div>  
        </>
    );
}