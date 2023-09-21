import { Project } from './types';

import tyras from './assets/tyras.jpg';
import cenergy from './assets/cenergy.jpg';
import threeCents from './assets/threecents.jpg';
import heron from './assets/heron.jpg';
import petropoulos from './assets/petropoulos.jpg';

import symbioPotential from './assets/connections-thumb.png';
import wasteAnalytics from './assets/wastemap-thumb.png';
import wasteBrokers from './assets/transports-thumb.png';
import diadymaReuse from './assets/reuse-thumb.png';

export const projects: Project[] = [
  { title: 'Tyras', imgSrc: tyras, href: 'https://www.tyras.gr/' },
  { title: 'Cenergy', imgSrc: cenergy, href: 'https://cenergyholdings.com/' },
  { title: 'Three Cents', imgSrc: threeCents, href: 'https://threecents.com/' },
  { title: 'Heron', imgSrc: heron, href: 'https://www.heron.gr/' },
  { title: 'Petropoulos', imgSrc: petropoulos, href: 'https://petropoulos.com/en/' },
];

export const reactProjects: Project[] = [
  { title: 'Symbio potential', imgSrc: symbioPotential, href: 'https://apps.symbiolabs.gr/symbio-potential/' },
  { title: 'Waste Analytics', imgSrc: wasteAnalytics, href: 'https://apps.symbiolabs.gr/wastemap/' },
  { title: 'Waste Brokers', imgSrc: wasteBrokers, href: 'https://apps.symbiolabs.gr/waste-transport-services/' },
  { title: 'Diadyma: Reuse', imgSrc: diadymaReuse, href: 'https://reuse.symbiolabs.gr/' },
];
