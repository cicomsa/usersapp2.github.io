import React from 'react'
import { useLocation } from 'react-router-dom'
import Title from '../Title'
import PageLink from '../PageLink'
import Description from '../Description'
import Table from '../Table'
import data from '../../data/pages.json'
import './index.css'

const components = {
  pageTitle: Title,
  pageDescription: Description,
  table: Table
}

const Content = () => {
  const location = useLocation()
  const pathName = location.pathname

  // data should come from an API call/GraphQL query - mock functionality not implemented
  const content = data.find(content => content.path === pathName)
  const contentKeys = Object.keys(content)

  return (
    <>
      <div className="links-wrapper">
        {
          data
            .filter(content => content.path !== pathName)
            .map(content => <PageLink path={content.path} linkTitle={content.linkTitle}/>)
        }
      </div>
      {
        contentKeys
          .filter(key => key !== 'path' && key !== 'linkTitle')
          .map(key => {
          const Section = components[key]

          return <Section key={key} {...content}/>
        })
      }
    </>
  )
}

export default Content
