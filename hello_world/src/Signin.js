import React,{useState} from "react"

/*

    Kullanıcı Adı  [asdf]
    Şifre [qwrf]

*/

const Signin = ({mutlu}) => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    // setUsername("asdf") => username = "asdf"

    return <div>
        <h2>Signin ekranı</h2>
        <label>Kullanıcı Adı</label>
        <input value={username} onChange={(event)=>setUsername(event.target.value)} type="text"/>
        <br/><br/>
        <text>{username}</text>
        <br/><br/>
        <label>Şifre</label>
        <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password"/>
    </div>
    
}

export default Signin