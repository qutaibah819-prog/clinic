
import HomeIcon from "@/icon/home"
import doctorimage from "@/public/doctor_transparent.png"
import Image from "next/image"
const Beranda=()=>{

    return(
        <div className="flex min-h-[calc(100svh-76px)] w-full flex-col justify-center gap-8 py-10 md:flex-row md:items-center md:justify-between">
            <div className="flex w-full flex-col justify-center md:w-1/2">
                <h1 className="bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    Klinik 24 siap melayani keluhan masyarakat selama 24/7.
                </h1>
                <p className="text-sm mt-4 text-gray-600">
Rumah sakit adalah bagian integral dari suatu organisasi 
sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).                </p>
                
            </div>
             <div className="relative flex w-full items-center justify-center md:w-1/2">
                                <Image src={doctorimage} width={500} height={500} alt="Doctor"  className="h-auto w-full max-w-[500px] rounded-full"/>

                
                <div className="absolute bottom-3 left-1/2 flex w-[200px] -translate-x-1/2 items-center gap-2 rounded-lg bg-white p-2 shadow-lg sm:bottom-8 md:left-8 md:translate-x-0 lg:left-20">
                    <div className=" bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] w-[fit-content] p-[5px] rounded-full overflow-hidden">
 <HomeIcon className='text-sm text-white' />
                </div>
                   
                    <div className='m-0 p-0'>
                        <p className='text-xl font-semibold m-0 p-0'>dr. John Doe</p>
                     <p className='text-xs   text-gray-600 m-0 p-0 '>
                       Head of Hospital</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beranda