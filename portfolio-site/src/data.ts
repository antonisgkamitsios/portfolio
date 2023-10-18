import { Project } from './types';

import tyras from './assets/tyras.webp';
import tyrasFallback from './assets/tyras.jpg';

import cenergy from './assets/cenergy.webp';
import cenergyFallback from './assets/cenergy.jpg';

import threeCents from './assets/threecents.webp';
import threeCentsFallback from './assets/threecents.jpg';

import heron from './assets/heron.webp';
import heronFallback from './assets/heron.jpg';

import petropoulos from './assets/petropoulos.webp';
import petropoulosFallback from './assets/petropoulos.jpg';

import symbioPotential from './assets/connections-thumb.webp';
import symbioPotentialFallback from './assets/connections-thumb.png';

import wasteAnalytics from './assets/wastemap-thumb.webp';
import wasteAnalyticsFallback from './assets/wastemap-thumb.png';

import wasteBrokers from './assets/transports-thumb.webp';
import wawasteBrokersFallback from './assets/transports-thumb.png';

import diadymaReuse from './assets/reuse-thumb.webp';
import diadymaReuseFallback from './assets/reuse-thumb.png';

import diadymaCookingoils from './assets/cookingoils-thumb.webp';
import diadymaCookingoilsFallback from './assets/cookingoils-thumb.png';

import diadymaRewards from './assets/rewards-thumb.webp';
import diadymaRewardsFallback from './assets/rewards-thumb.png';

import saveFood from './assets/savefood-thumb.webp';
import saveFoodFallback from './assets/savefood-thumb.png';

import cemenergy from './assets/cemenergy-thumb.webp';
import cemenergyFallback from './assets/cemenergy-thumb.png';

export const projects: Project[] = [
  { title: 'Tyras', imgSrc: tyras, imgSrcFallback: tyrasFallback, href: 'https://www.tyras.gr/' },
  { title: 'Cenergy', imgSrc: cenergy, imgSrcFallback: cenergyFallback, href: 'https://cenergyholdings.com/' },
  { title: 'Three Cents', imgSrc: threeCents, imgSrcFallback: threeCentsFallback, href: 'https://threecents.com/' },
  { title: 'Heron', imgSrc: heron, imgSrcFallback: heronFallback, href: 'https://www.heron.gr/' },
  {
    title: 'Petropoulos',
    imgSrc: petropoulos,
    imgSrcFallback: petropoulosFallback,
    href: 'https://petropoulos.com/en/',
  },
];

export const circularEconomyProjects: Project[] = [
  {
    title: 'Symbio potential',
    imgSrc: symbioPotential,
    imgSrcFallback: symbioPotentialFallback,
    href: 'https://apps.symbiolabs.gr/symbio-potential/',
  },
  {
    title: 'Waste Analytics',
    imgSrc: wasteAnalytics,
    imgSrcFallback: wasteAnalyticsFallback,
    href: 'https://apps.symbiolabs.gr/wastemap/',
  },
  {
    title: 'Waste Brokers',
    imgSrc: wasteBrokers,
    imgSrcFallback: wawasteBrokersFallback,
    href: 'https://apps.symbiolabs.gr/waste-transport-services/',
  },
];

export const diadymaProjects: Project[] = [
  {
    title: 'Diadyma: Cooking Oils',
    imgSrc: diadymaCookingoils,
    imgSrcFallback: diadymaCookingoilsFallback,
    href: 'https://cookingoils.diadyma.gr/',
  },
  {
    title: 'Diadyma: Reuse',
    imgSrc: diadymaReuse,
    imgSrcFallback: diadymaReuseFallback,
    href: 'https://reuse.diadyma.gr/',
  },
  {
    title: 'Diadyma: Rewards',
    imgSrc: diadymaRewards,
    imgSrcFallback: diadymaRewardsFallback,
    href: 'https://rewards.diadyma.gr/',
  },
];

export const foodWasteProjects: Project[] = [
  { title: 'Save Food', imgSrc: saveFood, imgSrcFallback: saveFoodFallback, href: 'https://savefood.symbiolabs.gr/' },
];

export const cemenergyProjects: Project[] = [
  {
    title: 'CEMenergy',
    imgSrc: cemenergy,
    imgSrcFallback: cemenergyFallback,
    href: 'https://cemenergy.staging.symbiolabs.gr/',
  },
];
