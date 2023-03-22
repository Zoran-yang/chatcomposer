
import { Box, Tabs} from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import Tab from '@mui/material/Tab';
import { DisplayDefaultPrompt } from "./DefaultPrompt/DisplayDefaultPrompt";
import {YourHistory} from "./YourHistory/YourHistory"
import { YourFavorite } from "./YourFavorite/YourFavorite";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}


function UserInterface({handleNext, handleCopiedPrompt, switchLanguage, isEnglish, FavoritePrompt, promptDetailAndState, setFavoritePrompt, setPromptDetailAndState}){
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function copyPromptToNextPhase(CopiedPrompt){
    handleCopiedPrompt(CopiedPrompt)
    handleNext()
  }

  return(
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" onChange={handleChange}>
                <Tab label="Suggested Prompt" {...a11yProps(0)} />
                <Tab label="My Favorite Prompt" {...a11yProps(1)} />
                <Tab label="My History" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <DisplayDefaultPrompt 
              // control the language
              switchLanguage = {switchLanguage} 
              isEnglish = {isEnglish}
              // set favorite prompt
              promptDetailAndState = {promptDetailAndState}
              FavoritePrompt={FavoritePrompt}
              setFavoritePrompt={setFavoritePrompt}
              setPromptDetailAndState={setPromptDetailAndState}
              // copy prompt to next phase
              copyPromptToNextPhase = {copyPromptToNextPhase}
            >
            </DisplayDefaultPrompt>
            <div><span>Reference : <a href="https://www.explainthis.io/zh-hant/chatgpt">ChatGPT 指令大全</a></span></div>
            <div><span>Come from : <a href="https://www.explainthis.io/zh-hant">ExplainThis</a>  Great website for frontend and backend info. Highly recommended resource for expanding development knowledge. </span></div>
      
        </TabPanel>
        <TabPanel value={value} index={1}>
          <YourFavorite 
            copyPromptToNextPhase={copyPromptToNextPhase} 
            FavoritePrompt={FavoritePrompt}
            isEnglish={isEnglish}
            setFavoritePrompt={setFavoritePrompt}
            setPromptDetailAndState={setPromptDetailAndState}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <YourHistory copyPromptToNextPhase={copyPromptToNextPhase}/>
        </TabPanel>
    </Box>
  )
}

export {UserInterface}