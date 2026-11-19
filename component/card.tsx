import GlassIcon from "@/icon/glass_icon";
import Button from "./btn";
import Contact_Icon from "@/icon/contact";


const Card= ({title,desc,icon,icon_background}:{title:string,desc:string,icon:React.ReactNode,icon_background:string})=>{
return(
    <div className="h-full w-full rounded-lg bg-white p-[15px] shadow-md">
        <div className={`${icon_background} w-[50px] h-[50px] rounded-full  flex items-center justify-center p-2`}>
        {icon&& icon}
        </div>
      <h2 className="text-xl mt-3 font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{desc}</p>
    <Button text="Reservasi" icon={<Contact_Icon/>}  className="w-full mt-5 h-[40px] text-sm gap-10 items-center"/>
    </div>
  );
}

export default Card;