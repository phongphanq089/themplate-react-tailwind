export const MixedChartData = [
  {
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  },
  {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }
]

export const MixedChartOption = {
  chart: {
    height: 350,
    type: 'line'
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Traffic Sources'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: [
    '01 Jan 2001',
    '02 Jan 2001',
    '03 Jan 2001',
    '04 Jan 2001',
    '05 Jan 2001',
    '06 Jan 2001',
    '07 Jan 2001',
    '08 Jan 2001',
    '09 Jan 2001',
    '10 Jan 2001',
    '11 Jan 2001',
    '12 Jan 2001'
  ],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [
    {
      title: {
        text: 'Website Blog'
      }
    },
    {
      opposite: true,
      title: {
        text: 'Social Media'
      }
    }
  ]
}

export const LineChartOption = {
  chart: {
    maxWidth: '100%',
    type: 'line',
    fontFamily: 'Inter, sans-serif',
    dropShadow: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 6,
    curve: 'smooth'
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -26
    }
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
    labels: {
      show: true,
      style: {
        fontFamily: 'Inter, sans-serif',
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  }
}

export const LineChartData = [
  {
    name: 'Clicks',
    data: [6500, 6418, 6456, 6526, 6356, 6456],
    color: '#1A56DB'
  },
  {
    name: 'CPC',
    data: [6456, 6356, 6526, 6332, 6418, 6500],
    color: '#7E3AF2'
  }
]
