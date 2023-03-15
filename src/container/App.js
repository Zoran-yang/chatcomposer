
import './App.css';
import {ChoosePrompt} from "../component/ChoosePrompt/ChoosePrompt"
import {PreviewAndAdjustPrompt} from "../component/PreviewAndAdjustPrompt/PreviewAndAdjustPrompt"
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Button } from '@mui/material';
import {NewChinesePromptInfo, NewPromptInfo} from "../component/ChoosePrompt/component/DefaultPrompt/DataProcessingPrompt"

// localStorage.setItem("englishPrompt", "[]")
// localStorage.setItem("chinesePrompt", "[]")
// localStorage.setItem('chinesePromptFavorite',  "[]")
// localStorage.setItem("englishPromptFavorite",  "[]")


function App() {

  const steps = ['Choose your prompt', 'Preview and adjust your prompt'];
  
  const [isEnglish, setIsEnglish] = useState("englishPrompt");
  let localFavoritePrompt = JSON.parse(localStorage.getItem(isEnglish +'Favorite')||"[]");
  let localPromptDetailAndState = JSON.parse(localStorage.getItem(isEnglish)||"[]")
  if(!localPromptDetailAndState.length) localPromptDetailAndState = NewPromptInfo["PromptDetail"]
  const [promptDetailAndState, setPromptDetailAndState] = useState(localPromptDetailAndState)
  // console.log(JSON.parse(localStorage.getItem("englishPrompt")||"[]"))
  // console.log(JSON.parse(localStorage.getItem("chinesePrompt")||"[]"))
 

  const [copiedPrompt, setCopiedPrompt] = useState("")  //set textfield of PreviewAndAdjustPrompt
  const setCopiedPromptFunc = (CopiedPrompt) =>{
    setCopiedPrompt(CopiedPrompt)
  }
 

  const handleIsEnglish = (event) => {
    if (isEnglish === "englishPrompt") {
      setPromptDetailAndState(() => {
        localPromptDetailAndState = JSON.parse(localStorage.getItem("chinesePrompt")||"[]");
        if(!localPromptDetailAndState.length) localPromptDetailAndState = NewChinesePromptInfo["PromptDetail"]
        return localPromptDetailAndState
      })
      setFavoritePrompt(JSON.parse(localStorage.getItem('chinesePromptFavorite')||"[]"))
      setIsEnglish("chinesePrompt")
    }
    if (isEnglish !== "englishPrompt") {
      setPromptDetailAndState(() => {
        localPromptDetailAndState = JSON.parse(localStorage.getItem("englishPrompt")||"[]");
        if(!localPromptDetailAndState.length) localPromptDetailAndState = NewPromptInfo["PromptDetail"]
        return localPromptDetailAndState
      })
      setFavoritePrompt(JSON.parse(localStorage.getItem("englishPromptFavorite")||"[]"))
      setIsEnglish("englishPrompt")
    }
    
  };

  
  function switchLanguage(status, english, chinese){
    if (status === "englishPrompt") return english
    return chinese
  }
  

  const [FavoritePrompt, setFavoritePrompt] = useState(localFavoritePrompt)

  const setPromptToMyFavorite = (prompt, sourceInfo) => {
    let obj = {}
    const {typeIndex, titleIndex, source} = sourceInfo
    obj["prompt"] = prompt
    obj["sourceInfo"] = sourceInfo
    setFavoritePrompt(() => {
      const copy = [...FavoritePrompt]
      copy.push(obj)
      localStorage.setItem(isEnglish +'Favorite', JSON.stringify(copy));
      return copy
    })
    

    if (source === "DisplayDefaultPrompt"){
      setPromptDetailAndState(prevState => {
        const copy = [...prevState]
        copy[typeIndex][titleIndex]["favoritePromptPos"] = FavoritePrompt.length 
        //We need the "FavoritePrompt.length-1" as our index of array.However, FavoritePrompt is state which will change after render. 
        copy[typeIndex][titleIndex]["IsFavorite"] = true
        localStorage.setItem(isEnglish, JSON.stringify(copy))
        return copy
      })
    }
  }

  function deleteFavoritePrompt(index){
    if (index > -1) {
      // Send state-changing info back to "DisplayDefaultPrompt"
      let sourceOfPrompt = FavoritePrompt[index]["sourceInfo"]["source"]||""

      switch (sourceOfPrompt) {
        case  "DisplayDefaultPrompt" :  //At same time, this function will delete the info saved in corresponding prompt.  
          let {typeIndex, titleIndex} = FavoritePrompt[index]["sourceInfo"]
          setPromptDetailAndState(prevState => {
            const copy = [...prevState]
            copy[typeIndex][titleIndex]["IsFavorite"] = false       // it will affect the form of button
            delete copy[typeIndex][titleIndex]["favoritePromptPos"] // The position of the prompt in favoritePrompt
            localStorage.setItem(isEnglish, JSON.stringify(copy));
            return copy
          })
          break
        default :
          break
      }

      //del prompt in FavoritePrompt
      setFavoritePrompt(() => {
        const copy = [...FavoritePrompt]
        copy.splice(index, 1);
        const revisedFavoritePrompt = [...copy];
        localStorage.setItem(isEnglish +'Favorite', JSON.stringify(revisedFavoritePrompt))
        return copy
      })


    }
  }

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  function IsFavoriteButton({isFavoriteState, PromptInfo, typeIndex, titleIndex, source, favoritePromptPos}){
    const [buttonState, setButtonState] = useState(isFavoriteState)

    function handleButtonState() {
      setButtonState(!buttonState)
    }

    function RenderButton({buttonState, PromptInfo, favoritePromptPos}){
      
      if (!buttonState) {  
        return (
          <Button 
            variant="outlined" 
            size="small" 
            onClick={()=> {
              setPromptToMyFavorite(PromptInfo, {"source":source,"typeIndex" : typeIndex, "titleIndex" : titleIndex})
              handleButtonState()
            }}
          >
            <FavoriteBorderOutlinedIcon />                                    
          </Button> 
        )
      }
      return (
        <Button 
          variant="outlined" 
          size="small" 
          onClick={() => {
            deleteFavoritePrompt(favoritePromptPos)
            handleButtonState()
          }}
        >
          <FavoriteOutlinedIcon />                               
        </Button>       
      )
    }

    return (
        <RenderButton buttonState = {buttonState} PromptInfo={PromptInfo} favoritePromptPos = {favoritePromptPos}/> 
    )
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {/* <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button> */}
          </Box>
        </>
      ) : 
        (activeStep === 1 ? 
          (<PreviewAndAdjustPrompt 
              copiedPrompt={copiedPrompt} 
              handleNext={handleNext} 
              handleBack={handleBack} 
              activeStep ={activeStep} 
              TabName = {steps[activeStep]}
              setPromptToMyFavorite = {setPromptToMyFavorite}
            />) 
          : (<ChoosePrompt 
                handleIsEnglish={handleIsEnglish} 
                switchLanguage ={switchLanguage} 
                handleNext={handleNext} 
                setCopiedPromptFunc={setCopiedPromptFunc} 
                activeStep ={activeStep} 
                TabName = {steps[activeStep]}
                FavoritePrompt = {FavoritePrompt}
                setPromptToMyFavorite = {setPromptToMyFavorite}
                deleteFavoritePrompt = {deleteFavoritePrompt}
                IsFavoriteButton = {IsFavoriteButton}
                promptDetailAndState = {promptDetailAndState}
                isEnglish = {isEnglish}
              />)
        )
      }
    </Box>
  );
}

export default App;
