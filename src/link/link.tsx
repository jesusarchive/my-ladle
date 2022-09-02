import * as React from 'react';

const Link = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

Link.displayName = 'Link';

export default Link;
