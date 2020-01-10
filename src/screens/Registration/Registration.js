import React, {useState} from 'react';
import './Registration.css'
import Api from '../../api/Api';

function Registration({onClickFunction}) {
    const [registrationInfo, setRegistrationInfo] = useState({email: "", password: "", firstname: "", lastname: ""})

    const onSubmitFunction = (e) => {
        e.preventDefault();
        if(registrationInfo.email && registrationInfo.password && registrationInfo.firstname && registrationInfo.lastname){
           Api.people.registration(registrationInfo)

            .then(res => {
              if(!res.ok) {
              throw new Error();
            }
                return res.json();
            })
            .then(data => {
                onClickFunction("Login");
            })
            .catch(() => {
                alert("error")
            })
        }
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationInfo({...registrationInfo, [name]: value})
  }
            



    return (
        <div>
            <div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
							<article>
								<form>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											<input type="text" 
											name="firstname"
											className="form-control"
											placeholder="First Name" 
											value={registrationInfo.firstname}
											onChange={onHandleChange}/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											<input type="text"
											 name="lastname"
											 className="form-control"
											 placeholder="Last Name" 
											 value={registrationInfo.lastname}
											 onChange={onHandleChange}/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
											<input type="email" 
											className="form-control" 
											name='email' 
											placeholder="Email Address" 
											value={registrationInfo.email}
											onChange={onHandleChange}/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-key"> </i></span>
											<input type="password"
											name="password" 
											className="form-control"
											placeholder="Password" 
											value={registrationInfo.password}
											onChange={onHandleChange}/>
										</div>
									</div>
									  <button type="submit"
									   className="btn btn-success btn-block"
									   onClick={onSubmitFunction}
									   >
										   Registration
									</button>
								</form>
							</article>
						</section></div>
        </div>
    )
}

export default Registration
