import { BrowserRouter as Router, Switch, Route ,Routes} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import Login from './components/Login/Login';
// import { Navbar } from 'reactstrap';
import Navbar from './components/Navbar';

// import SignIn from './components/SignIn/SignIn';

// const firebaseConfig = {
//   apiKey: "AIzaSyBHTEclPV8uOlVizq3ZZyXvednFscvt2TQ",
//   authDomain: "artisan-950a2.firebaseapp.com",
//   projectId: "artisan-950a2",
//   storageBucket: "artisan-950a2.appspot.com",
//   messagingSenderId: "1083776620643",
//   appId: "1:1083776620643:web:f5ee5fe35b0dce15a0c056",
//   measurementId: "G-9G8HH86QM2"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

function App() {
  // const auth = firebase.auth();
  // useEffect(() => {
  //   const initializeRecaptcha = async () => {
  //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: function (response) {
  //           console.log("Captcha Resolved");
  //         },
  //         defaultCountry: "IN",
  //       }
  //     );
  
  //     await window.recaptchaVerifier.render();
  //   };
  
  //   initializeRecaptcha();
  // }, []);
  
  

  return (
    <div className="App">
      {/* <Routes>
       
          <Route path="/signin" exact  element={<SignIn />}> 
           
          </Route>
         
       
      </Routes> */}
      {/* <Login /> */}
      <Navbar />
    </div>
  );
}

export default App;
