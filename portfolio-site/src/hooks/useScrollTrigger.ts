import { useCallback, useLayoutEffect, useState } from 'react';

import { gsap } from 'gsap';

type TweenVars = gsap.TweenVars;

export function useScrollTrigger<T extends HTMLElement>({
  onComplete,
  from,
  to,
}: {
  onComplete?: (el: T) => void;
  from: TweenVars;
  to: TweenVars;
}) {
  const [element, setElement] = useState<T | null>(null);

  const ref = useCallback((node: T | null) => {
    if (node !== null) {
      setElement(node);
    }
  }, []);

  useLayoutEffect(() => {
    if (element) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
          },
          onComplete: () => onComplete?.(element),
        })
        .fromTo(element, from, to);
    }
  }, [element, onComplete, from, to]);

  return ref;
}
