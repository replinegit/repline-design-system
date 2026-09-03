// Seven Repline leagues. Colours are derived from the original emblems and are
// the only permitted source of league colour. Never assign arbitrary values.
import thornEmblem from '../assets/leagues/thorn.png';
import marbleEmblem from '../assets/leagues/marble.png';
import oliveEmblem from '../assets/leagues/olive.png';
import porphyryEmblem from '../assets/leagues/porphyry.png';
import heroicEmblem from '../assets/leagues/heroic.png';
import laurelEmblem from '../assets/leagues/laurel.png';
import starEmblem from '../assets/leagues/star.png';

export const leagues = {
  thorn: {
    id: 'thorn',
    nameRu: 'Терновая',
    emblem: thornEmblem,
    primary: '#57574F',
    secondary: '#33332E',
    gradientLight: 'linear-gradient(140deg,#868680 0%,#BEBEBA 46%,#EEEEED 100%)',
    gradientDark: 'radial-gradient(125% 115% at 88% 6%,rgba(87,87,79,.44) 0%,rgba(87,87,79,0) 62%),linear-gradient(150deg,#282825 0%,#1A1A17 100%)',
    textLight: '#1C1C19',
    textDark: '#E7E7E6',
    progressLight: '#1C1C19',
    progressDark: '#9E9E99',
    trackLight: 'rgba(31,36,16,.16)',
    trackDark: 'rgba(255,255,255,.13)'
  },
  marble: {
    id: 'marble',
    nameRu: 'Мраморная',
    emblem: marbleEmblem,
    primary: '#9C8449',
    secondary: '#C9A96A',
    gradientLight: 'linear-gradient(140deg,#A48E58 0%,#CEC2A5 46%,#F2EFE8 100%)',
    gradientDark: 'radial-gradient(125% 115% at 88% 6%,rgba(156,132,73,.44) 0%,rgba(156,132,73,0) 62%),linear-gradient(150deg,#433A23 0%,#262216 100%)',
    textLight: '#2D2718',
    textDark: '#F1EEE6',
    progressLight: '#2D2718',
    progressDark: '#C6B895',
    trackLight: 'rgba(31,36,16,.16)',
    trackDark: 'rgba(255,255,255,.13)'
  },
  olive: {
    id: 'olive',
    nameRu: 'Оливковая',
    emblem: oliveEmblem,
    primary: '#7E9642',
    secondary: '#42561F',
    gradientLight: 'linear-gradient(140deg,#839A4A 0%,#BCC89D 46%,#EEF1E6 100%)',
    gradientDark: 'radial-gradient(125% 115% at 88% 6%,rgba(126,150,66,.44) 0%,rgba(126,150,66,0) 62%),linear-gradient(150deg,#374020 0%,#212515 100%)',
    textLight: '#262C16',
    textDark: '#EDF0E5',
    progressLight: '#262C16',
    progressDark: '#B4C291',
    trackLight: 'rgba(31,36,16,.16)',
    trackDark: 'rgba(255,255,255,.13)'
  },
  porphyry: {
    id: 'porphyry',
    nameRu: 'Порфировая',
    emblem: porphyryEmblem,
    primary: '#8A4242',
    secondary: '#571228',
    gradientLight: 'linear-gradient(140deg,#AD7B7B 0%,#D3B8B8 46%,#F4EDED 100%)',
    gradientDark: 'radial-gradient(125% 115% at 88% 6%,rgba(138,66,66,.44) 0%,rgba(138,66,66,0) 62%),linear-gradient(150deg,#3C2120 0%,#231615 100%)',
    textLight: '#291716',
    textDark: '#EFE5E5',
    progressLight: '#291716',
    progressDark: '#BB9191',
    trackLight: 'rgba(31,36,16,.16)',
    trackDark: 'rgba(255,255,255,.13)'
  },
  heroic: {
    id: 'heroic',
    nameRu: 'Героическая',
    emblem: heroicEmblem,
    primary: '#DC3C24',
    secondary: '#661C10',
    gradientLight: 'linear-gradient(140deg,#E36350 0%,#F0ABA0 46%,#FBE9E6 100%)',
    gradientDark: 'radial-gradient(125% 115% at 88% 6%,rgba(220,60,36,.44) 0%,rgba(220,60,36,0) 62%),linear-gradient(150deg,#5B1E14 0%,#311510 100%)',
    textLight: '#3C160F',
    textDark: '#FAE4E0',
    progressLight: '#3C160F',
    progressDark: '#EB8E80',
    trackLight: 'rgba(31,36,16,.16)',
    trackDark: 'rgba(255,255,255,.13)'
  },
  laurel: {
    id: 'laurel',
    nameRu: 'Лавровая',
    emblem: laurelEmblem,
    primary: '#E0B01F',
    secondary: '#C08E1E',
    gradientLight: 'linear-gradient(140deg,#E0B01F 0%,#EED486 46%,#FBF4E0 100%)',
    gradientDark: 'radial-gradient(125% 115% at 88% 6%,rgba(224,176,31,.44) 0%,rgba(224,176,31,0) 62%),linear-gradient(150deg,#5D4A13 0%,#322A0F 100%)',
    textLight: '#3D320E',
    textDark: '#FBF4E0',
    progressLight: '#3D320E',
    progressDark: '#EDD17D',
    trackLight: 'rgba(31,36,16,.16)',
    trackDark: 'rgba(255,255,255,.13)'
  },
  star: {
    id: 'star',
    nameRu: 'Звёздная',
    emblem: starEmblem,
    primary: '#26356B',
    secondary: '#DCC42A',
    gradientLight: 'linear-gradient(140deg,#7882A3 0%,#B6BCCD 46%,#ECEEF2 100%)',
    gradientDark: 'radial-gradient(125% 115% at 88% 6%,rgba(38,53,107,.44) 0%,rgba(38,53,107,0) 62%),linear-gradient(150deg,#161C2F 0%,#11131C 100%)',
    textLight: '#111420',
    textDark: '#E1E3EA',
    progressLight: '#111420',
    progressDark: '#818AA9',
    trackLight: 'rgba(31,36,16,.16)',
    trackDark: 'rgba(255,255,255,.13)'
  }
};

export const leagueIds = Object.keys(leagues);
