import { useEffect, useState } from 'react';
import './App.css'
import tutorialsData from './tutorial.json'

function App() {

  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  )
}

// header component
function Header() {
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

// main component
function Main() {
  return (
    <section className="main">
      <Left></Left>
      <Right></Right>
    </section>
  )
}

function Left() {
  const [data,setData] = useState([])
  useEffect(() =>{
    setData(tutorialsData)
  },[])
  return (
    <div className='left'>
      <JsConfig></JsConfig>
      <div id="tutorials-container">
        {
          data.map(d => <Tutorial title = {d.title}
          desc = {d.desc}></Tutorial>)
        }
      </div>
    </div>
  )
}

function Tutorial(props){
  const {title, desc} = props
  return (
    <div className="tutorial">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button className="btn-details">View details</button>
    </div>
  );
}

function Right() {
  return (
    <div className='right'>
      <PersonalTraining></PersonalTraining>
      <RecentVideos></RecentVideos>
    </div>
  );
}

function JsConfig() {
  return (
    <div className="js-config">
      <h4>JS Confusing Parts</h4>
      <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event delegation, dom, timers and many more caveats.</p>
    </div>
  )
}

function PersonalTraining(){
  return(
      <div id="personal-training">
        <h2>Personal Training for $30</h2>
        <p>
          If you need career guide, personal interview tips, mock interview,
          Life Coaching, or anything else, you can book me for 30 min. Just pay
          $30 via paypal to Codinism (my company) and then book a time slot You
          can Book me
        </p>
      </div>
  )
}

function RecentVideos(){
  return(
      <div id="recent-videos">
        <h2>Recent Videos</h2>
        <ul>
          <li>15+ tricks for dev tool</li>
          <li>15+ tricks for dev tool</li>
          <li>15+ tricks for dev tool</li>
          <li>15+ tricks for dev tool</li>
        </ul>
        <button className="btn-details">More on youtube</button>
      </div>
  )
}
export default App
