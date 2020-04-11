import Sidebar from './Sidebar';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    sidebar: state.sidebar
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
