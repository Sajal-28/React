import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()  

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
    return (
        <div className='w-[18vw] h-80 bg-white relative rounded-xl overflow-hidden'>
            <a target="_blank" className='h-full' href={item.url}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} alt="" /> : ''}
            </a>
            <div id='bottom' className='w-full px-4 py-5 absolute text-white bottom-0 flex justify-between items-center gap-3'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                <button
                    onClick={() => {
                        removeFromCollection(item)
                        
                    }}
                    className='bg-indigo-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-95'>Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard   