import React, { useReducer, useEffect, createContext } from 'react'
import itemReducer from '../reducers/itemReducer'

const initialState = {
  items: [],
  previewItems: []
}

const ItemContext = createContext({
  itemStore: initialState,
  dispatch: () => null
})

const ItemProvider = ({ children }) => {
  const [itemStore, dispatch] = useReducer(itemReducer, initialState)

  useEffect(() => {
    fetch('http://localhost:8080/api/items', {
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(items => {
        dispatch({ type: 'addAll', data: items?.items || [] })
      }, () => {
        // Error occured so just blank the items?
        dispatch({ type: 'addAll', data: [] })
      })
  }, [])
  return (
    <ItemContext.Provider value={{ itemStore, dispatch }}>
      {children}
    </ItemContext.Provider>
  )
}

export { ItemContext, ItemProvider }
