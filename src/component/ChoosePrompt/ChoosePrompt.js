import {YourFavorite} from "./component/YourFavorite"
import {YourHistory} from "./component/YourHistory"
import {DefaultPrompt} from "./component/DefaultPrompt/DefaultPrompt"
import { Tab } from "./component/Tab"
import { useState } from "react"




function ChoosePrompt(){
    const [tabName, setTabName] = useState("DefaultPrompt")
    const chooseTab = (tab) => {
        setTabName(tab)
        console.log("AC")
    }

    switch (tabName){
        case "DefaultPrompt" :
            return(
                <>
                    <h1>Choose prompt</h1>
                    <Tab chooseTab = {chooseTab} />
                    <DefaultPrompt/>
                </>
            )
        case "YourHistory" :
            return(
                <>
                    <h1>Choose prompt</h1>
                    <Tab chooseTab = {chooseTab} />
                    <YourHistory/>
                </>
            )
        default :
            return(
                <>
                    <h1>Choose prompt</h1>
                    <Tab chooseTab = {chooseTab} />
                    <YourFavorite/>
                </>
            )
    }
}


export {ChoosePrompt}