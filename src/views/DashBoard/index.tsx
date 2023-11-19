import Widget from '~/components/Widget'
import { FaUserCircle, FaUsers } from 'react-icons/fa'
import LineChart from './elements/LineChart'
import MixedChartBar from './elements/MixedChartBar'
import CardProduct from './elements/CardProduct'

import FormSubmit from './elements/FormSubmit'
import CardBlog from './elements/CardBlog'

const DashBoard = () => {
  return (
    <div>
      {/* ========== || RENDER LIST WIDGET DATA || ============= */}
      <div className='grid grid-cols-2   md:grid-cols-4 xl:grid-cols-6 gap-5 '>
        <Widget
          bgColor='!bg-rgba-6'
          title='Employees'
          number='120'
          color='text-blue-600'
          icon={<FaUserCircle className='h-[40px] w-[40px] text-blue-600' />}
        />
        <Widget
          bgColor='!bg-rgba-4'
          color='text-red-600'
          title='Clients'
          number='3,650'
          icon={<FaUsers className='h-[40px] w-[40px] text-red-600' />}
        />
        <Widget
          bgColor='!bg-rgba-5'
          color='text-yellow-600 dark:text-yellow-200'
          title='Clients'
          number='3,650'
          icon={<FaUsers className='h-[40px] w-[40px] text-yellow-600 dark:text-yellow-200' />}
        />
        <Widget
          bgColor='!bg-rgba-1'
          color='text-purple-500'
          title='Clients'
          number='3,650'
          icon={<FaUsers className='h-[40px] w-[40px] text-purple-500' />}
        />
        <Widget
          bgColor='!bg-rgba-2'
          color='text-green-600 dark:text-green-300'
          title='Clients'
          number='3,650'
          icon={<FaUsers className='h-[40px] w-[40px] text-green-600 dark:text-green-300 ' />}
        />
        <Widget
          bgColor='!bg-rgba-3'
          color='text-pink-700'
          title='Clients'
          number='3,650'
          icon={<FaUsers className='h-[40px] w-[40px] text-pink-700' />}
        />
      </div>
      {/* ====== || END WIDGET || ======= */}
      <div className='grid grid-cols-1 xl:grid-cols-3  mt-5 gap-5'>
        <div className='md:col-span-2'>
          {' '}
          <MixedChartBar />{' '}
        </div>
        <div className='w-full'>
          <LineChart />
        </div>
      </div>

      <div className='grid grid-cols-1  md:grid-cols-3  mt-5 gap-5'>
        <CardProduct />
        <FormSubmit />
        <CardBlog />
      </div>
    </div>
  )
}

export default DashBoard
