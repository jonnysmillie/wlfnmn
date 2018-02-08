import React from 'react';

import Words from '../../src/Words';
import Appear from '../../src/Appear';

import Link from './Link';

export default function FooterGitHub (props) {
  const { show, onLink, ...etc } = props;
  return (
    <Link href='' onLink={onLink} {...etc}>
      <Appear className='mdi mdi-twitter-circle' animate show={show} />
      {' '}
      <Words animate show={show}>
        wlfnmn
      </Words>
    </Link>
  );
}
