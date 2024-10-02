import React from 'react';
import items from './data';

const Categories = ({filterItems}) => {
    const menuItems = Array.from(new Set(items.map(item => item.category)));
    return (
        <div className='btn-container'>
      <button className='filter-btn' onClick={()=>filterItems("all")}>
        All
      </button>
      {menuItems.map((category)=>{
        return (
          <button className='filter-btn' onClick={()=>filterItems(category)}>
          {category}
          </button>
        );
      })}
    </div>
    );
};

export default Categories;