import React, { useContext } from 'react'
import { ItemContext } from '../hooks/items'

const Header = () => {
  const { itemStore } = useContext(ItemContext)
  const dietaries = {}
  /* Create a list of dietaries in the format
    {
      'dv': 1,
      'n1': 2
    }
  */
  itemStore?.previewItems.forEach(i => {
    i.dietaries.forEach(d => {
      if (!dietaries[d]) dietaries[d] = 0
      dietaries[d]++
    })
  })
  return (
    <div className='row'>
      <div className='col-6 menu-summary-left'>
        <span>{itemStore?.previewItems?.length || 0} items</span>
      </div>
      <div className='col-6 menu-summary-right'>
        {Object.keys(dietaries).map(d => (
          <span key={d}>
            {dietaries[d]}x <span className='dietary'>{d}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Header
