import { Project } from './types';

import tyras from '/images/tyras.webp';
import tyrasFallback from '/images/tyras.jpg';

import cenergy from '/images/cenergy.webp';
import cenergyFallback from '/images/cenergy.jpg';

import threeCents from '/images/threecents.webp';
import threeCentsFallback from '/images/threecents.jpg';

import heron from '/images/heron.webp';
import heronFallback from '/images/heron.jpg';

import petropoulos from '/images/petropoulos.webp';
import petropoulosFallback from '/images/petropoulos.jpg';

import symbioPotential from '/images/connections-thumb.webp';
import symbioPotentialFallback from '/images/connections-thumb.png';

import wasteAnalytics from '/images/wastemap-thumb.webp';
import wasteAnalyticsFallback from '/images/wastemap-thumb.png';

import wasteBrokers from '/images/transports-thumb.webp';
import wawasteBrokersFallback from '/images/transports-thumb.png';

import diadymaReuse from '/images/reuse-thumb.webp';
import diadymaReuseFallback from '/images/reuse-thumb.png';

import diadymaCookingoils from '/images/cookingoils-thumb.webp';
import diadymaCookingoilsFallback from '/images/cookingoils-thumb.png';

import diadymaRewards from '/images/rewards-thumb.webp';
import diadymaRewardsFallback from '/images/rewards-thumb.png';

import saveFood from '/images/savefood-thumb.webp';
import saveFoodFallback from '/images/savefood-thumb.png';

import cemenergy from '/images/cemenergy-thumb.webp';
import cemenergyFallback from '/images/cemenergy-thumb.png';

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
