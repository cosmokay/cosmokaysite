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
            {activePage === 'home' && <WelcomPage />}
            {activePage === 'about' && <AboutPage />}
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

function AboutPage() {
    return (
        <Page light>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2>ABOUT</h2>
            </div>
        </Page>
    )
}

function WelcomPage() {
    return (
        <Page>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1>Welcome!</h1>
                <div>
                    <p style={{display: 'inline-block'}}>&#128406;</p>&nbsp;
                    <h3 style={{color: 'white', display: 'inline-block'}}>I'm Cosmo Kay</h3>
                </div>
                <button>Contact Me</button>
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
