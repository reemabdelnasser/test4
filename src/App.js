import logo from './logo.svg';
import './App.css';
import './test-4.js';
function App() {
  return (
<div>
<div id = "box" className="box">
    <div className="log">
        <h2>Already a Member? Log in here.</h2>
            <div className="log-user">
                <input type="text" required/>
                <label>Username</label>
            </div>
            <div className="log-user">
                <input type="password" required/>
                <label>Password</label>
            </div>
          <button className="submit" type="button">Login</button>
        <div id="frgt-pass" className="frgt-pass">
            <input type="text" required/>
            <label>Username or Email*</label>
            <button className="submit" type="button">Reset Password</button>
        </div>
    </div>
    <div  id="box" className="hide">
        <button onclick="expandBox()">Forgot password</button>
      </div>
    <div className="Reg">
        <h2>Do not have an account? Register here</h2>
        <div className="Reg-user">
            <input type="text" required/>
            <label>Username</label>
        </div>
        <div className="Reg-user">
            <input type="password" required/>
            <label>Password</label>
        </div>
        <div className="Reg-user">
            <input type="password" required/>
            <label>Confirm Password</label>
        </div>
          <button className="submit" type="button">Register</button>
    </div>
    </div>
    </div>
  );
}

export default App;
