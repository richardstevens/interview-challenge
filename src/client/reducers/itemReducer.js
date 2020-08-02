let newState

const ListReducer = (state, action) => {
  switch (action.type) {
    case 'addAll':
      newState = {...state}
      newState.items = action.data
      return newState
    case 'addPreview':
      newState = {...state}
      // Don't add another one?
      // if (newState.previewItems.filter(i => i.id === action.data).length) return newState
      var item = newState.items.filter(i => i.id === action.data)
      if (!item) return newState
      newState.previewItems.push({ ...item[0], pid: `${item[0].id}-${newState.previewItems.length}` })
      return newState
    case 'removePreview':
      newState = {...state}
      newState.previewItems = newState.previewItems.reduce((items, i) => {
        if (i.pid === action.data) return items
        items.push(i)
        return items
      }, [])
      return newState
    default:
      return state
  }
}

export default ListReducer
