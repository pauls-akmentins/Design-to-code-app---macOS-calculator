import { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue } from "@mui/material/colors";

import { PostValues } from "../types";
import { formatDate } from "../../shared/utils";
import { Button, Stack } from "@mui/material";

const SinglePost: React.FC<
  PostValues & { handleRemovePost: (post_id: string) => void }
> = ({
  post_id,
  post_author,
  post_title,
  post_body,
  post_date,
  handleRemovePost,
}) => {
  const formattedDate = formatDate(Number(post_date));

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Card sx={{ width: 360, margin: "8px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              {post_author.slice(0, 1)}
            </Avatar>
          }
          action={
            <>
              <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Popover
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="row"
                >
                  <Button
                    color="error"
                    onClick={() => handleRemovePost(post_id)}
                  >
                    <DeleteIcon />
                    <Typography sx={{ p: 1 }}>Delete</Typography>
                  </Button>
                </Stack>
              </Popover>
            </>
          }
          title={<strong>{post_title}</strong>}
          subheader={formattedDate}
        />
        <CardContent>{post_body}</CardContent>
      </Card>
    </>
  );
};

export default SinglePost;
