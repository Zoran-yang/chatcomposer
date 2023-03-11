import { Box, Stack, Typography } from "@mui/material"
import { UserInterface } from "./component/UserInterface"
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));


function ChoosePrompt({handleNext,setCopiedPromptFunc,activeStep,TabName,handleIsEnglish,isEnglish}){
  return(
    <>
      <Box sx ={{display :"flex", alignContent: "center"}}>
          <Typography sx={{ m: "auto", p:"1"}}>Step{activeStep + 1}  {TabName} </Typography>
          <Box sx={{ flex: '1 1 auto' }} />
          <Stack direction="row" spacing={1} alignItems="center">
              <Typography>中</Typography>
              <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={handleIsEnglish}/>
              <Typography>English</Typography>
          </Stack>
      </Box>
      <UserInterface handleIsEnglish={handleIsEnglish} isEnglish ={isEnglish} handleNext={handleNext} setCopiedPromptFunc={setCopiedPromptFunc}/>
    </>
  )
}

export {ChoosePrompt}