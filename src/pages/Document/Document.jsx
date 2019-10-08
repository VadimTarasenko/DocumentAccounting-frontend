import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ContentWrapper, Button } from 'components/reusable';
import { Header, Comments, AddDocument } from 'components/modules';
import ArrowIcon from 'assets/backArrow.svg';

function Document() {


  return (
    <div className='documentPage'>
      <Header />
      <ContentWrapper>
        <div className='documentPage__titleBlock'>
          <h1>Документ "Document1.pdf"</h1>
          <Link className='documentPage__backLink' to='/main'><img src={ArrowIcon} alt="arrow" /> На главную</Link>
        </div>
        <div className='documentPage__content'>
          <section className='section'>
            <h2 className='section__name'>Информация</h2>
            <div className='section__content'>
              <div className='documentPage__info'>
                <div className='documentPage__infoRow'>
                  <div className='documentPage__name'>Расширение:</div>
                  <div className='documentPage__value'>PDF</div>
                </div>
                <div className='documentPage__infoRow'>
                  <div className='documentPage__name'>Размер:</div>
                  <div className='documentPage__value'>240kb</div>
                </div>
                <div className='documentPage__infoRow'>
                  <div className='documentPage__name'>Добавлено:</div>
                  <div className='documentPage__value'>20.03.2019 15:07</div>
                </div>
              </div>
              <div className='documentPage__actions'>
                <Button color='primary'>Скачать</Button>
                <Button>Удалить</Button>
              </div>
            </div>
          </section>
          <section className='section'>
            <h2 className='section__name'>Комментарии</h2>
            <div className='section__content'>
              <Comments className='documentPage__comments' />
            </div>
          </section>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Document;