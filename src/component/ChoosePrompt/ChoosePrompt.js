import { Typography } from "@mui/material"
import { UserInterface } from "./component/UserInterface"




function ChoosePrompt({handleNext,setCopiedPromptFunc,activeStep,TabName}){

    return(
        <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step{activeStep + 1}  {TabName} </Typography>
            <UserInterface handleNext={handleNext} setCopiedPromptFunc={setCopiedPromptFunc}/>
        </>
    )
}

export {ChoosePrompt}