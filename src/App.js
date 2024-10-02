import React, { useState } from 'react';
import Menu from './Menu';
import items from './data';
import CategoriesNew from './Categories';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [Categories, setCategories] = useState([]);
  const filterItems = (category)=>{
    if(category==="all")
    {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category===category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className="manuSection">
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <CategoriesNew filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
