import Card from "@/component/card"
import GlassIcon from "@/icon/glass_icon"
import Heart from "@/icon/heart"
import Needle from "@/icon/needle"



const   DaftarLyan = () => {

    return ( 
<div className='flex w-full flex-col gap-8 py-10 sm:gap-10'>
    
    <div className="relative mb-2 flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold ">Daftar Layanan</h1>
        <p className="w-full text-sm text-gray-600 md:w-[40%]">Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
    </div>
    <div className="grid w-full grid-cols-1 items-stretch justify-items-center gap-5 sm:grid-cols-2 xl:grid-cols-3">
<Card title="Apotek 24 Jam" 
desc="Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis" 
icon={<GlassIcon/>} 
icon_background="bg-[#855FCE]/20"/> 

     <Card title="Medical Check Up" 
        desc="Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis" 
        icon={<Heart/>} icon_background="bg-[#27AE60]/20"/>    

    <Card title="Professional Doctor" 
    desc="Toko tempat meramu dan menjual obat berdasarkan resep dokter serta memperdagangkan barang medis" 
    icon={<Needle/>} icon_background="bg-[#2F80ED]/20"/>    
   
    </div>
    
</div>
    )
}

export default DaftarLyan