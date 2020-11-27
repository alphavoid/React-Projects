import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section className="container">
          <h2>{people.length} Birthdays Today</h2>
          <List people={people}/>
          <button onClick = {() => setpeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
