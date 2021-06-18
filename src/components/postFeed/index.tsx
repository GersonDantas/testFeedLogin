import React from "react";
import Post from "./style";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Form from "../form";

interface Props {
}

const PostFeed: React.FC<Props> = () => {
  return (
    <Post>
      <div className="divAvatar">
        <Avatar className="avatarPost"></Avatar>
      </div>
      <div className="divForm">
        <Form>
          <textarea
            className="textArea"
            placeholder="text write from your post..."
          />
          <div className="divButPost">
            <Button type="submit" className="buttonPost" variant="contained">
              Text Post
            </Button>
          </div>
        </Form>
      </div>
    </Post>
  );
};

export default PostFeed;
