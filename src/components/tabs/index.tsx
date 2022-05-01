import React, { Children, FC, useState } from 'react'
import PropTypes from 'prop-types'

export const UnderlinedTabs = (tabs: any) => {
  const [openTab, setOpenTab] = useState(0)
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab: any, key: any) => (
          <li key={key} className="mr-2">
            <a
              href="#"
              onClick={() => {
                setOpenTab(tab.index)
              }}
              className={
                openTab === tab.index
                  ? 'inline-flex p-4 text-blue-600 rounded-t-lg border-b-2    border-blue-600 active dark:text-blue-500 dark:border-blue-500 group'
                  : 'inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
              }
            >
              {tab.icone}
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      {/* {tabs.map((tab: any, key: any) => (
        <div
          key={key}
          className={`tab-content ${
            openTab !== tab.index ? 'hidden' : 'block'
          }`}
        >
          {tab.content}
        </div>
      ))} */}
    </div>
  )
}

UnderlinedTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      content: PropTypes.element,
      title: PropTypes.any,
      icone: PropTypes.element,
    }),
  ).isRequired,
}
