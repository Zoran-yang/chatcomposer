import { PromptInfo } from "./PromptInfo"
import { useState } from "react"
import { DisplayDefaultPromptDetail } from "./DisplayDefaultPromptDetail";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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
            <Typography>{children}</Typography>
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

function DisplayDefaultPrompt(){
    const [promptType, setPromptType] = useState("Programming")
    const choosePromptType = (tab) => {
        setPromptType(tab)
    }

    return(
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs aria-label="basic tabs example">
                    {Object.keys(PromptInfo).map((prompt, index) =>{
                        return (
                            <Tab label={prompt} {...a11yProps(index)} onClick={()=>choosePromptType(prompt)}/>
                        )
                    })}
                </Tabs>
            </Box>
            <DisplayDefaultPromptDetail choosedPromptType = {PromptInfo[promptType]}/>
        </>
    )
}

export {DisplayDefaultPrompt}
