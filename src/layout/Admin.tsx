import  { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import NavbarMenu from '~/components/NavBar'
import SidebarLayout from '~/components/SliderBar'
import routes from '~/settings/routes'

const AdminMain = () => {
  const location = useLocation()

  const [currentRoute, setCurrentRoute] = useState('Main Dashboard')

  const [collapsed, setCollapsed] = useState(false)

  const [toggledMobile, setToggledMobile] = useState(false)

  const getRoutes = (routes: RoutesType[]): JSX.Element[] => {
    const allRoutes: JSX.Element[] = []

    routes.forEach((child) => {
      child.children.forEach((item, key) => {
        if (item.layout === '/admin') {
          const mainRoute = <Route path={`/${item.path}`} element={item.component} key={key} />
          allRoutes.push(mainRoute)

          if (item.children && item.children.length > 0) {
            const nestedRoutes: JSX.Element[] = getRoutes([{ children: item.children }])
            allRoutes.push(...nestedRoutes)
          }
        }
      })
    })
    return allRoutes
  }

  const getActiveRoute = (routes: RoutesType[], currentPath: { pathname: string }): string => {
    for (const route of routes) {
      if (route.children && route.children.length > 0) {
        for (const childNext of route.children) {
          if (currentPath.pathname === childNext.layout + '/' + childNext.path) {
            setCurrentRoute(childNext.name)
            return childNext.name
          }

          if (childNext.children && childNext.children.length > 0) {
            for (const child of childNext.children) {
              if (currentPath.pathname === child.layout + '/' + child.path) {
                setCurrentRoute(child.name)
                return child.name
              }
            }
          }
        }
      }
    }

    setCurrentRoute('Main Dashboard')
    return 'Main Dashboard'
  }

  useEffect(() => {
    getActiveRoute(routes, location)
  }, [location])

  return (
    <div className='bg-light dark:bg-dark w-full'>
      <div className=' w-full flex'>
        <div className='xl:fixed bottom-0 left-0 top-0 '>
          <SidebarLayout
            routes={routes}
            collapsed={collapsed}
            toggledMobile={toggledMobile}
            setToggledMobile={setToggledMobile}
          />
        </div>

        <main className={` w-full p-3 md:p-5  ${!collapsed ? 'xl:ml-[250px]' : 'xl:ml-[70px]'}`}>
          <NavbarMenu
            brandText={currentRoute}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            toggledMobile={toggledMobile}
            setToggledMobile={setToggledMobile}
          />
          <div className='mx-auto  p-2 md:pr-2 '>
            <Routes>
              {getRoutes(routes)}
              <Route path='/' element={<Navigate to='/admin/default' replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}
export default AdminMain
