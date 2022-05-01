// @flow
import * as React from 'react'
import { IconeSearch } from '../icons'

interface NavbarProps {}

const NavbarDashboard: React.FC<NavbarProps> = (props) => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a className="text-xl font-bold flex items-center lg:ml-2.5">
              <img
                src="/images/logo_sigfas.png"
                className="h-10 mr-2"
                alt="Windster Logo"
              />
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center">
              <div className="-mb-1">
                <a
                  className="github-button"
                  href="https://github.com/themesberg/windster-tailwind-css-dashboard"
                  data-color-scheme="no-preference: dark; light: light; dark: light;"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub"
                >
                  <img
                    src="/images/logo-eq-wp.png"
                    className="h-8 mr-2"
                    alt="Windster Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDashboard
