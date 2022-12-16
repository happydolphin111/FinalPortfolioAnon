import './App.css';
import {useRef} from 'react';
//import pic_iterative from 'assets/images/iterative.png'
//import pic_responsive from './assets/images/responsive.png'
//import pic_personas from 'assets/images/personas.png'
//import pic_development from './assets/images/development.png'
//import pic_brain from './assets/images/brain.png'
//import pic_heart from './assets/images/myHeart.png'


function App() {

  // Click Project or Me and Scroll to Item
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleClickScrollProjects = () => {
    ref1.current?.scrollIntoView({behavior: 'smooth', block: 'center' });
  };

  const handleClickScrollMe = () => {
    ref2.current?.scrollIntoView({behavior: 'smooth'});
  };


  function changeIn(e) {
    e.target.style.background = 'rgb(224, 15, 127)';
    e.target.style.color = 'white'
  }

  function changeOut(e) {
    e.target.style.removeProperty('background');
    e.target.style.removeProperty('color');
  }

  function chooseCard(e) {
    e.target.style.background = 'black';
  }

  function byeCard(e) {
    e.target.style.removeProperty('background');
  }

  function clickDevelopment(e) {
    // Takes you to Development Submission Page 
  }

  function clickIterative(e) {
    // Takes you to Iterative  Submission Page 
  }

  function clickResponsive(e) {
    // Takes you to Responsive Redesign Submission Page 
    <link href="*/-ResponsiveRedesign-main/responsive.html" rel="import" />
  }

  function clickPersonas(e) {
    // Takes you to Personas Submission Page 
  }


  return (
    <div className="App">



      <div className="menubar"> 
        <div className='mininame'>
          my name
        </div>

        <div className="menuPic"> 
        <img src='assets/images/brain.png' height="100px" alt="Brain Pic" />
        </div>
        
        <div className='menuinfo'>

        <button className="ProjButton" 
        onClick={handleClickScrollProjects} 
        onMouseOver={changeIn}
        onMouseLeave={changeOut}>
          PROJECTS 
        </button>

        <button className='MeButton' 
        onClick={handleClickScrollMe}
        onMouseOver={changeIn}
        onMouseLeave={changeOut}>
         ME
        </button>

        <button className='MeButton' 
        onMouseOver={changeIn}
        onMouseLeave={changeOut}>
         RESUME
        </button>

        

        </div> 
      </div>


    <div className='main'>

      <div className="MyName"> 
        <span> hey! </span>
        <span className="sofia"> XXX </span> 
        <span> here </span>
      </div>
      
      <div className="who"> Computer Science and Cognitive Neuroscience student at Brown University. </div>
      <div className="who"> 
      <span>  Join me in Exploring the world of</span> 
      <span>  UI/UX </span> 
      <span> design.</span>
      </div>

      <div className="down-arrow" onClick={handleClickScrollProjects}></div>

    </div>


      <div className='ProjectsHeader' ref={ref1}>
        PROJECTS
      </div>
      <div className="ProjectsSubheader">
        Explore my creations
      </div>

      <div className="ProjectDisplay">

      <div className='Cards'> 

        <div className='Development' onClick={clickDevelopment}> 
          <div className="ProjectCard" >

            <div className='cardTitle'>
            <div className='projectTitle'> Development </div>
            <div className='bigNumber'> 4 </div>
            </div>

            <div className='projectInfo'>
              <div className='projBreakdown'> The goal was to create a website for football fans to use during the round of 16 to learn more about the countries that were playing. Features: filtering by country and/or language and sorting in alphabetical order. </div>
              <div className='projScreenshot'> 
              <img src="assets/images/development.png" alt="Development Screenshot" width='600vw'/> 
              </div>
            </div>

          </div>
        </div>


        <div className='Iterative' onClick={clickIterative}> 
          <div className="ProjectCard">

          <div className='cardTitle'>
            <div className='projectTitle'> Iterative Design </div>
            <div className='bigNumber'> 3 </div>
          </div>

          <div className='projectInfo'>
            <div className='projBreakdown'> After choosing the startup Jamble, we researched their objectives and designed an app for the user interface together with the user experience. </div>
            <div className='projScreenshot'> <img src="assets/images/iterative.png" alt="Iterative Screenshot" width='300vw'/></div>
          </div>

          </div>

        </div>

      </div>

      <div className='Cards'> 
        <div className='Responsive' onClick={clickResponsive}>
          <div className="ProjectCard">

          <div className='cardTitle'>
            <div className='projectTitle'> Responsive Redesign </div>
            <div className='bigNumber'> 2 </div>
          </div>

          <div className='projectInfo'>
            <div className='projBreakdown'> In this project, I chose a website who's interface was lacking some key components and proposed a new responsive design for it. </div>
            <div className='projScreenshot'> <img src='assets/images/responsive.png' alt="Responsive Redesign Screenshot" width='500vw'/></div>
          </div>

          </div>
        </div>


        <div className='Personas'> 
          <div className="ProjectCard">

          <div className='cardTitle'>
            <div className='projectTitle'> Personas and Storyboarding  </div>
            <div className='bigNumber'> 1 </div>
          </div>

          <div className='projectInfo'>
            <div className='projBreakdown'> Here I observed real users interact with a public interface (a pool table) and
            interviewing them about it. From there, using the information collected to build personas and storyboards.</div>
            <div className='projScreenshot'> <img src='assets/images/personas.png' alt="Personas and Storyboarding Screenshot" width='400vw'/></div>
          </div>

          </div>
        </div>
      </div>
          
      </div>



      <div className='ProjectsHeader' ref={ref2}>
       ABOUT ME
      </div>
      <div className="ProjectsSubheader">
        More about the person behind this portfolio
      </div>


      <div className="personalInfo">

      <div className="personalChild1">
          <div className="info">
            I am a sophomore at Brown University studying Computer Science and Cognitive Neuroscience. 
            I have recently discovered a passion for design as a way of approaching problem solving. </div>
          <div className="info"> The intent with this portfolio is to bring you through my journey of exploring design thinking and desigining experiences for different types of users. Join me! </div>
      </div>

      <div className="personalChild2">
      <img src='assets/images/myHeart.png' alt="Heart Picture" width='300vw'/>
      </div>


      </div>

      <div className="contact">
        CONNECT WITH ME
      </div>

    </div>

  );
}

export default App;
