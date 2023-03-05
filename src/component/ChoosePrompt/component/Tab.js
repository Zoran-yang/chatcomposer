// import "./Tab.css"

import { Box, Tabs } from "@mui/material";

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Tab({chooseTab}){

    return(
        <>
            {/* <span onClick={() => chooseTab("DefaultPrompt")} className="tab">Default Prompt</span>
            <span onClick={() => chooseTab("YourFavorite")} className="tab">Your Favorite</span>
            <span onClick={() => chooseTab("YourHistory")} className="tab">Your History</span> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs aria-label="basic tabs example">
                    <Tab label="DefaultPrompt" {...a11yProps(0)} onClick={() => chooseTab("DefaultPrompt")}/>
                    <Tab label="YourFavorite" {...a11yProps(1)} onClick={() => chooseTab("YourFavorite")}/>
                    <Tab label="YourHistory" {...a11yProps(2)} onClick={() => chooseTab("YourHistory")}/>
                </Tabs>
            </Box>
        </>
    )
}

export {Tab}