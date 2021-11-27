import React from "react";
import Signin from "./Signin"
import Signup from "./Signup"

const ScreenSelector = ({isLogin}) => {

    if(isLogin){
        return <Signin/>
    }else{
        return <Signup/>
    }
}

export default ScreenSelector