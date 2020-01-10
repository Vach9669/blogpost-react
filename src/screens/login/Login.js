import React, { useState } from 'react';
import '../login/login.css';
import Api from '../../api/Api';
import Storage from "../../services/Storage"


function Login({ onClickFunction }) {
  const [loginInfo, setLoginInfo] = useState({email: "", password: ""});

  const onSubmitFunction = (e) => {
    e.preventDefault();
    if(loginInfo.email && loginInfo.password) {
      Api.people.login(loginInfo)
      .then(res => {
        if(!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then(data => {
        Storage.set("token", data.id);
        Storage.set("userId", data.userId);
        onClickFunction("Workspace");
      })
      .catch(() => {
        alert("Wrong email or password!")
      })
    }
    else {
      alert("Please fill in all fields!")
    }
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({...loginInfo, [name]: value})
  }
    return (

            
<div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
							<article>
								<form>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
											<input type="text" 
											value={loginInfo.username}
											name="email"
											className="form-control" 
											placeholder="Email Address" 
											onChange={onHandleChange}/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon">
												<i className="fa fa-key"> </i>
											</span>
											<input type="password" 
											value={loginInfo.password}
											name="password"
											className="form-control" 
											placeholder="Password"
											onChange={onHandleChange} 
											/>
										</div>
									</div>
									  <button type="submit"
									   className="btn btn-warning btn-block"
									   onClick={onSubmitFunction}
									   >
										   Login
										</button>
									  
								</form>
							</article>
						</section></div>
            
                
            
    )
}

export default Login
