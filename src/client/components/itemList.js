import React, { useContext, useState, useEffect } from 'react'
import { ItemContext } from '../hooks/items'
import Item from './item'

const ItemList = () => {
  const { itemStore, dispatch } = useContext(ItemContext)
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')
  // Update the items in our filter list when the main store updates
  // When someone types, filter all items that have a name containing the value
  useEffect(() => {
    setItems(itemStore?.items.filter(i => i.name.includes(filter)))
  }, [itemStore.items, filter])
  // Add an item to the preview panel on right
  const addItem = (id) => {
    dispatch({ type: 'addPreview', data: id })
  }
  return (
    <div className='col-4'>
      <div className='filters'>
        <input className='form-control' onChange={(e) => setFilter(e.target.value)} placeholder='Name' />
      </div>
      <ul className='item-picker'>
        {!items.length && <li>No items found</li>}
        {items.map(i => <Item key={i.id} addItem={addItem} {...i} />)}
      </ul>
    </div>
  )
}

export default ItemList
