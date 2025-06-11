import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main className="app-main-content">
      <p>Main Content Area</p>
      <p>Below is an example of a Bootstrap button:</p>
      <button type="button" className="btn btn-primary">Primary Bootstrap Button</button>
      {/* Content for different pages will go here */}
    </main>
  );
}

export default MainContent;
