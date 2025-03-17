import isBrowser from '../../../utils/isBrowser';
import isDocumentVisible from './isDocumentVisible';

type Listener = () => void;

const listeners: Listener[] = [];

function subscribe(listener: Listener) {
  listeners.push(listener);
  return function unsubscribe() {
    const index = listeners.indexOf(listener);
    if (index >= 0) {
      listeners.splice(index, 1);
    }
  };
}

if (isBrowser) {
  const revalidate = () => {
    if (!isDocumentVisible()) return;
    for (let i = 0; i < listeners.length; i += 1) {
      const listener = listeners[i];
      listener();
    }
  };
  window.addEventListener('visibilitychange', revalidate);
}

export default subscribe;
