// @flow
import * as React from 'react'
import {
  IconeAjuda,
  IconeArquivos,
  IconeAtendimento,
  IconeCadastro,
  IconeDashboard,
  IconeLogin,
  IconeLogout,
  IconeSearch,
  IconeUser,
} from '../icons'
import MenuItem from './MenuItem'

interface SidebarProps {}

const SidebarDashboard: React.FC<SidebarProps> = (props) => {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {/* <li>
                  <form action="#" method="GET" className="lg:hidden">
                    <label className="sr-only">Search</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {IconeSearch}
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="mobile-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </li> */}
                <MenuItem
                  url="/dashboard"
                  texto="Dashboard"
                  icone={IconeDashboard}
                />

                <MenuItem
                  url="/atendimento"
                  texto="Atendimento"
                  icone={IconeAtendimento}
                />

                <MenuItem
                  url="/cadastro"
                  texto="Requerimento"
                  icone={IconeArquivos}
                />

                <MenuItem
                  url="/associado"
                  texto="Associados"
                  icone={IconeUser}
                />

                <MenuItem
                  url="/cadastro"
                  texto="Cadastro"
                  icone={IconeCadastro}
                />

                <MenuItem
                  url="/config"
                  texto="Configurações"
                  icone={IconeLogin}
                />

                <MenuItem
                  url="/login"
                  texto=" Sair do sistema"
                  icone={IconeLogout}
                />
              </ul>

              <ul className="space-y-2 pb-2">
                <MenuItem url="/config" texto="Ajuda" icone={IconeAjuda} />
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div
        className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
        id="sidebarBackdrop"
      ></div>
    </>
  )
}

export default SidebarDashboard
