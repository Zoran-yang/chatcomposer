
import './App.css';
import {ChoosePrompt} from "../component/ChoosePrompt/ChoosePrompt"
import {PreviewAndAdjustPrompt} from "../component/PreviewAndAdjustPrompt/PreviewAndAdjustPrompt"
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Choose your prompt', 'Preview and adjust your prompt'];
const localFavoritePrompt = JSON.parse(localStorage.getItem('My Favorite prompt')||"[]");

function App() {

  const [copiedPrompt, setCopiedPrompt] = useState("")  //set textfield of PreviewAndAdjustPrompt
  const setCopiedPromptFunc = (CopiedPrompt) =>{
    setCopiedPrompt(CopiedPrompt)
  }

  const [isEnglish, setIsEnglish] = useState(true);
  const handleIsEnglish = (event) => {
    if (isEnglish) setIsEnglish(false)
    if (!isEnglish) setIsEnglish(true)
  };

  const [FavoritePrompt, setFavoritePrompt] = useState(localFavoritePrompt)
  const setPromptToMyFavorite = (prompt) => {
    FavoritePrompt.unshift(prompt);
    localStorage.setItem('My Favorite prompt', JSON.stringify(FavoritePrompt));
  }


  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

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

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


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
            />) 
          : (<ChoosePrompt 
                handleIsEnglish={handleIsEnglish} 
                isEnglish ={isEnglish} 
                handleNext={handleNext} 
                setCopiedPromptFunc={setCopiedPromptFunc} 
                activeStep ={activeStep} 
                TabName = {steps[activeStep]}
                FavoritePrompt = {FavoritePrompt}
                setPromptToMyFavorite = {setPromptToMyFavorite}
              />)
        )
      }
    </Box>
  );
}

export default App;
