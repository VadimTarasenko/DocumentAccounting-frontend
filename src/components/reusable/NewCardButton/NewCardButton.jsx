import React from 'react';

import AddIcon from 'assets/add.png';

const NewCardButton = ({ onClick }) => (
    <button className='newCardButton' onClick={onClick}>
        <img src={AddIcon} alt="" />
    </button>
);

export default NewCardButton;