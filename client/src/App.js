
import Layout from './components/Layout/Layout';

import About from './pages/About/About';
import Techstack from './pages/Techstack/Techstack';
import Projects from './pages/Projects/Projects';
import WorkExp from './pages/WorkExp/WorkExp';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <>
    <Layout/>
    <About/>
    <Techstack/>
    <Projects />
          <WorkExp />
          <Contact />
    </>
  );
}

export default App;
