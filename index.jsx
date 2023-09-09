// Write your React code here!
// (Feel free to delete everything in this document.)

console.log('Most console.log output has been redirected to this pane.');
console.log('Syntax errors do not show up here but only in the browser\'s console.');

function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flex: 1, padding: 0, margin: 0, height: '100%'}}>
            <NavigationBar />
            <WelcomPage />
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

function NavigationBar() {
    return (
        <div style={{alignItems: 'center', flexDirection: 'column', display: 'flex', background: 'black', color: 'white', flex: 2, height: '100%'}}>
            <div className='profilePicture'>
                <img
                    style={{width: '100%', borderRadius: '50%', margin: 'auto'}}
                    src="https://media.licdn.com/dms/image/D4E35AQHY2CBvah4cqQ/profile-framedphoto-shrink_400_400/0/1690470963675?e=1694844000&v=beta&t=ekLUm66bQQgrOx0IiP37ok37_O1_Qmymv6Mn8wqILYY" />
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
