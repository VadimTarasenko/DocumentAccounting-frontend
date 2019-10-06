import { connect } from 'react-redux';

import MainPage from './Main';
import { getDocuments } from 'store/middlewares/documents.middleware';

const mapStateToProps = ({ documents }) => ({
  documents
});

const mapDispatchToProps = (dispatch) => ({
  getDocuments: getDocuments(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage); 