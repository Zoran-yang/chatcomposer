import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { pink } from "@mui/material/colors";
import { deleteFavoritePrompt } from "../../../../container/deleteFavoritePrompt";

function YourFavorite({
  copyPromptToNextPhase,
  FavoritePrompt,
  isEnglish,
  setFavoritePrompt,
  setPromptDetailAndState,
}) {
  if (!FavoritePrompt.length) {
    return <Typography>Add your favorite prompt.</Typography>;
  }
  return (
    <Box>
      <List sx={{ maxHeight: 300, overflow: "auto" }}>
        {FavoritePrompt.map((prompt, index) => {
          return (
            <Fragment key={prompt["prompt"]}>
              <ListItem component="div" sx={{ display: "block" }}>
                <div style={{ display: "flex" }}>
                  <ListItemText primary={prompt["prompt"]} />
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() =>
                      deleteFavoritePrompt(
                        FavoritePrompt,
                        index,
                        isEnglish,
                        setFavoritePrompt,
                        setPromptDetailAndState
                      )
                    }
                  >
                    <DeleteForeverOutlinedIcon sx={{ color: pink[500] }} />
                  </Button>
                </div>
                <>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => copyPromptToNextPhase(prompt["prompt"])}
                  >
                    Choose and Next
                  </Button>
                </>
              </ListItem>
              <Divider />
            </Fragment>
          );
        })}
      </List>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      ></div>
    </Box>
  );
}

export { YourFavorite };
