import { useTheme } from 'next-themes'
import { FiMenu } from 'react-icons/fi'
import { RiSunFill, RiMoonFill, RiErrorWarningFill } from 'react-icons/ri'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Popopper from '../Popopper'
import { avatar, user1, user2, user3, user4, user5 } from '~/assets'
import { BiSolidBellRing } from 'react-icons/bi'
import MenuDropDown from '../Menu'
import { MdEmail } from 'react-icons/md'
import React from 'react'
import { Avatar, Badge, Button, Input } from '@material-tailwind/react'

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: IconThree
  }
]

const listNotification = [
  {
    name: 'Roman Joined the Team!',
    desc: 'Congratulate Him',
    avatar: user1
  },
  {
    name: 'New message received',
    desc: 'Salma sent you nnew message',
    avatar: user2
  },
  {
    name: 'New Payment received',
    desc: 'Check your earnings',
    avatar: user3
  },
  {
    name: 'New Payment received',
    desc: 'Check your earnings',
    avatar: user4
  },
  {
    name: 'New Payment received',
    desc: 'Check your earnings',
    avatar: user5
  }
]

const NavbarMenu = (props: {
  brandText: string
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  toggledMobile: boolean
  setToggledMobile: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { brandText, collapsed, toggledMobile, setCollapsed, setToggledMobile } = props
  const { theme, setTheme } = useTheme()

  return (
    <div className='sticky top-4 z-40 flex flex-col md:flex-row md:items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]'>
      <div className='ml-[6px] mb-3 xl:mb-0s'>
        <div className='h-6 pt-1'>
          <a
            className='text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white'
            href=' '
          >
            Pages
            <span className='mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white'> / </span>
          </a>
          <Link
            className='text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white'
            to='#'
          >
            {brandText}
          </Link>
        </div>
        <p className='shrink text-2xl xl:text-[33px] capitalize text-navy-700 dark:text-white'>
          <Link to='#' className='font-bold capitalize hover:text-navy-700 dark:hover:text-white'>
            {brandText}
          </Link>
        </p>
      </div>

      <div className='relative mt-[3px] px-5 flex h-[70px] w-full flex-grow items-center justify-between gap-2 rounded-full bg-white  py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[500px] md:flex-grow-0 md:gap-1  xl:gap-2'>
        <Input
          icon={<FaSearch />}
          crossOrigin={undefined}
          className='border !border-gray-700'
          placeholder='search...'
        />
        <div className=' flex gap-4 items-center '>
          <span className='cursor-pointer text-center hidden xl:block' onClick={() => setCollapsed(!collapsed)}>
            <FiMenu className='h-6 w-6 text-blue-600 ' />
          </span>
          <span
            className='cursor-pointer text-center block xl:hidden '
            onClick={() => setToggledMobile(!toggledMobile)}
          >
            <FiMenu className='h-6 w-6 text-blue-600 ' />
          </span>

          <Popopper
            action={
              <RiErrorWarningFill
                className={`
                mt-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
              />
            }
          >
            <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5'>
              <div className='bg-light dark:bg-navy-800'>
                <div className='relative grid gap-8 p-7'>
                  {solutions.map((item, index) => (
                    <a
                      key={`${index + 1} - ${item.name}`}
                      href={item.href}
                      className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-300 dark:hover:bg-navy-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50'
                    >
                      <div className='flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'>
                        <item.icon aria-hidden='true' />
                      </div>
                      <div className='ml-4 '>
                        <p className='text-sm font-medium text-dark dark:text-white'>{item.name}</p>
                        <p className='text-sm text-gray-500'>{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className='p-4 dark:bg-navy-900'>
                  <a
                    href='##'
                    className='flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-300 dark:hover:bg-navy-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50'
                  >
                    <span className='flex items-center'>
                      <span className='text-sm font-medium text-dark dark:text-white'>Documentation</span>
                    </span>
                    <span className='block text-sm text-gray-500'>Start integrating products and tools</span>
                  </a>
                </div>
              </div>
            </div>
          </Popopper>

          <Popopper
            action={
              <BiSolidBellRing
                className={`
                mt-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
              />
            }
          >
            <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 '>
              <div className='bg-light dark:bg-navy-800 p-3 '>
                <div className='flex items-center justify-between p-5'>
                  <h3 className='text-dark dark:text-white'>Notifications</h3>
                  <Badge color='purple'>5 news</Badge>
                </div>
                <div className='max-h-[300px] overflow-auto'>
                  <div className='relative grid gap-8 p-7'>
                    {listNotification.map((item, index) => (
                      <a
                        key={`${index + 1} - ${item.name}`}
                        href={'#'}
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-300 dark:hover:bg-navy-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50'
                      >
                        <div className='flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-15 sm:w-15'>
                          <Avatar src={item.avatar} alt={item.name} />
                        </div>
                        <div className='ml-3'>
                          <p className='text-sm font-medium text-dark dark:text-white'>{item.name}</p>
                          <p className='text-sm text-gray-500'>{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className='py-4 px-3'>
                  <Button color='blue' className='w-full text-center'>
                    See all Notification
                  </Button>
                </div>
              </div>
            </div>
          </Popopper>

          {/* <Popopper /> */}

          <span className='cursor-pointer'>
            {theme === 'dark' ? (
              <RiSunFill className='h-5 w-5 text-blue-600 ' onClick={() => setTheme('light')} />
            ) : (
              <RiMoonFill className='h-4 w-4 text-blue-600' onClick={() => setTheme('dark')} />
            )}
          </span>

          <MenuDropDown
            action={
              <div className='h-full w-[50px]'>
                <img src={avatar} alt='avatar' className='w-full h-auto object-cover' />
              </div>
            }
          >
            <div className='p-3 bg-light dark:bg-navy-800 w-[350px]'>
              <div className='max-h-[-400x]'>
                <div className='pb-4 border-b-[1px] border-gray-500'>
                  <h3 className='text-lg font-bold py-4 text-dark dark:text-white'>User Profile</h3>
                  <div className='flex items-center gap-5'>
                    <Avatar src={avatar} className='justify-start' size='lg'></Avatar>
                    <div className='space-y-1 font-medium dark:text-white'>
                      <div className='text-lg text-dark dark:text-white'>Jese Leos</div>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>designer</div>
                      <div className='flex item-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
                        <MdEmail className='block mt-1' />
                        <span className='block'>info.name@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='relative grid gap-8 p-7'>
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-300 dark:hover:bg-navy-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50'
                    >
                      <div className='flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'>
                        <item.icon aria-hidden='true' />
                      </div>
                      <div className='ml-4 '>
                        <p className='text-sm font-medium text-dark dark:text-white'>{item.name}</p>
                        <p className='text-sm text-gray-500'>{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <Button color='blue' className='text-center w-full'>
                Log Out
              </Button>
            </div>
          </MenuDropDown>
        </div>
      </div>
    </div>
  )
}

export default NavbarMenu

function IconOne() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <path d='M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z' stroke='#FB923C' strokeWidth='2' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <path
        d='M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27'
        stroke='#FB923C'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.804 30H29.1963L24.0001 21L18.804 30Z'
        stroke='#FDBA74'
        strokeWidth='2'
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='48' height='48' rx='8' fill='#FFEDD5' />
      <rect x='13' y='32' width='2' height='4' fill='#FDBA74' />
      <rect x='17' y='28' width='2' height='8' fill='#FDBA74' />
      <rect x='21' y='24' width='2' height='12' fill='#FDBA74' />
      <rect x='25' y='20' width='2' height='16' fill='#FDBA74' />
      <rect x='29' y='16' width='2' height='20' fill='#FB923C' />
      <rect x='33' y='12' width='2' height='24' fill='#FB923C' />
    </svg>
  )
}
