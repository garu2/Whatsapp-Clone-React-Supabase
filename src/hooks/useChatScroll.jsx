import React from 'react'

export function useChatScroll()  {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, [dep]);
    return ref;
}