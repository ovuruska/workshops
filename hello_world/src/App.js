import React, { useState } from "react"
import ScreenSelector from "./ScreenSelector"

const App = () => {

    const [isSignin,setSignin] = useState(false)


    return <>
        
        <button disabled={isSignin} onClick={() => setSignin(true)}>Signin</button>
        <button disabled={!isSignin} onClick={() => setSignin(false)}>Signup</button>
        <ScreenSelector isLogin={!isSignin}/>
    </>
    
}

export default App