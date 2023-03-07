
import './App.css';
import {UploadContent} from "../component/UploadContent/UploadContent"
import {ChoosePrompt} from "../component/ChoosePrompt/ChoosePrompt"
import {PreviewAndAdjustPrompt} from "../component/PreviewAndAdjustPrompt/PreviewAndAdjustPrompt"
import { useState } from 'react';

function App() {
  const [composerPhase, setComposerPhase] = useState("ChoosePrompt")
  const [copiedPrompt, setCopiedPrompt] = useState("")  //set textfield of PreviewAndAdjustPrompt
  const setComposerPhaseFunc = (newPhase) => {
    setComposerPhase(newPhase)
  }
  const setCopiedPromptFunc = (CopiedPrompt) =>{
    setCopiedPrompt(CopiedPrompt)
  }

  switch (composerPhase) {
    case "PreviewAndAdjustPrompt":
      return <PreviewAndAdjustPrompt copiedPrompt={copiedPrompt}/>
    default:
      return <ChoosePrompt setComposerPhaseFunc={setComposerPhaseFunc} setCopiedPromptFunc={setCopiedPromptFunc}/>
  };
}

export default App;
