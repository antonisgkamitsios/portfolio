import './sass/index.scss';
import Header from './components/Header';
import { Main } from './components/Main';
import { useCallback, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const [node, setNode] = useState<HTMLElement | undefined>();
  const scrollElementRef = useCallback((node: HTMLElement) => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  return (
    <>
      <Header scrollElement={node} />
      <Main ref={scrollElementRef} />
    </>
  );
}

export default App;
