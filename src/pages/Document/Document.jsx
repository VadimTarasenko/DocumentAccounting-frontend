import React, { useEffect } from 'react';

import { ContentWrapper, Button } from 'components/reusable';
import { Header, Comments } from 'components/modules';
// import { getSearchValueByKey } from 'utilities/location';

function Document() {

  useEffect(() => {
    // const documentId = getSearchValueByKey('id');
  }, []);


  return (
    <div className='documentPage'>
      <Header />
      <ContentWrapper>
        <h1>Документ "Document1.pdf"</h1>
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