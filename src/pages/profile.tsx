import { NextPage } from 'next/types'

import {
  IcAccount,
  IcEmail,
  IcInstagram,
  IcProfile,
  IcSettings,
  IcTwitter,
} from '../components/icons'

import { UnderlinedTabs } from '../components/tabs'
import Layout from '../components/templates/Layout'
import Card from '../components/templates/shortcodes/card'
import { useEffect, useState } from 'react'
import User from '../core/User'
import Section from '../components/dashboard/Section'
import Dropdown from '../components/widgets/dropdown'
import { Line1 } from '../components/charts/Line'
import { List } from '../components/dashboard/List'
import Breadcrumb from '../components/breadcrumbs'

type ProfilePageProps = {}

const Tab0 = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed
    lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien
    pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget
    felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque
    massa placerat duis ultricies.
  </div>
)

const Tab1 = () => (
  <div>
    Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At
    quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor
    urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis
    parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue.
    Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet.
    Augue lacus viverra vitae congue eu.
  </div>
)

const Tab2 = () => (
  <div>
    Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.
    Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla
    aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique
    senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc
    pulvinar sapien et ligula.
  </div>
)

const tabs = [
  {
    index: 0,
    title: 'Perfil',
    icone: <IcProfile />,
    active: true,
    content: <Tab0 />,
  },
  {
    index: 1,
    title: 'Configurações',
    icone: <IcSettings />,
    active: false,
    content: <Tab1 />,
  },
  {
    index: 2,
    title: 'Endereço',
    icone: <IcAccount />,
    active: false,
    content: <Tab2 />,
  },
]

const itemsBreadcrumbs = [
  { title: 'Home', url: '/dashboard', last: false },
  { title: 'Associado', url: '/associado', last: false },
  { title: 'Perfil', url: '/profile', last: true },
]

const ProfilePage: NextPage<ProfilePageProps> = (props) => {
  const [user, setUser] = useState<User>()

  return (
    <div> Profile </div>

    // <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
    //   <div className="pt-4 px-4">
    //     <div className="flex flex-row mb-4">
    //       <div className="w-full">
    //         <Breadcrumb items={itemsBreadcrumbs} home={true} icon="chevrons" />
    //       </div>
    //     </div>

    //     {/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4"> */}
    //     <Card>
    //       <div className="intro-y box px-5 pt-0 mt-0">
    //         <div className="flex flex-1 lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
    //           <div className="flex flex-1 px-5 items-start justify-start lg:justify-start">
    //             <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
    //               <img
    //                 alt="Icewall Tailwind HTML Admin Template"
    //                 className="rounded-full"
    //                 src="/images/users/lana-byrd.png"
    //               />
    //             </div>
    //             <div className="ml-5">
    //               <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
    //                 {user?.name}
    //               </div>
    //               <div className="text-slate-500">Software Engineer</div>
    //             </div>
    //           </div>
    //           <div className="mt-0 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400  lg:border-t-0 pt-0 lg:pt-0">
    //             <div className="font-medium text-start lg:text-left lg:mt-3">
    //               Contact Details
    //             </div>
    //             <div className="flex flex-col justify-center items-start lg:items-start mt-4">
    //               <div className="truncate sm:whitespace-normal flex items-center">
    //                 <IcEmail />
    //                 {user?.email}
    //               </div>
    //               <div className="truncate sm:whitespace-normal flex items-center mt-3">
    //                 <IcInstagram />
    //                 Instagram Nicolas Cage
    //               </div>
    //               <div className="truncate sm:whitespace-normal flex items-center mt-3">
    //                 <IcTwitter />
    //                 Twitter Nicolas Cage
    //               </div>
    //             </div>
    //           </div>
    //           <div className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5  lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-0 lg:pt-0">
    //             <div className="text-center rounded-md w-20 py-3">
    //               <div className="font-medium text-primary text-xl">201</div>
    //               <div className="text-slate-500">Orders</div>
    //             </div>
    //             <div className="text-center rounded-md w-20 py-3">
    //               <div className="font-medium text-primary text-xl">1k</div>
    //               <div className="text-slate-500">Purchases</div>
    //             </div>
    //             <div className="text-center rounded-md w-20 py-3">
    //               <div className="font-medium text-primary text-xl">492</div>
    //               <div className="text-slate-500">Reviews</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" flex flex-wrap">
    //         <div className="w-full">
    //           <UnderlinedTabs tabs={tabs} />
    //         </div>
    //       </div>
    //     </Card>

    //     <div className="mt-4 mb-4 w-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2  gap-4">
    //       <div className="flex flex-2 ">
    //         <Section
    //           title="Atendimentos"
    //           description={<span>por mês</span>}
    //           right={<Dropdown />}
    //         >
    //           <div className="flex flex-row w-full">
    //             <Line1 />
    //           </div>
    //         </Section>
    //       </div>

    //       <div className="flex flex-1">
    //         <Section
    //           title="Atendimentos"
    //           description={<span>Por demanda</span>}
    //           right={<Dropdown />}
    //         >
    //           <div className="flex flex-row w-full">
    //             <List />
    //           </div>
    //         </Section>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
  )
}

export default ProfilePage
