import React, { useEffect, useState } from 'react';

import { ContentWrapper, DocumentCard, Loader, NewCardButton } from 'components/reusable';
import { Header, AddDocument } from 'components/modules';

function Main(props) {

  const [isAddDocumentModalOpen, setIsAddDocumentModalOpen] = useState(false);
  const [isDataLoaded] = useState(true);

  const { documents } = props.documents;
  const { getDocuments } = props;

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  const toggleAddModal = () => {
    setIsAddDocumentModalOpen(!isAddDocumentModalOpen);
  }

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
              <NewCardButton onClick={toggleAddModal} />
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
          </div>
        </section>
        <div className='main-page__loader'>
          <Loader isOpen={!isDataLoaded} />
        </div>
      </ContentWrapper>
      {isAddDocumentModalOpen && (
        <AddDocument handleClose={toggleAddModal} />
      )}
    </div >
  )
}

export default Main;