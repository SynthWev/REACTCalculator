import React from 'react';
import '../styles/Screen.css'

// Another way to declare functional components: like an arrow function. This syntaxis is used for simple components.
const Screen = ({ input }) => (
    <div className='input'>
        { input }
    </div>
);

export default Screen;