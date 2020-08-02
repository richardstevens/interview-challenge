import React, { useContext } from 'react'
import { ItemContext } from '../hooks/items'
import Item from './item'

const PreviewItemList = () => {
  const { itemStore, dispatch } = useContext(ItemContext)
  // Remove an item from the preview on right
  const removeItem = (id) => {
    dispatch({ type: 'removePreview', data: id })
  }
  return (
    <div className='col-8'>
      <h2>Menu preview</h2>
      <ul className='menu-preview'>
        {!itemStore?.previewItems.length && <li>No items found</li>}
        {itemStore?.previewItems.map(i => <Item key={i.pid} removeItem={removeItem} {...i} />)}
      </ul>
    </div>
  )
}

export default PreviewItemList
