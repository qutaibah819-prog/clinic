
import partner1 from '@/public/image 10.jpg'
import partner2 from '@/public/image 11.png'

import partner3 from '@/public/image 6.png'

import partner4 from '@/public/image 9.jpg'
import partner5 from '@/public/image 12.jpg'
import Image from 'next/image'

const  Partner_bar = () => {
  return (
    <div className="min-h-[240px] w-full py-8 sm:min-h-[300px]">
        <div className='flex h-full flex-col items-center justify-center gap-6'>
            <h1 className="text-2xl font-bold text-center">Partner Kami</h1>
            <div className='flex w-full flex-wrap items-center justify-center gap-5 sm:gap-8 lg:justify-between lg:px-5'>
                 <Image src={partner1} width={130} height={130} alt="partner1"  className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 lg:h-[130px] lg:w-[130px]"/>
                                 <Image src={partner2} width={130} height={130} alt="partner2"  className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 lg:h-[130px] lg:w-[130px]"/>

                                <Image src={partner3} width={130} height={130} alt="partner3"  className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 lg:h-[130px] lg:w-[130px]"/>

                                <Image src={partner4} width={130} height={130} alt="partner4"  className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 lg:h-[130px] lg:w-[130px]"/>

                                <Image src={partner5} width={130} height={130} alt="partner5"  className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 lg:h-[130px] lg:w-[130px]"/>


            </div>
                               

        </div>
    </div>
  )
}

export default Partner_bar