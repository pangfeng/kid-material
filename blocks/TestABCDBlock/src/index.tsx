import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function TestABCDBlock({ value }) {
  return (
    <div className={styles.TestABCDBlock}>
      TestABCDBlock {value}
    </div>
  );
}

TestABCDBlock.propTypes = {
  value: PropTypes.string,
};

TestABCDBlock.defaultProps = {
  value: 'string data',
};
