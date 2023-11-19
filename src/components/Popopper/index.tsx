import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface Props {
  action: JSX.Element
  children: React.ReactNode
}

export default function Popopper({ action, children }: Props) {
  return (
    <div className='w-auto'>
      <Popover className='relative text-center'>
        {({ open }) => (
          <>
            <Popover.Button className={`${open ? 'text-blue-300' : 'text-blue-600'} focus:outline-none`}>
              {action}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute text-start left-1/2 z-10 mt-10 w-screen max-w-sm -translate-x-[90%] transform  px-4 sm:px-0 '>
                {children}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
