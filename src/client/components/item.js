import React from 'react'

const Item = ({ id, pid, name, dietaries, addItem, removeItem }) => (
  <li className='item' role='presentation' onClick={addItem.bind(this, pid || id)}>
    <h2>{name}</h2>
    <p>{dietaries.map((d, key) => <span key={key} className='dietary'>{d}</span>)}</p>
    {removeItem && <button type='button' onClick={removeItem.bind(this, pid)} className='remove-item'>x</button>}
  </li>
)

Item.defaultProps = {
  dietaries: [],
  addItem: () => {},
  removeItem: null
}

export default Item
