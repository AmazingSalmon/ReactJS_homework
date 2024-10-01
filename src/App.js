import React from 'react';
import Review from './Review';
function App() {
  return <h2>
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>
    </main>
  </h2>;
}

export default App;
