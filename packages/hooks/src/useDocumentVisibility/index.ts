import { useState } from 'react';
import isBrowser from '../utils/isBrowser';
import useEventListener from '../useEventListener';

function getVisibility() {
  if (!isBrowser) {
    return 'visible';
  }

  return document.visibilityState;
}
export default function useDocumentVisibility() {
  const [documentVisibility, setDocumentVisibility] = useState(() => getVisibility());

  useEventListener(
    'visibilitychange',
    () => {
      setDocumentVisibility(getVisibility());
    },
    { target: () => document },
  );

  return documentVisibility;
}
