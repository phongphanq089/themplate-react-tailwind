import { MdHome, MdOutlineDashboardCustomize, MdOutlineShoppingCart } from 'react-icons/md'
import DashBoard from '~/views/DashBoard'
import FormCustom from '~/views/Forms/FormCustom'
import FormEditor from '~/views/Forms/FormEditor'
import Autocomplete from '~/views/Forms/FormElements/components/Autocomplete'
import Button from '~/views/Forms/FormElements/components/Button'
import FormHorizontal from '~/views/Forms/FormHorizontal'
import FormLayout from '~/views/Forms/FormLayout'
import FormValidation from '~/views/Forms/FormValidation'
import FormVertical from '~/views/Forms/FormVertical'
import FormWizard from '~/views/Forms/FormWizard'
import { LuLayoutDashboard } from 'react-icons/lu'
import { BsLayoutTextSidebar } from 'react-icons/bs'
import { FaFileAlt, FaGripVertical, FaFileUpload, FaFileSignature, FaFilePowerpoint } from 'react-icons/fa'

const routes: RoutesType[] = [
  {
    subTitle: 'DashBoard',
    children: [
      {
        name: 'Main Dashboard',
        layout: '/admin',
        path: 'default',
        icon: <MdHome className='h-6 w-6' />,
        component: <DashBoard />
      }
    ]
  },
  {
    subTitle: 'Form',
    children: [
      {
        name: 'Form element',
        layout: '/admin',
        icon: <MdOutlineDashboardCustomize className='h-6 w-6' />,
        children: [
          {
            name: 'Autocomplete',
            layout: '/admin',
            path: 'form/form-elements/autocompleted',
            icon: <MdOutlineShoppingCart className='h-6 w-6' />,
            component: <Autocomplete />
          },
          {
            name: 'Button',
            layout: '/admin',
            path: 'form/form-elements/button',
            icon: <MdOutlineShoppingCart className='h-6 w-6' />,
            component: <Button />
          }
        ]
      },
      {
        name: 'FormLayout',
        layout: '/admin',
        path: 'form/form-layout',
        icon: <LuLayoutDashboard className='h-6 w-6' />,
        component: <FormLayout />
      },

      {
        name: 'FormHorizontal',
        layout: '/admin',
        path: 'form/form-horizontal',
        icon: <BsLayoutTextSidebar className='h-6 w-6' />,
        component: <FormHorizontal />
      },
      {
        name: 'FormVertical',
        layout: '/admin',
        path: 'form/form-vertical',
        icon: <FaGripVertical className='h-6 w-6' />,
        component: <FormVertical />
      },
      {
        name: 'FormCustom',
        layout: '/admin',
        path: 'form/form-custom',
        icon: <FaFileAlt className='h-6 w-6' />,
        component: <FormCustom />
      },
      {
        name: 'FormWizard',
        layout: '/admin',
        path: 'form/form-wizard',
        icon: <FaFilePowerpoint className='h-6 w-6' />,
        component: <FormWizard />
      },
      {
        name: 'FormValidation',
        layout: '/admin',
        path: 'form/form-validation',
        icon: <FaFileUpload className='h-6 w-6' />,
        component: <FormValidation />
      },
      {
        name: 'FormEditor',
        layout: '/admin',
        path: 'form/form-editor',
        icon: <FaFileSignature className='h-6 w-6' />,
        component: <FormEditor />
      }
    ]
  }
]

export default routes
