// create a add to collection component that will be used to add a new collection  to the database and then redirect to the collection page for that collection 

import  React, { useState }  from   'react'
import  { useDispatch }  from   'react-redux'
import  { useHistory }  from   'react-router-dom'
import  { addCollection }  from   '../features/collectionSlice'
import  { addAlbumToCollection }  from   '../features/albumSlice'

const  AddToCollection = ({ album }) => {
    const  dispatch = useDispatch()
    const  history = useHistory()
    const  [collectionName, setCollectionName] = useState('')

    const  handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCollection(collectionName))
        dispatch(addAlbumToCollection(album, collectionName))
        history.push(`/collection/${collectionName}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Collection Name" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} />
                <button type="submit">Add to Collection</button>
            </form>
        </div>
    )
}

export default  AddToCollection

