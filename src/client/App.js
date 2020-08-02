import React from 'react'
import ItemList from './components/itemList'
import PreviewItemList from './components/previewItemList'
import Header from './components/header'
import { ItemProvider } from './hooks/items'
import './app.css'

export default () => (
  <ItemProvider>
    <div className='wrapper'>
      <div className='menu-summary'>
        <div className='container'>
          <Header />
        </div>
      </div>
      <div className='container menu-builder'>
        <div className='row'>
          <ItemList />
          <PreviewItemList />
        </div>
      </div>
    </div>
  </ItemProvider>
)
