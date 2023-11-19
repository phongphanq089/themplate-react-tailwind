import React from 'react'
import ReactApexChart from 'react-apexcharts'

type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'rangeArea'
  | 'treemap'
const ApexChart = ({
  chartData,
  chartOptions,
  height,
  type
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartData: any
  chartOptions: object
  height?: string
  type: ChartType
}) => {
  const [data, setData] = React.useState([])
  const [options, setOptions] = React.useState({})

  React.useEffect(() => {
    setData(chartData)
    setOptions(chartOptions)
  }, [chartData, chartOptions])

  return <ReactApexChart options={options} series={data} type={type} width='100%' height={height ? height : 'auto'} />
}

export default ApexChart
