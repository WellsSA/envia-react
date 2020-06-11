import React from 'react';
import PropTypes from 'prop-types';

import { CustomLabel } from './styles';

function Label({ content, children }) {
  return (
    <CustomLabel>
      {children}
      {content ? <span>{content}</span> : <></>}
    </CustomLabel>
  );
}

Label.propTypes = {
  content: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Label.defaultProps = {
  content: '',
};

export default Label;
