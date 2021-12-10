import React from 'react'

const Page = ()=> {
    return (
        <div className="page">

        <div className="page-illustration">
            <img src={Loginman} style={{"--shift": "-200"}} />
            <img src={LogManWoman} style={{"--shift": "200"}} />
        </div>

        {/* My logo */}
        <img src={logo} alt="Logo" />
        
        <div className="box">
            <h2>Login</h2>
            <span>Access your resource edge account</span>

            {/* If current field is password  field*/}

            {
                progress === 1
                ?

                <div className="email-name-edit">
                    <p>
                        <h2>Ositadinma Nwangwu</h2>
                        <sm>o.nwangwu@genesystechhub.com</sm>
                    </p>
                    <img src={pencil} alt="Pencil" onClick={backStep} />
                </div>

                : null
            }

            {/* My form */}
            <form className="form-control">
                <div className="input-group">
                    <div className={progress === 0 ? "form-item initial-comein" : progress === 1  ? "form-item backward" :  "form-item forward"} style={{"--fromX":"-100%", "--toX": "0%", "--opacityFrom": "0", "--opacityTo": "1"}}>
                        <label>Email Address</label>
                        <div className="form-group-item">
                            <input type="email" placeholder="Enter email" value={user.email} onChange={validateInput} autoFocus autoCorrect={true}/>
                        </div>
                    </div>


                    <div className={progress === 1 ? "form-item initial-comein" :  progress === -1 ? "form-item forward": "form-item"} style={{"--fromX":"0%", "--toX": "100%", "--opacity": "0", "--opacityFrom": "1", "--opacityTo": "0"}}>
                        <label>Password</label>
                        <div className="form-group-item">
                            <input type={!showPassword ? "password" : "text"} placeholder="Enter password" value={user.password} onChange={validateInput}/>
                            <img src={!showPassword ? show : hide} alt="Show password" onClick={togglePassword} />
                        </div>
                    </div>

                </div>
                <div className="form-item">
                    <button className={ isValid ? "active-btn" : "inactive-btn"} onClick={nextStep}>Next</button>
                </div>
            </form>

            <hr/>

            <a href="#">Forgot password?</a>

        </div>
        
    </div>
    )
}

export default Page
