import './App.css'

function App() {

  return (
    <>
      <Header></Header>
    </>
  )
}

function Header(){
  return (
    <header>
      <div className="nav">
        <h3>That Js Dude</h3>
        <button className="sign-in">Sign In</button>
      </div>
      <div>
        <h1>Exclusive React Workshop for beginners!</h1>
        <p>
          Once in a year opportunity to learn and build your first React app
        </p>
        <button className="details">Learn more</button>
      </div>
    </header>
  );
}

export default App
