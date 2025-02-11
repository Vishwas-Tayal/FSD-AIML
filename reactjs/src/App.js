// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;// import React from 'react'
// import Student from './Student';
// import logo from './anuj.png';

// function App() {
  // let a=20;
  // let mystyle={

  //   backgroundColor:'cyan',
  //   color:'red',
  //   border:'10px solid black',
  //   height:'100px'
  // }

// const studentdata={
//   college:"ABES EC",
//   name:"Sarthak Sharma",
//   roll:"2200321530149",
//   branch:"CSE_(AI-ML)",
//   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//   section:"C"
// }

//   return (
//      <div style={{marginLeft:"300px"}}>
//      <Student data={studentdata} />








      /* <Student  pic={<img src= {logo} height={100} width={100} />} roll="2200321530149" section="C" name = "Sarthak Sharma" branch = "CSE_(AI-ML)"/>

      <Student college="ABES EC" pic={<img src= {logo} height={100} width={100} />} roll="2200321530149" section="C" name = "Sarthak Sharma" branch = "CSE_(AI-ML)"/>

      <Student college="ABES EC" pic={<img src= {logo} height={100} width={100} />} roll="2200321530149" section="C" name = "Sarthak Sharma" branch = "CSE_(AI-ML)"/> */
      // </div>







    // <div style={{color:'red'}}>
    //   <h2>ABES Engineering College</h2>
    //   <div style={mystyle}>{a}</div>
    //   <div>
    //     <Student/>
    //   </div>
    //   </div>
//   )

// }

// export default App
import Registration from './Components/Registration'
import React from 'react'
// import StudentState from './StudentState'
// import ImageManipulation from './ImageManipulation'
// import UseEffectWorking from './UseEffectWorking'
import Login from './Components/Login'

function App() {
  return (
    <div style={{marginLeft:"300px"}}>
      {/* <ImageManipulation />
      <UseEffectWorking/> */}
      <Registration/>
      {/* <Login/> */}

    </div>
  )
}

export default App
