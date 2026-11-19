import Contact_Icon from "@/icon/contact"
import Date_Icon from "@/icon/date"


const Reservas=()=>{
    return(
        <div className='w-full py-8'>
            <div className='mx-auto flex min-h-[300px] w-full max-w-6xl flex-col items-center justify-center gap-5 rounded-[20px] bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] p-5 text-white sm:p-8'>
               <div className='w-full max-w-4xl space-y-2 text-center'>
 <h1 className='text-xl font-bold sm:text-2xl'>Reservasi Pelayanan kami sekarang</h1>
                <p className='text-white/75'>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
            
               </div>
               <div className='mt-4 flex w-full flex-col items-center gap-3 sm:w-fit sm:flex-row sm:gap-4'>

                 <button className='flex h-[40px] w-full items-center justify-center rounded-[30px] border border-white px-4 py-2 text-white/90 transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 sm:w-[200px]'>
                    <Date_Icon/>
                    <span className='ml-2 text-sm font-medium'>Cek Jadwal Dokter</span>
                </button>

                <button className='flex h-[40px] w-full items-center justify-center rounded-[30px] bg-white px-5 py-2 text-black transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 sm:w-auto'>
                    <Contact_Icon border="#3A8EF6"/>
                    <span className='ml-2 text-sm font-semibold text-blue-500'>Reservasi</span>
                </button>
               </div>
            </div>
        </div>
    )
}

export default Reservas