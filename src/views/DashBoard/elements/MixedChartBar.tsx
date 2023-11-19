import { MixedChartData, MixedChartOption } from '~/components/charts/variable'
import ApexChart from '~/components/charts/ApexChart'
import { Card } from '@material-tailwind/react'

const MixedChartBar = () => {
  return (
    <Card className='dark:bg-navy-800 p-5'>
      <ApexChart chartData={MixedChartData} chartOptions={MixedChartOption} type='bar' />
    </Card>
  )
}

export default MixedChartBar
