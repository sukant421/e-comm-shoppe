import React from 'react'
import WidgetTray from './WidgetTray'
import TopNav from '../navBar/TopNav'

export default function DashBoard() {
  return (
    <div className='p-2 h-100'>
        <WidgetTray widgetType="rounded" />
        <WidgetTray widgetType="banner" />
        <WidgetTray widgetType="carousel" />
        <WidgetTray widgetType="rectangle" />
        <WidgetTray widgetType="rectangle" />
        <WidgetTray widgetType="largeTile" />
    </div>
  )
}
