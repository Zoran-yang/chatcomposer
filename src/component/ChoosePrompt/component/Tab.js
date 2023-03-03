import "./Tab.css"


function Tab({chooseTab}){
    return(
        <>
            <span onClick={() => chooseTab("DefaultPrompt")} className="tab">Default Prompt</span>
            <span onClick={() => chooseTab("YourFavorite")} className="tab">Your Favorite</span>
            <span onClick={() => chooseTab("YourHistory")} className="tab">Your History</span>
        </>
    )
}

export {Tab}