import React from 'react'

function Cards({item}) {
  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-90 shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
        <figure>
            <img
            src={item.image}
            alt="books" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.name}
            <div className="badge  bg-yellow-200 text-black">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="px-2 py-1 rounded-lg border-black border-[2px] cursor-pointer hover:bg-yellow-200 hover:text-black  duration-200">Buy now</div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Cards
