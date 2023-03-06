import {YourFavorite} from "./component/YourFavorite"
import {YourHistory} from "./component/YourHistory"
import {DefaultPrompt} from "./component/DefaultPrompt/DefaultPrompt"
import { UserInterface } from "./component/Tab"
// import  ZZZ  from "./component/Tab"
import { useState } from "react"




function ChoosePrompt(){

    return(
        <>
            <h1>Choose prompt</h1>
            <UserInterface/>
        </>

    )
    // switch (tabName){
    //     case "DefaultPrompt" :
    //         return(
    //             <>
    //                 
                    
    //                 <DefaultPrompt/>
    //             </>
    //         )
    //     case "YourHistory" :
    //         return(
    //             <>
    //                 <h1>Choose prompt</h1>
    //                 <Tab  />
    //                 <YourHistory/>
    //             </>
    //         )
    //     default :
    //         return(
    //             <>
    //                 <h1>Choose prompt</h1>
    //                 <Tab />
    //                 <YourFavorite/>
    //             </>
    //         )
    // }
}


export {ChoosePrompt}