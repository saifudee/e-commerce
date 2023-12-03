import React from 'react';
import list from '../data';
import Cards from './Cards';

const Amazon = ({handleClick}) => {
   
  return (
    <section className='crypto_list'>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} isProductPage={true} isReadMore={true} />
            ))
        }
    </section>
  )
}

export default Amazon
