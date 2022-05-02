import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useComponentVisible } from '../../app/hooks';
import { selecSidebarOpened, setSidebarOpenedValue } from './SidebarSlice';

export function Sidebar() {
  const [skipMount, setSkipMount] = useState(true);
	const { t } = useTranslation();
  const parentSideBarRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
	const sidebarOpened = useAppSelector(selecSidebarOpened)
  const dispatch = useAppDispatch()

  const closeSidebar = () => {
    setTimeout(() => {
      parentSideBarRef.current?.classList.remove("z-10");
      parentSideBarRef.current?.classList.add("-z-10");
    }, 200);
    setIsComponentVisible(false)
  }
  
  const { isComponentVisible, setIsComponentVisible } = useComponentVisible(false, parentSideBarRef, closeSidebar, dispatch, setSidebarOpenedValue);

  useEffect(() => {
    if (skipMount) setSkipMount(false);
    if (!skipMount) {
      if(sidebarOpened === true && !isComponentVisible) {
        openSidebar()
      } else if (sidebarOpened === true) {
        openSidebar()
      }
    }
  }, [sidebarOpened, isComponentVisible])

  const openSidebar = () => {
    parentSideBarRef.current?.classList.add("z-10");
    parentSideBarRef.current?.classList.remove("-z-10");
    setIsComponentVisible(true)
  }


	return (
    <div ref={parentSideBarRef} className="absolute min-h-screen flex -z-10">
      <div ref={sidebarRef} className={`sidebar bg-black text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 -translate-x-full left-0 transform relative transition duration-200 ease-in-out ${
          sidebarOpened ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="text-white flex items-center space-x-2 px-4 justify-between">
          <span className="text-sm text-white font-bold text-xl">{t('common.applicationNameShort')}</span>
          <button type="button" onClick={() => { dispatch(setSidebarOpenedValue(!sidebarOpened)); } }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => { closeSidebar() } }>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          <Link to='/' className="block py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 text-white font-bold">
            Home
          </Link>
        </nav>
      </div>
    </div>
	)
}

export default Sidebar
