import React, { useEffect, useState } from 'react';

import { ContentWrapper, DocumentCard, Loader, NewCardButton } from 'components/reusable';
import { Header } from 'components/modules';

function Main(props) {

  const [isDataLoaded] = useState(true);

  const { documents } = props.documents;
  const { getDocuments } = props;

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  return (
    <div className='main-page'>
      <Header />
      <ContentWrapper>
        <h1>Главная</h1>
        <section className='section'>
          <h2 className='section__name'>Мої документи</h2>
          <div className='section__content'>
            <div className='main-page__documents'>
              {documents.map((document, i) =>
                <DocumentCard {...document} key={i} />
              )}
              <NewCardButton />
            </div>
          </div>
        </section>
        <section className='section'>
          <h2 className='section__name'>Всі документи</h2>
          <div className='section__content'>
            <div className='main-page__documents'>
              {documents.map((document, i) =>
                <DocumentCard {...document} key={i} />
              )}
            </div>
            {/* <div className='main-page__pagination'>
              <Pagination />
            </div> */}
          </div>
        </section>
        <div className='main-page__loader'>
          <Loader isOpen={!isDataLoaded} />
        </div>
      </ContentWrapper>
    </div >
  )
}

export default Main;