
// Write your React code here!
// (Feel free to delete everything in this document.)
const {useState, useEffect} = React;

function App() {
    const [activePage, setActivePage] = useState();
    const listenToPopstate = () => {
        const pathArr = window.location.pathname.split('/');
        setActivePage(pathArr[pathArr.length - 1]);
    };
 
    useEffect(() => {
        const pathArr = window.location.pathname.split('/');
        setActivePage(pathArr[pathArr.length - 1] || "home");
        
        window.addEventListener('popstate', listenToPopstate);
        return () => {
            window.removeEventListener('popstate', listenToPopstate);
        };
    }, []);
    
    
    return (
        <div style={{display: 'flex', flexDirection: 'row', flex: 1, padding: 0, margin: 0, height: '100%'}}>
            <NavigationBar active={activePage} setActive={setActivePage} />
            {activePage === 'home' && <WelcomPage setActive={setActivePage} />}
            {activePage === 'about' && <AboutPage setActive={setActivePage} />}
            {activePage === 'history' && <HistoryPage />}
            {activePage === 'webedit' && <WebEditPage />}
            <Copyright />
        </div>
    )
}

function Copyright() {
    return (
        <div style={{position: 'fixed', color: 'grey', right: '30px', bottom: '5px', fontSize: '9px'}}>
            Copyright 2023 Cosmo Kay
        </div>
    )
}

function Page({children, light}) {
    return (
        <div className={`page ${light ? 'light' : ''}`}>
            {children}
        </div>
    );
}

function HistoryPage() {
    return (
        <div style={{flex: 8, background: '#0f0f0f', overflow: 'auto'}}>
            <div className="timeline">
                <div className="resumeTitle">My History</div>
                <div className="container left">
                    <div className="content">
                        <h2 style={{margin: 0}}>Vali Cyber</h2>
                        <h3 style={{margin: 0}}>March 2021 - July 2023</h3>
                        <ul>
                            <li>Implemented a cybersecurity SaaS stack driven by a Node.js microservice deployment and MySQL that manages the operation of 1000s of endpoints.</li>
                            <li>Created React based web GUI for endpoint reporting and configuration.</li>
                            <li>Built Golang agent and corresponding web connector microservice.</li>
                            <li>Implemented SOC2 compliant authentication and validation mechanisms.</li>
                            <li> Developed and maintained internal build scripts (bash) for the team.</li>
                        </ul>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2 style={{margin: 0}}>Big Picture Guide, LLC</h2>
                        <h3 style={{margin: 0}}>November 2019 - March 2021</h3>
                        <ul>
                            <li>Developed a multifaceted streaming platform MVP and beta driven by Firebase’s NoSQL database.</li>
                            <li>Implemented video and voice communication by integrating with a third-party cloud processing WebRTC service.</li>
                            <li>Created a web app, a mobile app for both Android and iOS powered by React Native, and an Android TV application.</li>
                            <li>Scraped and managed 10,000s of titles from various video providers</li>
                        </ul>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <h2 style={{margin: 0}}>Tropare</h2>
                        <h3 style={{margin: 0}}>April 2019 - June 2019</h3>
                        <ul>
                            <li>Automated the process of scraping 1,000,000+ URLs and extracting US postal addresses.</li>
                            <li>Developed MySQL exporter to convert from mysqldump format to proprietary.</li>
                            <li>Back-end, high concurrency, heuristics.</li>
                        </ul>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2 style={{margin: 0}}>Documobl</h2>
                        <h3 style={{margin: 0}}>February 2019 - June 2019</h3>
                        <ul>
                            <li>Rapidly developed an Android application using Java and React Native to mirror an IOS version.</li>
                            <li>Integrated peer to peer messaging using internal RESTful API and Twilio.</li>
                            <li>Learned how to communicate effectively in a small development team.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AboutPage({setActive}) {
    function webEditPage(e) {
        e.preventDefault();
        let newPathname = window.location.pathname.split('/');
        newPathname[newPathname.length - 1] = 'webedit';
        history.pushState({}, '', newPathname.join('/'));
        setActive('webedit');
    }
    function downloadResume() {
        window.open("https://drive.google.com/uc?export=download&id=1bKQs5X10XuZi3iDxDBkh3noxW3w_eYrq", '_blank');
    }
    return (
        <Page light>
            <div style={{padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="title" style={{fontWeight: 'bold', fontSize: '64px'}}>About Me</div>
                <h2 className="subtitle" style={{textAlign: 'center', fontSize: '26px', margin: '0px 20px 20px 20px'}}>I'm Cosmo Kay, a web development enthousiast.</h2>
                <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
                    <div style={{display: 'flex', flex: 1.5, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <div style={{fontSize: '18px', lineHeight: '1.5', padding: '0px 5px 20px 20px'}}>
                            I love playing games, eating delicous food, and hanging out with my dog.
                            I am a self taught full stack developer with an expertise in everything JavaScript.
                            <br /><br />
                            I am currently looking for software engineering jobs, full stack, backend, or frontend. 
                            As I search for work, I am spending my time making long needed improvements to my passion project:&nbsp; 
                            <a target='_blank' href="https://webEdit.com">webEdit.com</a>.
                            You can read more about it on the&nbsp;
                            <a onClick={webEditPage} href='#'>webEdit page</a>.
                        </div>
                    </div>
                    <div style={{display: 'flex', flex: 1, height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
                        <lottie-player
                            autoplay
                            loop
                            mode="bounce"
                            src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
                            style={{width: "100%", height: 'auto', filter: "hue-rotate(254deg)"}}
                        />
                        <button onClick={downloadResume} className="light" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div>DOWNLOAD RESUME</div>
                            &nbsp;&nbsp;&nbsp;
                            <img style={{width: '16px', filter: 'invert(79%) sepia(8%) saturate(2953%) hue-rotate(69deg) brightness(73%) contrast(100%)'}} src="https://cdn-icons-png.flaticon.com/512/724/724933.png" />
                        </button>
                    </div>
                </div>
            </div>
        </Page>
    )
}

function WebEditPage({setActive}) {
    return (
        <Page>
            <div style={{flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{fontWeight: 'bold', fontSize: '64px'}}>
                    <img style={{height: '60px'}} src="/logo/webEditLogoWhite.png" />
                    <a href="#" target="_blank" style={{fontSize: '64px', display: 'inline-block', padding: '5px'}}>
                        <img className='weLink' src="pasted_CmHfqnm422.jpg" />
                    </a>
                </div>
                <div className='projectContainer'>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{padding: '15px 30px 30px 30px', display: 'flex', flex: 2, flexDirection: 'column', justifyContent: 'center', alignSelf: 'flex-start'}}>
                            webEdit is a web based HTML/JavaScript IDE. 
                            The inital idea spawned from difficulties my mentor ran into while tutoring programming students.
                            We realized that the tools to help soften the learning curve in going from an absoute beginner to a novice are not great. 
                            webEdit is our attempt to  provide a powerful, yet lightweight, tool that solves that problem.
                        </div>
                        <div className='screenshotContainer'>
                            <img src="editorScreenshot.png" style={{flex: 1, width: '100%'}} />
                            <div className='hint'>
                                This is an example of the webpage split between a editing box and an iframe that display your fully hosted website. To make it clear, this website is powered by webEdit. 
                                "cosmokay.com" is a custom domain hosted by Cloudflare that uses webEdit for editing and git source control. 
                                You can see the living, updating source code&nbsp;
                                <a href="https://webedit.com/DGDpDREtGMR9OJaCDrMGgnk3ERb2/cosmokaysite/index.jsx?run=edit" target='_blank'>here</a>.
                            </div>
                        </div>
                    </div>
                    <div>
                        There were two specific issues that provided inspiration:
                        <ol>
                            <li>
                                The process of hosting a web app so it's available to all is not obvious. 
                                Students might struggle through it and end up frustrated. 
                                It resulted in a lot of them being discouraged before even getting to fun part!
                            </li>
                            <li>
                                Parents wanted to see what their kids were learning. 
                                Due to the difficulty hosting applications, the students work would stay local on their computers, meaning parents had no access to their kid's work.
                            </li>
                        </ol>
                        These issues spawned webEdit. The idea was simple enough on the surface: 
                        Make a web based HTML/JavaScript IDE that results in an application that is actually hosted on the web.
                        In 2017, I dove into writing webEdit and used its development to really hone my skills and improve.
                        I learned what it meant to be a full stack developer and how to work with a userbase while iterating and adding features.
                        Almost seven years and 3 versions later, webEdit boasts a huge amount of features and I'm not sure I could list them all if I tried. :)
                        <br />
                        <br />
                        Below, I'm going to highlight some of the more important features:
                        <ul>
                            <li>
                                <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-start'}}>
                                    <div style={{padding: '10px', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'flex-start'}}>
                                        Once logged in, you are met with a landing page that displays your most recently
                                        edited projects and allows you to search through them.
                                        You can create new projects from this page. There are options for a blank html page, vanilla JavaScript, and ReactJS. 
                                        And Python is coming soon!
                                    </div>
                                    <div className='screenshotContainer static'>
                                        <img src="homepageScreenshot.png" style={{flex: 1, width: '100%', height: 'auto'}} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Page>
    )
}

function WelcomPage({setActive}) {
    function contactPage() {
        let newPathname = window.location.pathname.split('/');
        newPathname[newPathname.length - 1] = 'contact';
        history.pushState({}, '', newPathname.join('/'));
        setActive('contact');
    }
    return (
        <Page>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1>Welcome!</h1>
                <div>
                    <p style={{display: 'inline-block'}}>&#128406;</p>&nbsp;
                    <h3 style={{color: 'white', display: 'inline-block'}}>I'm Cosmo Kay</h3>
                </div>
                <button onClick={contactPage}>Contact Me</button>
            </div>
        </Page>
    )
}

function NavigationBar({active, setActive}) {
    const [menuActive, setMenuActive] = useState(false);
    function changePage(page) {
        let newPathname = window.location.pathname.split('/');
        newPathname[newPathname.length - 1] = page;
        history.pushState({}, '', newPathname.join('/'));
        setActive(page);
        setMenuActive(false);
    }
    
    function toggleMenu() {
        console.log('toggle')
        setMenuActive(!menuActive);
    }
    
    const props = {changePage, active};
    return (
        <div className={`navigationBar ${menuActive ? 'open' : ''}`} style={{}}>
            <HamMenu toggleMenu={toggleMenu} />
            <CloseMenu toggleMenu={toggleMenu} />
            <div className='profilePicture'>
                <img
                    style={{width: '100%', borderRadius: '50%', margin: 'auto'}}
                    src="https://media.licdn.com/dms/image/D4E35AQHY2CBvah4cqQ/profile-framedphoto-shrink_400_400/0/1690470963675?e=1694844000&v=beta&t=ekLUm66bQQgrOx0IiP37ok37_O1_Qmymv6Mn8wqILYY" />
            </div>
            <div style={{flex: 1, justifyContent: 'space-around', display: 'flex', flexDirection: 'column'}}>
                <div style={{flex: 1}}>
                    <NavigationButton page="home" {...props} />
                    <NavigationButton page="about" {...props} />
                    <NavigationButton page="history" {...props} />
                    <NavigationButton page="webedit" {...props} />
                    <NavigationButton page="contact" {...props} />
                </div>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <a href="https://github.com/cosmokay" target="_blank">
                        <i class="fa fa-github icon"/>
                    </a>
                    &nbsp;
                    &nbsp;
                    <a href="https://www.linkedin.com/in/cosmo-kay" target="_blank">
                        <i class="fa fa-linkedin icon"  />
                    </a>
                </div>
            </div>
        </div>
    )
}

function CloseMenu({toggleMenu}) {
    return (
        <div className="closeMenu" onClick={toggleMenu}>&#xd7;</div>
    )
}

function HamMenu({toggleMenu}) {
    return (
        <div className='hamMenu' onClick={toggleMenu}>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>
    )
}

function NavigationButton({page, active, changePage}) {
    return (
        <div onClick={() => changePage(page)} className={`navigationButton ${page === active ? 'active' : ''}`}>
            {page.toUpperCase()}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));