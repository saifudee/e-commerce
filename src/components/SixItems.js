import React from 'react';
import list from '../data';
import Cards from './Cards';
import { Link } from 'react-router-dom';

const SixItems = ({item,handleClick}) => {
    const sixItem = list.slice(0,6)
  
  return (

    <Link to='/product'>
    <section className='crypto_list'>
        {
            sixItem.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
   </Link>
  )
}

export default SixItems