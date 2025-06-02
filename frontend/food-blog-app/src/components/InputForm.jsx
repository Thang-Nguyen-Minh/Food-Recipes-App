import React ,{useState} from "react"
import axios from "axios"
export default function InputForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUp, setSignUp] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let endpoint = (signUp) ? "signUp" : "login";
        await axios.post(`http://localhost:5000/${endpoint}`, {
            email, password
        }).then(res => {
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("user",JSON.stringify(
                    res.data.user
                ))
            })
    }
    return (
        <>
            <form className='form' onSubmit={handleOnSubmit}>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='email' className='input'
                           onChange={(e) => setEmail(e.target.value)}
                           required />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' className='input'
                           onChange={(e) => setPassword(e.target.value)}
                           required />
                </div>
                <button type='submit'>{(signUp) ? "Sign Up" :"Login"}</button>
                <br/>
                <p onClick={() => setSignUp(prevState =>!prevState)}>{(signUp)
                    ? "Already have an account"
                    :"Create New Account"}
                </p>
            </form>
        </>
    )
}