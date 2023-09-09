
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
        console.log(window.location)
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
            {activePage === 'about' && <AboutPage />}
            {activePage === 'resume' && <ResumePage />}
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

function ResumePage() {
    return (
        <div style={{flex: 8, background: '#0f0f0f', overflow: 'auto'}}>
            <div class="timeline">
                <div class="container left">
                    <div class="content">
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
                <div class="container right">
                    <div class="content">
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
            </div>
        </div>
    )
}

function AboutPage() {
    function downloadResume() {
        window.open("https://drive.google.com/uc?export=download&id=1bKQs5X10XuZi3iDxDBkh3noxW3w_eYrq", '_blank');
    }
    return (
        <Page light>
            <div style={{padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{fontWeight: 'bold', fontSize: '64px'}}>About Me</div>
                <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
                    <div style={{display: 'flex', flex: 1.5, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <h2 style={{textAlign: 'center', fontSize: '26px', margin: '0px 20px 0px 20px'}}>I'm Cosmo Kay, a web development enthousiast.</h2>
                        <div style={{fontSize: '18px', lineHeight: '1.5', padding: '0px 5px 20px 20px'}}>
                            I love playing games, eating delicous food, and hanging out with my dog.
                            I am a self taught full stack developer with an expertise in everything JavaScript.
                            <br /><br />
                            I am currently looking for software engineering jobs, full stack, backend, or frontend. 
                            As I search for work, I am spending my time making long needed improvements to my passion project:&nbsp; 
                            <a target='__blank' href="https://webEdit.com">webEdit.com</a>.
                            You can read more about it on the projects page.
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
    function changePage(page) {
        let newPathname = window.location.pathname.split('/');
        newPathname[newPathname.length - 1] = page;
        history.pushState({}, '', newPathname.join('/'));
        setActive(page);
    }
    
    const props = {changePage, active};
    return (
        <div style={{alignItems: 'center', flexDirection: 'column', display: 'flex', background: 'black', color: 'white', flex: 2, height: '100%'}}>
            <div className='profilePicture'>
                <img
                    style={{width: '100%', borderRadius: '50%', margin: 'auto'}}
                    src="https://media.licdn.com/dms/image/D4E35AQHY2CBvah4cqQ/profile-framedphoto-shrink_400_400/0/1690470963675?e=1694844000&v=beta&t=ekLUm66bQQgrOx0IiP37ok37_O1_Qmymv6Mn8wqILYY" />
            </div>
            <NavigationButton page="home" {...props} />
            <NavigationButton page="about" {...props} />
            <NavigationButton page="resume" {...props} />
            <NavigationButton page="projects" {...props} />
            <NavigationButton page="contact" {...props} />
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
