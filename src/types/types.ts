import * as SimpleIcons from '@icons-pack/react-simple-icons';

export type SimpleIconName = keyof typeof SimpleIcons;

export interface Social {
  name: string;
  url: string;
  icon: SimpleIconName;
}

export interface Tech {
  name: string;
  icon: SimpleIconName;
}

export interface Project {
  title: string;
  description: string[];
  techs: Tech[]
  image: string;
}

export interface Portfolio {
  name: string;
  role: string;
  about: string[];
  socials: Social[];
  techs: Tech[];
  projects: Project[];
}
