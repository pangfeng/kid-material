import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function TestTableABCBlock({ value }) {
  return (
    <div className={styles.TestTableABCBlock}>
      TestTableABCBlock {value}
    </div>
  );
}

TestTableABCBlock.propTypes = {
  value: PropTypes.string,
};

TestTableABCBlock.defaultProps = {
  value: 'string data',
};
