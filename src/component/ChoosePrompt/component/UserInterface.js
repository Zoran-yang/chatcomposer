// import "./Tab.css"

import { Box, Tabs} from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import Tab from '@mui/material/Tab';
import { DisplayDefaultPrompt } from "./DefaultPrompt/DisplayDefaultPrompt";
import {YourHistory} from "./YourHistory/YourHistory"

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


function UserInterface({handleNext, setCopiedPromptFunc, isEnglish}){
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" onChange={handleChange}>
                <Tab label="Suggested Prompt" {...a11yProps(0)} />
                {/* <Tab label="Your Favorite Prompt" {...a11yProps(1)} /> */}
                <Tab label="Your History" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <DisplayDefaultPrompt isEnglish ={isEnglish} handleNext={handleNext} setCopiedPromptFunc={setCopiedPromptFunc}></DisplayDefaultPrompt>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <YourHistory />
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
    </Box>
  )
}

export {UserInterface}