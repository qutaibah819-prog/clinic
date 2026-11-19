import Facebook from "@/icon/facebook";
import PlusIcon from "@/icon/plus";
import Whats from "@/icon/whats";
import Youtube from "@/icon/youtube";



const Footer = () => {
  return (
    <footer className="bg-[#0A0E31] h-auto px-[50px] pt-5 sm:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 pt-5">
                <div>
                 <div className="relative inline-block">
      {/* النص الأساسي */}
      <h1 className="text-2xl font-bold text-white sm:text-3xl">Klinik 24.</h1>

      {/* الأيقونة المتموضعة بدقة في الزاوية */}
      <div className="absolute -top-6 -right-8">
        <PlusIcon  />
      </div>
     
               </div>
                <p className="text-gray-400 text-sm mt-5">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>


               <div className="flex gap-5 mt-5">
<Youtube/>
<Facebook/>
<Whats/>
               </div>
            
            </div>


            <div>
              <p className="text-white/75 font-bold mb-3">Company Info</p>
              <ul>
                <li className="text-gray-400">About Us</li>
                <li className="text-gray-400">Contact</li>
                <li className="text-gray-400">Careers</li>
                <li className="text-gray-400">Press</li>

              </ul>
            </div>


           <div>
              <p className="text-white/75 font-bold mb-3">Cabang</p>
              <ul>
               <li className="text-gray-400">Tangerang</li>
                <li className="text-gray-400">Jakarta</li>
                <li className="text-gray-400">Surabaya</li>
                <li className="text-gray-400">Press</li>

              </ul>
            </div>

           <div>
              <p className="text-white/75 font-bold mb-3">Kontak Kami</p>
              <ul>
                <li className="text-gray-400">+626564465455</li>
                <li className="text-gray-400">info@klinik24.com</li>
                <li className="text-gray-400">Telp: +5646544654</li>

              </ul>
            </div>
        </div>
        <hr className="my-5 border-gray-600" />
        <p className="text-gray-400 text-sm text-center">
          &copy; 2023 Klinik 24. All rights reserved.
        </p>

    </footer>
  );
}

export default Footer;