import './App.css';
import backgroundImg from './assets/background.png';
import faq from './assets/FAQ.png';
import faqSection from './assets/FAQ_SECTION.png';
import home from './assets/HOME.png';
import rarity from './assets/RARITY.png';
import logo from './assets/logo.png';
import worms from './assets/WORMS.png';
import smokers from './assets/SMOKERS_SECTION.png';
import mouth from './assets/MOUTH.png';
import hats from './assets/HATS.png';
import thirdEyes from './assets/3RDEYES.png';
import eyeBalls from './assets/EYEBALLS.png';
import fsr from './assets/FRUIT_SKINS_RARITY.png';
import br from './assets/BackgroundsRarity.png';
import raHeader from './assets/RARITIES.png';
import roadmap from './assets/ROADMAP.png';
import roadmapSection from './assets/ROADMAP_SECTION.png';
import trf from './assets/TRF.png';
import { useRef } from 'react';

function App() {
  const homeRef = useRef(null);
  const roadmapRef = useRef(null);
  const rarityRef = useRef(null);
  const faqRef = useRef(null);

  const handleHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRoadmap = () => {
    roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRarity = () => {
    rarityRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFaq = () => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
<div src={backgroundImg} style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
  
  <div style={{position: 'fixed', backgroundColor: 'black', width:'100%'}}>
    <img src={logo} style={{margin: 'auto', paddingTop: '2rem', display: 'block', width: '25%'}} />
    <div className="header" style={{ margin: 'auto', display: 'flex', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <img src={home} style={{margin: 'auto', cursor: 'pointer', width: '5rem'}} />
      <img onClick={handleRoadmap} src={roadmap} style={{margin: 'auto', cursor: 'pointer', width: '9rem'}} />
      <img onClick={handleRarity} src={rarity} style={{margin: 'auto', cursor: 'pointer', width: '8rem'}} />
      <img onClick={handleFaq} src={faq} style={{margin: 'auto', cursor: 'pointer', width: '4rem'}} />
    </div>
  </div>

    <img src={trf} style={{ margin: 'auto', display: 'block', paddingTop: '20%' }} />
    <img ref={roadmapRef} id='roadmap' src={roadmapSection} style={{ margin: 'auto', display: 'block', paddingTop: '5rem' }} />
    <img ref={rarityRef} id='raHeader' src={raHeader} style={{ margin: 'auto', display: 'block', paddingTop: '5rem' }} />
    <img src={br} style={{ margin: 'auto', display: 'block', paddingTop: '5rem' }} />
    <img src={fsr} style={{ margin: 'auto', display: 'block', paddingTop: '5rem' }} />
    <img src={hats} style={{ margin: 'auto', display: 'block', paddingTop: '5rem' }} />
    <img src={thirdEyes} style={{ margin: 'auto', display: 'block', paddingTop: '5rem' }} />
    <img src={eyeBalls} style={{ margin: 'auto', display: 'block', paddingTop: '5rem' }} />
    <img src={ mouth } style ={{margin: 'auto', display: 'block', paddingTop:'5rem' }} />
    <img src={ smokers } style ={{margin: 'auto', display: 'block', paddingTop:'5rem' }} />
    <img src={ worms} style={{ margin: 'auto', display: 'block' ,paddingTop:'5rem'  }} />
    <img ref={faqRef} src={faqSection} style={{ margin: 'auto', display: 'block', paddingTop:'5rem', paddingBottom: '5rem' }}/>
  
  </div>

  

    </>
  );
}

export default App;