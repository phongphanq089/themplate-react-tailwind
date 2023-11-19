import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface Props {
  action: JSX.Element
  children: React.ReactNode
}

export default function MenuDropDown({ action, children }: Props) {
  return (
    <div className='text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full'>{action}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute  right-1/2  mt-6 w-56 origin-top-right divide-y !translate-x-[-50%] divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
