
import Image from "next/image"
import image from "../public/unsplash_jGmBZypoFPc.jpg"
import Button from "@/component/btn"
import Contact_Icon from "@/icon/contact"

const Pelayanan=()=>{
    return(
        <div className="flex w-full flex-col items-center gap-8 py-8 md:flex-row md:gap-12">
            <Image src={image} width={400} height={300} alt="Pelayanan" className="h-auto w-full max-w-[400px] object-cover md:w-[45%]" />
    
    <div className="w-full space-y-5 md:flex-1">
        <h1 className="text-2xl font-bold">
            Pelayanan terbaik dari parah Ahli Medis
        </h1>
        <p className="text-gray-500 text-sm">
Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan 
dengan fungsi menyediakan pelayanan paripurna (komprehensif).
        </p>

            <Button text="Reservasi" icon={<Contact_Icon/>}  className="mt-5 h-[40px] w-full items-center gap-3 text-sm sm:w-[150px]"/>

    </div>


        </div>
    )
}

export default Pelayanan