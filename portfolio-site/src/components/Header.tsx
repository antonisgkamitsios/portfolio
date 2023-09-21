import { useLayoutEffect } from 'react';

import { gsap } from 'gsap';

export default function Header({ scrollElement }: { scrollElement: HTMLElement | undefined }) {
  useLayoutEffect(() => {
    gsap
      .timeline()
      .fromTo(
        '.header__contents .main-title',
        {
          //from
          opacity: 0,
          y: 100,
          visibility: 'hidden',
        },
        {
          //to
          visibility: 'visible',
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )
      .addLabel('headerEnd')
      .fromTo(
        '.header__contents .sub',
        {
          //from
          opacity: 0,
          y: 100,
          visibility: 'hidden',
        },
        {
          //to
          visibility: 'visible',
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        '-=.4'
      )
      .fromTo(
        '.header .scroll-to-ct',
        {
          //from
          opacity: 0,
          visibility: 'hidden',
        },
        {
          //to
          visibility: 'visible',
          opacity: 1,
          duration: 1,
        },
        'headerEnd+=0.1'
      );
  }, []);

  const handleClick = () => {
    scrollElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header__contents">
        <h1 className="main-title">
          Hello👋, I'm <span className="header__fancy">Antonios Gkamitsios</span>
        </h1>
        <p className="h2 sub">a front-end developer</p>
      </div>
      <div className="scroll-to-ct">
        <button onClick={handleClick} className="scroll-bt normal-text-large">
          <span className="bt-text">Recent Projects</span>
        </button>
      </div>
    </header>
  );
}
