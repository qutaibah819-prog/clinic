import CardAvatar from "@/component/card_avatar";



const Testimonial = () => {
  return (
    <div className='py-10'>
<div className="mb-[50px] flex flex-col items-center gap-3 text-center">
    <h1 className="text-2xl font-bold text-gray-800">Testimonial by Pasien</h1>
    <p className="text-gray-600 w-[60%]">Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
</div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
<CardAvatar imageUrl="/image 11.png" name="John Doe" description="Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

        <CardAvatar imageUrl="/image 6.png" name="John Doe" description="Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

        <CardAvatar imageUrl="/unsplash_jGmBZypoFPc.jpg" name="John Doe" description="Click edit button to change this text. Lorem ipsum dolor sit amet,7
         consectetur adipisicing elit. Quisquam, sint." />
           <CardAvatar imageUrl="/unsplash_jGmBZypoFPc.jpg" name="John Doe" description="Click edit button to change this text. Lorem ipsum dolor sit amet,7
         consectetur adipisicing elit. Quisquam, sint." />
        </div>
        

    </div>
  );
};

export default Testimonial;