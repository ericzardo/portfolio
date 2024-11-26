import HeroScene from './scenes/Hero';
import ProjectsScene from './scenes/Projects';
import MeScene from './scenes/Me';
import TechsScene from './scenes/Techs';
import QuoteScene from '@scenes/Quote';
import TalkScene from '@scenes/Talk';
import FooterScene from '@scenes/Footer';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <HeroScene />
      <ProjectsScene />
      <MeScene />
      <TechsScene />
      <QuoteScene />
      <TalkScene />
      <FooterScene />
    </div>
  );
}
