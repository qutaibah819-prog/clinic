import Button from "@/component/btn";
import Btn_Icon from "@/icon/header_btn_icon";
import PlusIcon from "@/icon/plus";


const Header=()=>{
return (
    <header className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 bg-[#f2f6ff] px-4 py-4 sm:px-8 lg:px-[100px] md:flex-nowrap">
       <div className="relative inline-block">
      {/* النص الأساسي */}
      <h1 className="text-2xl font-bold text-brand-dark sm:text-3xl">Klinik 24.</h1>

      {/* الأيقونة المتموضعة بدقة في الزاوية */}
      <div className="absolute -top-6 -right-8">
        <PlusIcon  />
      </div>
    </div>
        <div className="order-3 w-full md:order-none md:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-black/50 sm:gap-x-6">
                <li className="cursor-pointer hover:text-blue-600">Beranda</li>
                <li className="cursor-pointer hover:text-blue-600">Tentang Kami</li>
                <li className="cursor-pointer hover:text-blue-600">Layanan</li>
                <li className="cursor-pointer hover:text-blue-600">Kontak Kami</li>
            </ul>
        </div>
        <div className="ml-auto md:ml-0">
            
                <Button icon={<Btn_Icon className="mr-2" />} text="Register Pasien " />
        </div>
    </header>
)
}

export default Header;

