import './App.css';
import './Pages.css';
import {useRef} from 'react';


function App() {

  // Click Project or Me and Scroll to Item
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null)
  const personas = useRef(null)
  const responsive = useRef(null)
  const jamble = useRef(null)
  const development = useRef(null)

  

  const handleClickScrollProjects = () => {
    ref1.current?.scrollIntoView({behavior: 'smooth' });
  };

  const handleClickScrollMe = () => {
    ref2.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollTop = () => {
    ref3.current?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollPersonas = () => {
    personas.current?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollResponsive = () => {
    responsive.current?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollJamble = () => {
    jamble.current?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollDevelopment = () => {
    development.current?.scrollIntoView({behavior: 'smooth'});
  }

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


  return (
    <div className="App">

      <div className="menubar" ref={ref3}> 
        <div className='mininame'>
          my name
        </div>

        <div className="menuPic"> 
        <img src='./brain.png' height="100px" alt="Brain Pic" />
        </div>
        
        <div className='menuinfo'>

        <div>
        <button className="ProjButton" 
        onClick={handleClickScrollProjects} 
        onMouseOver={changeIn}
        onMouseLeave={changeOut}>
          PROJECTS 
        </button>
        </div>

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

      <div className="down-arrow" onClick={handleClickScrollMe}></div>

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
            <div className="info"> You will often find me asking the question "Why?" to further reflect on the objectives behind each project I work on. </div>
          <div className="info"> The intent with this portfolio is to bring you through my journey of exploring design thinking and designing experiences for different types of users. Join me! </div>
      </div>

      <div className="personalChild2">
      <img src='/myHeart.png' alt="Heart Picture" width='300vw'/>
      </div>


      </div>



      <div className='ProjectsHeader' ref={ref1}>
        PROJECTS
      </div>
      <div className="ProjectsSubheader">
        Explore my creations
      </div>

      <div className="ProjectDisplay">

      <div className='Cards'> 

        <div className='Development' > 
          <div className="ProjectCard" >

            <div className='cardTitle'>
            <div className='projectTitle'> Development </div>
            </div>

            <div className='projectInfo'>

              <div className='projBreakdown'> A website for football fans to use during the round of 16 to learn more about the countries that were playing by filtering country and/or language and sorting in alphabetical order.
              <button className="Explore" onClick={scrollDevelopment}>EXPLORE MORE </button>
               </div>

              <div className='projScreenshot'> 
              <img src="assets/images/development.png" alt="Development Screenshot" width='500vw'/> 
              </div>

            </div>
            

          </div>
      </div>

        <div className='Iterative'> 
          <div className="ProjectCard">

          <div className='cardTitle'>
            <div className='projectTitle'> Iterative Design </div>
          </div>

          <div className='projectInfo'>
            <div className='projBreakdown'> Designed an application for JAMBLE, an emerging startup focused on sustainable practices related to clothing. this application works as a social media for selling and buying second hand clothes.
            <button className="Explore" onClick={scrollJamble}>EXPLORE MORE </button></div>
            <div className='projScreenshot'> <img src="assets/images/iterative.png" alt="Iterative Screenshot" width='300vw'/></div>
          </div>

          </div>

        </div>

      </div>


      <div className='Cards'> 

        <div className='Responsive' >
          <div className="ProjectCard">

          <div className='cardTitle'>
            <div className='projectTitle'> Responsive Redesign </div>
          </div>

          <div className='projectInfo'>
            <div className='projBreakdown'> Diagnostico Maipu's online interface was lacking some key components for the user's experience, so I proposed a new responsive design for it. 
            <button className="Explore" onClick={scrollResponsive}>EXPLORE MORE </button></div>
            <div className='projScreenshot'> <img src='assets/images/responsive.png' alt="Responsive Redesign Screenshot" width='420vw'/></div>
          </div>

          </div>

          </div>


       
        <div className='PersonasCard'> 
          <div className="ProjectCard">

          <div className='cardTitle'>
            <div className='projectTitle'> Personas and Storyboarding  </div>
          </div>

          <div className='projectInfo'>
            <div className='projBreakdown'> I observed real users interact with a public interface (a pool table) and
            interviewing them about it. From there, used the information collected to build personas and storyboards.
            <button className="Explore" onClick={scrollPersonas}>EXPLORE MORE </button></div>
            <div className='projScreenshot'> <img src='assets/images/personas.png' alt="Personas and Storyboarding Screenshot" width='400vw'/></div>
          </div>

          </div>
          </div>
     



    </div>    


      </div>





        
        <div className="Personas" ref={personas}>

        <div className="menubar2"> 
        <button className="ProjButton" 
            onClick={scrollTop} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              TO TOP 
            </button>     

            <button className="ProjButton" 
            onClick={handleClickScrollProjects} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              TO PROJECTS 
          </button>     
          </div>   
    


        <div className="PageHeader"> Personas and Storyboarding </div>

        <div className="Description">
        <div className="DescriptionHeader"> What? </div>
        <div className="DescriptionText"> Practice working with Personas to model potential users for an interface. </div>
        </div>

        <div className="Description">
        <div className="DescriptionHeader"> Why? </div>
        <div className="DescriptionText"> Users are the center of UI/UX design, making it essential to know how to study and conduct research to be informed on who you are designing for.</div>
        </div>

        <div className="Description">
        <div className="DescriptionHeader"> How? </div>
        <div className="DescriptionText"> This project consists on 4 different parts: 
        Preparation, where all the background work of choosing the interface and crafting the questions for the interviews happen.
        Recording observations, where I gather my conclusions after having observed users interact with my the pool table, as well as a recap of the interviews I conducted. 
        Personas, where I built two persona maps for two different types of users for my interface.
        Storyboards, where I drew two storyboards to represent how the users interact with the pool table interface.
        </div>
        </div>

        <div className="Description">
        <div className="DescriptionHeader"> My Take On It </div>
        <div className="DescriptionText"> After completing this project I can confidently say I learnt a lot of what goes behind the initial user research 
        for a particular interface, including what questions to ask to potential users as well as creating hypothetical models of different qualities users can have and how that shapes the way they interact with the interface. </div>
        </div>
        

        <div className="DescriptionHeader"> Take A Look: </div>
        <div className='footerPage'> 
        <a href='https://happydolphin111.github.io/PersonasAndStoryboarding/'> View the whole page! </a>
       </div>
        <iframe src="https://happydolphin111.github.io/PersonasAndStoryboarding/" width='1000vw' height='700vw'  ></iframe>
        
       

       

        </div>


        <div className="Personas" ref={responsive}>
    
    
            <div className="menubar2"> 
    
            <button className="ProjButton" 
            onClick={scrollTop} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              TO TOP 
            </button>     

            <button className="ProjButton" 
            onClick={handleClickScrollProjects} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              TO PROJECTS 
            </button>        
    
            </div>
    
    
            <div className="PageHeader"> Responsive Redesign </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> What? </div>
            <div className="DescriptionText"> Practice redesigning websites by using Diagnostico Maipu's as an example. </div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> Why? </div>
            <div className="DescriptionText"> A lot of the work that goes into being a UI/UX designer is redesigning already existing interfaces, 
            updating them to better fit how the users are able to interact with it in line with what the organization wants.</div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> How? </div>
            <div className="DescriptionText"> This project consists on 3 different parts: 
            The website and its flaws, in which I explained why I chose this interface and went into analyzing the usability and accessibility aspects of it to support my choice.
            Visual redesign, where I showed low and high fidelity prototypes and proposed a visual design style guide to better guide the programmers potentially building the website. 
            Getting to work, where I showcased the website I'd redesigned for Diagnistico Maipu using my ideas and pointers from part two. 
            </div>
            </div>

            <div className="Description">
            <div className="DescriptionHeader"> My Take On It </div>
            <div className="DescriptionText"> Having had used this interface myself, it felt great to be able to redesign it to fit my needs as a patient of Diagnostico Maipu. 
            At the same time, it was also another opportunity to continue being exposed to the need as a designer to constantly be going back and forth between the big picture and the small picture in order to 
            consider everything one needs to: the users needs (interactions and accessibility) but also the needs of the people who hired you to design their website. </div>
            </div>
            
            <div className="DescriptionHeader"> Take A Look: </div>
            <div className='footerPage'> 
      <a href='https://happydolphin111.github.io/-ResponsiveRedesign/'> View the whole page! </a>
    </div>
            <iframe src="https://happydolphin111.github.io/-ResponsiveRedesign/" width='1200vw' height='700vw'  ></iframe>
    
    
           

            <div className="Description">
            <div className="DescriptionHeader"> Note! </div>
            <div className="DescriptionText"> After having finished this assignment, I went back to Diagnostico Maipu's website and to my surprise they had completely redesigned it. After looking at it, I realized
            the ideas they had implemented were very similar to the ones I proposed in this project! Take a look below</div>
            </div>
            
            <div className="responsiveEvidence">
            <img src='assets/images/responsive.png' alt=" Original" width='500vw'/>
            <div className="vs"> VS. </div>
            <img src='assets/images/newMaipu.png' alt=" Theirs" width='500vw'/>
            </div>
            <a href="https://www.diagnosticomaipu.com">Link to new page!</a>
    
            

            </div>



            <div className="Personas" ref={jamble}>
    
    
            <div className="menubar2"> 
            <button className="ProjButton" 
            onClick={scrollTop} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              TO TOP 
            </button>     

            <button className="ProjButton" 
            onClick={handleClickScrollProjects} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              TO PROJECTS 
            </button>        
    
            </div>
    
    
            <div className="PageHeader"> Iterative Design </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> What? </div>
            <div className="DescriptionText"> In teams, practice designing an application for a Startup, in our case Jamble, by only knowing their business objective. </div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> Why? </div>
            <div className="DescriptionText"> As a designer you often get to work with clients that don't have much of an idea of what they would like their website
            or application to look like, and which leaves total creative freedom to us. At the same time, the business' objective should be the center of the interface
            that we design, so it's important to know how to balance both what the company wants for functionality while still keeping creative
            freedom which could also allow for other ideas to flow and make the interface even better.  </div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> How? </div>
            <div className="DescriptionText"> This project consists on 4 different parts: 
            Sketching and wireframing, where we sketched a few brainstormed ideas for what Jamble's app could look like and combined the best ideas into one low fidelity wireframe.
            Mockups, in this part we put together a high fidelity prototype in Figma with interactive features to move around in the app. In addition to that, we also obtained and implemented feedback for that Figma prototype. 
            User testing, after creating our testing plan we submitted our Figma alongside some instructions for random users to test it and provide feedback on the difficulty of the task for potential changes they would do as users.  
            Contact the startup, where we emailed the startup Jamble to hear what they though about our proposal!
            </div>
            </div>
            
            <div className="Description">
            <div className="DescriptionHeader"> My Take On It </div>
            <div className="DescriptionText"> It was great working as a team to observe how other designers work. In addition to that, it was also great to tackle the challenge of building an idea 
            absolutely from scratch and with only a few ideas for features to add.  </div>
            </div>

            <div className="DescriptionHeader"> Take A Look: </div>
            <div className='footerPage'> 
      <a href='https://cs1300-iterative-design-7ne.pages.dev'> View the whole page! </a>
    </div>
            
            <iframe src="https://cs1300-iterative-design-7ne.pages.dev" width='1000vw' height='700vw'  ></iframe>
    

         
    
            </div>


    <div className="Personas" ref={development}>
    
    
    <div className="menubar2" > 
    <button className="ProjButton" 
            onClick={scrollTop} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              TO TOP 
            </button>     

            <button className="ProjButton" 
            onClick={handleClickScrollProjects} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              TO PROJECTS 
            </button>        
    
    </div>


    <div className="PageHeader"> Development </div>

    <div className="Description">
    <div className="DescriptionHeader"> What? </div>
    <div className="DescriptionText"> I made a website where people can see the teams who participated in the round of 16 in the world cup and learn more about them by using the features of filtering and sorting. </div>
    </div>

    <div className="Description">
    <div className="DescriptionHeader"> Why? </div>
    <div className="DescriptionText"> Practice working with react, specially the ideas of state and components.  </div>
    </div>

    <div className="Description">
    <div className="DescriptionHeader"> How? </div>
    <div className="DescriptionText"> The users can filter countries by continent and/or main language spoken as well as sorting by ascending or descending alphabetical order. 
    People using this website can also add a team to the favorites section once (or remove them), where there is a state keeping track and showing the cumulative number of cups the teams in favorites have together. 
    </div>
    </div>

    <div className="Description">
    <div className="DescriptionHeader"> My Take On It </div>
    <div className="DescriptionText"> I learned a lot about working with react, which a the time I started with the project I hadn't felt very confident about. </div>
    </div>
    
    <div className="DescriptionHeader"> Take A Look: </div>
    <div className='footerPage'> 
      <a href='https://happydolphin111.github.io/DevelopmentReact/'> View the whole page! </a>
    </div>

    <iframe src="https://happydolphin111.github.io/DevelopmentReact/" width='100%' height='600vw' ></iframe>



    </div>


    <div className="contact">
        CONNECT WITH ME
      
      <div className="elementFooter">
      <img src='assets/github_icon.png' alt="Github Icon" width='30vw'/>
      <img src='assets/email_icon.png' alt="Email Icon" width='30vw'/>
      </div>
      <div className="elementFooter">
        Made With Love in Providence
      </div>
      </div>


    </div>

  );
}

export default App;
