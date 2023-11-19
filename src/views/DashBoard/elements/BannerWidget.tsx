import { Card } from 'flowbite-react'
import { Dashboard_2, avatar } from '~/assets'
import { CgArrowTopRight } from 'react-icons/cg'

const BannerWidget = () => {
  return (
    <Card className='!bg-blue-900 relative overflow-hidden'>
      <div className='flex items-center gap-4'>
        <img src={avatar} alt='avatar user banner' />
        <h3 className='text-xl'>Wellcome back Mathew Anderson</h3>
      </div>
      <div className='flex items-center gap-[60px]'>
        <div>
          <div className='flex items-center gap-1'>
            <span className='inline-block text-[30px] font-bold'>$2,340</span>
            <CgArrowTopRight className='text-blue-500 h-5 w-5  font-bold' />
          </div>
          <span>Today’s Sales</span>
        </div>
        <div>
          <div className='flex items-center gap-1'>
            <span className='inline-block text-[30px] font-bold'>35%</span>
            <CgArrowTopRight className='text-blue-500 h-5 w-5  font-bold' />
          </div>
          <span>Performance</span>
        </div>
      </div>
      <div className='absolute  bottom-0 right-0 max-w-[250px] h-auto'>
        <img src={Dashboard_2} alt='banner-image-dashboard' className='w-full h-auto object-cover' />
      </div>
    </Card>
  )
}

export default BannerWidget
