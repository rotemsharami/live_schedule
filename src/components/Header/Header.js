import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { List } from "react-bootstrap-icons";
import {getData} from "../../tools/data";

const Header = () => (
  <div className="header">
    <div className='col-12 row'>
      <div className='menu_button col-2'><List /></div>
      <div className='logo_and_app_name col-8'>{getData().ProjectName}</div>
      <div className='languag col-2'>he</div>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
