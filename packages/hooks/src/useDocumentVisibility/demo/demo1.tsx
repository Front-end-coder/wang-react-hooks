/**
 * title: 基础用法
 * description: 监听 document 的可见状态
 */

import React, { useEffect } from 'react';
import { useDocumentVisibility } from 'wang-react-hooks';

export default () => {
  const documentVisibility = useDocumentVisibility();

  useEffect(() => {
    console.log(`Current document visibility state: ${documentVisibility}`);
  }, [documentVisibility]);

  return <div>Current document visibility state: {documentVisibility}</div>;
};
