import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        username : "",
        email : "",
        password : "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
        });
    }

    let handleSubmit = (event) =>{
        event.preventDefault()
        console.log(formData)
        setFormData({
            username : "",
            email : "",
            password : "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter Your Name" name="username" id="username" value={formData.username} onChange={handleInputChange}/>
            <br /><br />
            <label htmlFor="username">email</label>
            <input type="text" placeholder="Enter Your email" id="email" name="email" value={formData.email} onChange={handleInputChange}/>
            <br /><br />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="Enter password" id="password" name="password" value={formData.password} onChange={handleInputChange}/>
            <br /><br />
            <button>Submit</button>
        </form>
    )
}

