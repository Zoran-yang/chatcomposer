
import './App.css';
import { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { ChoosePrompt } from "../component/ChoosePrompt/ChoosePrompt"
import { PreviewAndAdjustPrompt } from "../component/PreviewAndAdjustPrompt/PreviewAndAdjustPrompt"
import { NewChinesePromptInfo, NewPromptInfo } from "../component/ChoosePrompt/component/DefaultPrompt/DataProcessingPrompt"


// localStorage.setItem("englishPrompt", "[]")
// localStorage.setItem("chinesePrompt", "[]")
// localStorage.setItem('chinesePromptFavorite',  "[]")
// localStorage.setItem("englishPromptFavorite",  "[]")

const oldFavoritePrompt = JSON.parse(localStorage.getItem('My Favorite prompt')||"[]");
if (oldFavoritePrompt.length) {
  localStorage.setItem('englishPromptFavorite', JSON.stringify(oldFavoritePrompt));
  localStorage.removeItem('My Favorite prompt');
}


function App() {

  const steps = ['Choose your prompt', 'Preview and adjust your prompt'];
  const [isEnglish, setIsEnglish] = useState("englishPrompt");
  const localPromptDetailAndState = getLocalPromptDetailAndState(isEnglish);
  const [promptDetailAndState, setPromptDetailAndState] = useState(localPromptDetailAndState)
  const localFavoritePrompt = JSON.parse(localStorage.getItem(isEnglish +'Favorite')||"[]");
  const [copiedPrompt, setCopiedPrompt] = useState("")  //set textfield of PreviewAndAdjustPrompt
  const [FavoritePrompt, setFavoritePrompt] = useState(localFavoritePrompt)

  const handleCopiedPrompt = (CopiedPrompt) =>{
    setCopiedPrompt(CopiedPrompt)
  }

  const handleIsEnglish = (event) => {
    const newLanguage = isEnglish === "englishPrompt" ? "chinesePrompt" : "englishPrompt";
    setIsEnglish(newLanguage);
    setPromptDetailAndState(getLocalPromptDetailAndState(newLanguage));
    setFavoritePrompt(JSON.parse(localStorage.getItem(newLanguage + 'Favorite') || "[]"));
  };

  
  function switchLanguage(status, english, chinese){
    return status === "englishPrompt"? english : chinese
  }

  function getLocalPromptDetailAndState(language) {
    let localData = JSON.parse(localStorage.getItem(language) || "[]");
    if (!localData.length) {
      localData = language === "englishPrompt" ? NewPromptInfo["PromptDetail"] : NewChinesePromptInfo["PromptDetail"];
    }
    return localData;
  }



  // control the movement of the stepper
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



  //-----------------------------------------------------------------------------------------------------
  


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
              // set choosed prompt to preview 
              copiedPrompt={copiedPrompt} 
              // control the movement of the stepper
              activeStep ={activeStep} 
              handleNext={handleNext} 
              handleBack={handleBack} 
              TabName = {steps[activeStep]}
              // set favorite prompt
              FavoritePrompt = {FavoritePrompt}
              isEnglish = {isEnglish}
              setFavoritePrompt = {setFavoritePrompt}
              setPromptDetailAndState = {setPromptDetailAndState}
            />) 
          : (<ChoosePrompt 
                // control the movement of the stepper
                activeStep ={activeStep} 
                handleNext={handleNext} 
                TabName = {steps[activeStep]}
                // control the language
                isEnglish = {isEnglish}
                handleCopiedPrompt={handleCopiedPrompt} 
                handleIsEnglish={handleIsEnglish} 
                switchLanguage ={switchLanguage} 
                // set favorite prompt
                FavoritePrompt = {FavoritePrompt}
                promptDetailAndState = {promptDetailAndState}
                setFavoritePrompt = {setFavoritePrompt}
                setPromptDetailAndState = {setPromptDetailAndState}
              />)
        )
      }
    </Box>
  );
}

export default App;
