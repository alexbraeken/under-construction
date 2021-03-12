import React, {useEffect, useState, useRef} from 'react'
import './App.css';
import { gsap } from "gsap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faAt, faPhone)

function App() {

  const [animationPlaying, setAnimationPlaying] = useState(false)


  const logo = useRef(null);
  const shadow =useRef(null)
  const com = useRef(null)
  const suitcase = useRef(null)
  const home = useRef(null)
  const swim = useRef(null)


useEffect(() => {
  setAnimationPlaying(true)
  let width = logo.current.scrollWidth;
  gsap.fromTo(logo.current, 1, {y:-1000}, {y:0, ease: "Bounce.easeOut", delay:1 / 2})
  gsap.fromTo(shadow.current, 1, {width:"10px"}, {width: width, ease: "Bounce.easeOut", delay:1 / 2})
  gsap.fromTo(suitcase.current, 1, {opacity:0, y:50}, {opacity:1, y:0, ease: "power4.out", delay: 1})
  gsap.to(suitcase.current, 0.5, {y:-50, opacity: 0, ease: "power4.out",  delay: 2})
  gsap.fromTo(swim.current, 1, {opacity:0, y:50}, {opacity:1, y: 0, ease: "power4.out", delay: 2})
  gsap.to(swim.current, 0.5, {y:-50, opacity: 0, ease: "power4.out",  delay: 3})
  gsap.fromTo(home.current, 1, {opacity:0, y:50}, {opacity:1, y:0, ease: "power4.out", delay: 3})
  gsap.to(home.current, 0.5, {y:-50, opacity: 0, ease: "power4.out",  delay: 4})
  gsap.fromTo(com.current, 1, {opacity:0}, {opacity:1, ease: "power4.out", delay: 4, onComplete: ()=>{setAnimationPlaying(false)}})
  return () => {
    
  }
}, [logo, shadow, com, suitcase, home, swim])


const handleLogoHover = () => {
  let width = logo.current.scrollWidth;
  if(!animationPlaying){
    setAnimationPlaying(true);
    gsap.to(logo.current, 1 / 4, {y:-70, ease:"Power2.easeOut"})
    gsap.to(logo.current, 0.75 , {y:0, ease:"Bounce.easeOut", delay:1 / 4, onComplete: ()=>{setAnimationPlaying(false)}})
    gsap.to(shadow.current,  1 / 4, {width: width/2, ease:"Power2.easeOut"})
    gsap.to(shadow.current, 0.75, {width: width, ease:"Bounce.easeOut", delay: 1/4})
  }
} 

  return (
    <div className="App">
     <div className="main-hero" id = "main-hero">
  <div className="logo-container">
  <div className="hero-left">
    <img className="hero-logo" id="hero-logo" ref={logo} onMouseEnter={handleLogoHover} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU2IiBoZWlnaHQ9IjQ1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8IS0tIENyZWF0ZWQgd2l0aCBNZXRob2QgRHJhdyAtIGh0dHA6Ly9naXRodWIuY29tL2R1b3BpeGVsL01ldGhvZC1EcmF3LyAtLT4NCiA8Zz4NCiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPg0KICA8cmVjdCBmaWxsPSJub25lIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIGhlaWdodD0iNDU4IiB3aWR0aD0iNDU4IiB5PSItMSIgeD0iLTEiLz4NCiAgPGcgZGlzcGxheT0ibm9uZSIgb3ZlcmZsb3c9InZpc2libGUiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJjYW52YXNHcmlkIj4NCiAgIDxyZWN0IGZpbGw9InVybCgjZ3JpZHBhdHRlcm4pIiBzdHJva2Utd2lkdGg9IjAiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiLz4NCiAgPC9nPg0KIDwvZz4NCiA8Zz4NCiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPg0KICA8ZWxsaXBzZSByeT0iMjA3LjUiIHJ4PSIyMDcuNSIgaWQ9InN2Z182IiBjeT0iMjI4IiBjeD0iMjI4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjMDAwMDAwIi8+DQogIDxlbGxpcHNlIHJ5PSIyMDMuNSIgcng9IjIwMy41IiBpZD0ic3ZnXzgiIGN5PSIyMjgiIGN4PSIyMjgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9IiNmZmZmZmYiLz4NCiAgPGVsbGlwc2Ugc3Ryb2tlPSIjZmY2NjAwIiByeT0iMTg1LjUwMDAxIiByeD0iMTg1LjUwMDAxIiBpZD0ic3ZnXzQiIGN5PSIyMjciIGN4PSIyMjkiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSIjZmY2NjAwIi8+DQogIDxyZWN0IHN0cm9rZT0iIzAwMDAwMCIgaWQ9InN2Z18xMCIgaGVpZ2h0PSIxNDQuMDAwMDEiIHdpZHRoPSIxODYiIHk9IjIwNi40NTMxNCIgeD0iMTM1IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0iIzAwMDAwMCIvPg0KICA8cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMjMwLjA1NzQzNDA4MjAzMTMsMjIyLjA4MDg3MTU4MjAzMTIyKSAiIGlkPSJzdmdfMTEiIGQ9Im0xMzguMDU3NDksMzE0LjA4MDg4bDAsLTE4My45OTk5OWwxODMuOTk5OTIsMTgzLjk5OTk5bC0xODMuOTk5OTIsMHoiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiLz4NCiA8L2c+DQo8L3N2Zz4=" alt="Smarta" />
    <div className="shadow-container">
      <div id="logo-shadow" ref={shadow}></div>
    </div>
  </div>
  <div className="hero-right">
    <img className="text-logo" id="smartavillas" src="https://res.cloudinary.com/ddipteh80/image/upload/v1603324001/Smartavillas/method-draw-image_2.svg" alt="smartavillas.com"/>
    <div id="logo-spinner">
      <img className="text-logo" ref={com} id="com" src="https://res.cloudinary.com/ddipteh80/image/upload/v1603324001/Smartavillas/method-draw-image_3.svg" alt="smartavillas.com"/>
    <svg id="home" ref={home} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="svg-inline--fa fa-home fa-w-18" role="img" viewBox="0 0 576 512"><path fill="#000" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
      <svg  id="suitcase" ref={suitcase} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="suitcase-rolling" className="svg-inline--fa fa-suitcase-rolling fa-w-12 fa-9x" role="img" viewBox="0 0 384 512"><path fill="#000" d="M336 160H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48zm-16 216c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zM144 48h96v80h48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80h48V48z"/></svg>
      <svg id="swim" ref={swim} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="swimmer" className="svg-inline--fa fa-swimmer fa-w-20" role="img" viewBox="0 0 640 512"><path fill="#000" d="M189.61 310.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c16.02-14.77 34.5-22.58 53.46-22.58h16.3c18.96 0 37.45 7.81 53.46 22.58 3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c14.86-13.71 31.88-21.12 49.39-22.16l-112.84-80.6 18-12.86c3.64-2.58 8.28-3.52 12.62-2.61l100.35 21.53c25.91 5.53 51.44-10.97 57-36.88 5.55-25.92-10.95-51.44-36.88-57L437.68 98.47c-30.73-6.58-63.02.12-88.56 18.38l-80.02 57.17c-10.38 7.39-19.36 16.44-26.72 26.94L173.75 299c5.47 3.23 10.82 6.93 15.86 11.58zM624 352h-16c-26.04 0-45.8-8.42-56.09-17.9-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 343.58 442.04 352 416 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 343.58 250.04 352 224 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 343.58 58.04 352 32 352H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84 23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-512-96c44.18 0 80-35.82 80-80s-35.82-80-80-80-80 35.82-80 80 35.82 80 80 80z"/></svg>
    </div>
  </div>
    </div>
    <div>
  <h2>New Website Coming Soon!</h2>
  <h3>Get in touch to find our more.</h3>

    <ul className="list-icons">
      <li>
      <FontAwesomeIcon icon="at" /> reservas@smartavillas.com
      </li>
      <li>
      <FontAwesomeIcon icon="phone" /> +351 281027089 / +351 913692170
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'facebook']} /> facebook.com/smartavillas
      </li>
      <li>
      <FontAwesomeIcon icon={['fab', 'twitter']} /> twitter.com/smartavillas
      </li>
      <li>
      <FontAwesomeIcon icon={['fab', 'instagram']} /> instagram.com/smartavillas
      </li>
    </ul>

</div>
</div>
    </div>
  );
}

export default App;
