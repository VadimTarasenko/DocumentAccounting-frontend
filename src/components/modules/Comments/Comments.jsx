import React, { useState } from 'react';
import classNames from 'classnames';

import { Comment, Button } from 'components/reusable';

function Comments({ className }) {

  const [newCommentText, setNewCommentText] = useState('');

  const handleNewCommentInput = (e) => {
    setNewCommentText(e.target.value);
  }

  return (
    <div className={classNames('comments', className)}>
      <div className='comments__items'>
        <div className='comments__item'>
          <Comment
            fullName='Dasha Gulenkova'
            time='20.01.2019 13:41'
            text='Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.'
          />
        </div>
        <div className='comments__item'>
          <Comment
            fullName='Uliyana Menik'
            time='20.01.2019 16:11'
            text='Nobody has time to copy & paste though lol. Why not just make a "cool" font to dl so their keyboard just types it that way. I only know of 2 apps so far that make text the other person can actually see in text messages everything else if just so you can see it. Alotta ppl would dl that. :)'
          />
        </div>
        <div className='comments__item'>
          <Comment
            fullName='Viktor Sirik'
            time='20.01.2019 19:01'
            text='Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.'
          />
        </div>
      </div>
      <div className='comments__newComment'>
        <div className='comments__newCommentDescription'>Новий коментарій:</div>
        <textarea onChange={handleNewCommentInput} cols="30" rows="10" ></textarea>
        <div className='comments__actions'>
          <Button color='primary' disabled={!Boolean(newCommentText)}>отправить</Button>
        </div>
      </div>
    </div>
  );
}

export default Comments;