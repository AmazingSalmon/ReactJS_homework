import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import people from './data';
function App() {
  const [people1, setPeople] = useState(people);
  const [index, setIndex] = useState(0);
  const showNextSlide = () => {
    if(index === people1.length - 1){
      setIndex(0);
    } else {
      setIndex(index+1);
    }
  }
  const showPrevSlide = () => {
    if(index===0){
      setIndex(people1.length -1);
    } else {
      setIndex(index - 1);
    }
  }
  useEffect(()=>{
    let slider = setInterval(()=>{
      index === 0? setIndex(people1.length - 1) : setIndex(index - 1);
    }, 2000);
    return ()=>clearInterval(slider);
  }, [index, people1.length]);
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>reviews</span>
        </h2>
      </div>
      <div className='section-center'>
        {people1.map((person, personIndex)=>{
          const{id,image,name,title,quote}=person;
          let position = "nextSlide";
          if(personIndex === index){
            position = "activeSlide";
          }
          if (
            personIndex=== index - 1 || 
            (personIndex === people1.length - 1 && index === 0)
          ) {
            position = "lastSlide";
          }
          return(
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          );
        })}
        <button className='prev' onClick={showPrevSlide}>
          <FiChevronLeft/>
        </button>
        <button className='next' onClick={showNextSlide}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
  );
}

export default App;
