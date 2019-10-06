import React from 'react';

import AddIcon from 'assets/add.png';

const NewCardButton = () => (
    <button className='newCardButton'>
        <img src={AddIcon} alt=""/>
    </button>
);

export default NewCardButton;