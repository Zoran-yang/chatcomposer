import { UserInterface } from "./component/UserInterface"




function ChoosePrompt({setComposerPhaseFunc,setCopiedPromptFunc}){

    return(
        <>
            <h1>Choose prompt</h1>
            <UserInterface setComposerPhaseFunc={setComposerPhaseFunc} setCopiedPromptFunc={setCopiedPromptFunc}/>
        </>
    )
}

export {ChoosePrompt}