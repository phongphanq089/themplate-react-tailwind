import React from 'react'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { Link, NavLink } from 'react-router-dom'
import { DashBoardIcon1, Logo, avatar } from '~/assets'
import { FaPowerOff } from 'react-icons/fa'
import { Avatar, Button, Typography } from '@material-tailwind/react'

const SidebarLayout = (props: {
  routes: RoutesType[]
  collapsed: boolean
  toggledMobile: boolean
  setToggledMobile: React.Dispatch<React.SetStateAction<boolean>>
}): JSX.Element => {
  const { routes, collapsed, toggledMobile, setToggledMobile } = props

  const RenderMainTitle = ({ title }: { title: string | undefined }) => {
    return (
      <span className={`text-dark dark:text-white px-3 block font-bold  my-4 ${collapsed ? 'mx-auto w-[50px]' : ''} `}>
        {collapsed ? <img src={DashBoardIcon1} alt='icon sidebar' className='w-full h-auto' /> : title}
      </span>
    )
  }

  return (
    <Sidebar
      collapsed={collapsed}
      onBackdropClick={() => setToggledMobile(false)}
      toggled={toggledMobile}
      breakPoint='xl'
      className='siderbar-main bg-white dark:bg-navy-800 h-full '
    >
      <div
        className={`mb-2 p-4 relative ${
          collapsed ? 'border-2 border-indigo-200 border-b-blue-400' : 'border-b-[1px] border-blue-400 '
        }`}
      >
        <Link to={'/'}>
          <div className='flex items-center gap-1'>
            <img src={Logo} alt='logo' className='w-[70px] h-auto object-cover' />
            <h3 className={`text-dark dark:text-white text-5xl ${collapsed ? 'hidden' : 'block'}`}>EV</h3>
          </div>
        </Link>
      </div>
      <div className='simpale-bar max-h-[60%] 3xl:max-h-[80%] overflow-auto dark:bg-navy-800'>
        <Menu
          closeOnClick
          className='dark:bg-navy-800 h-full'
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0 || level > 0)
                return {
                  backgroundImage: active
                    ? 'linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%)'
                    : undefined,

                  ':hover': {
                    backgroundImage: 'linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%)'
                  }
                }
            }
          }}
        >
          {routes &&
            routes?.map((route, index) => {
              return (
                <div key={`${route.subTitle}-${index}`}>
                  <RenderMainTitle title={route.subTitle} key={index} />
                  {route?.children?.map((item, index) => {
                    return (
                      <React.Fragment key={`${item.name}-${index}-${index + 1}`}>
                        {item.path ? (
                          <NavLink to={item?.path}>
                            {({ isActive }) => {
                              return (
                                <MenuItem
                                  component={'div'}
                                  active={isActive ? true : false}
                                  icon={item?.icon}
                                  className='text-dark dark:text-white'
                                >
                                  {item.name}
                                </MenuItem>
                              )
                            }}
                          </NavLink>
                        ) : (
                          <SubMenu label={item?.name} icon={item?.icon} className='text-dark dark:text-white'>
                            {item.children &&
                              item.children?.map((item, index) => {
                                return (
                                  <React.Fragment key={`${item.name}-${index + 2}`}>
                                    {item?.path && (
                                      <NavLink to={item?.path}>
                                        {({ isActive }) => {
                                          return (
                                            <MenuItem
                                              component={'div'}
                                              active={isActive ? true : false}
                                              className='text-dark dark:text-white dark:bg-navy-800'
                                            >
                                              {item?.name}
                                            </MenuItem>
                                          )
                                        }}
                                      </NavLink>
                                    )}
                                  </React.Fragment>
                                )
                              })}
                          </SubMenu>
                        )}
                      </React.Fragment>
                    )
                  })}
                </div>
              )
            })}
        </Menu>
      </div>
      <div className='bg-blue-200 dark:bg-navy-900 h-[100px] w-full absolute bottom-0 right-0 flex items-center justify-center'>
        <div className='flex items-center gap-3'>
          <Avatar src={avatar} alt='avatar' className={`${collapsed ? 'hidden' : ''}`} />
          <div className={`${collapsed ? 'hidden' : ''}`}>
            <Typography variant='h6'>Tania Andrew</Typography>
            <Typography variant='small' color='gray' className='font-normal'>
              Web Developer
            </Typography>
          </div>
          <Button className={`${collapsed ? 'outline outline-offset-2 outline-1' : ''}`}>
            <FaPowerOff className=' text-dark dark:text-white ' />
          </Button>
        </div>
      </div>
    </Sidebar>
  )
}

export default SidebarLayout
