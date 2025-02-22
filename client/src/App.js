import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Educations from './pages/Educations/Education';
import Techstack from './pages/Techstack/Techstack';
import Projects from './pages/Projects/Projects';
import WorkExp from './pages/WorkExp/WorkExp';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import {useTheme}from './context/ThemeContext';


function App() {
const [theme]=useTheme();
  return (
    <>
    <div id={theme}>
      <Layout />
      <About />
      <Educations />
      <Techstack />
      <Projects />
      <WorkExp />
      <Contact />
      <Login />
      </div>

    </>
  );
}

export default App;
