import { Button, Card, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { FaFile } from 'react-icons/fa'
import ApexChart from '~/components/charts/ApexChart'
import { LineChartData, LineChartOption } from '~/components/charts/variable'

const LineChart = () => {
  return (
    <Card className='w-full h-full dark:!bg-navy-800 p-5 '>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-5'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <span className='text-dark dark:text-white'>Click</span>
              {/* <Tooltip content={'adsklohasdloksa'} placement='bottom'>
                <RiErrorWarningFill />
              </Tooltip> */}
            </div>
            <span className='font-bold text-xl text-dark dark:text-white'> 42,3k</span>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <span className='text-dark dark:text-white'>CPC</span>
              {/* <Tooltip content={'adsklohasdloksa'} placement='bottom'>
                <RiErrorWarningFill />
              </Tooltip> */}
            </div>
            <span className='font-bold text-xl text-dark dark:text-white'> 42,3k</span>
          </div>
        </div>
        <div className='dropdown-lineChart'>
          <Menu>
            <MenuHandler>
              <Button>Last week</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Yesterday</MenuItem>
              <MenuItem>Today</MenuItem>
              <MenuItem>Last 7 days</MenuItem>
              <MenuItem>Last 30 days</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <ApexChart chartData={LineChartData} chartOptions={LineChartOption} type='line' height='250px' />

      <Button color='blue' className='w-fit flex items-center'>
        <FaFile className='mr-2 h-5 w-5' />
        Wiew full report
      </Button>
    </Card>
  )
}

export default LineChart
