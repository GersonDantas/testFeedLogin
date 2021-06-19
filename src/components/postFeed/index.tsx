import React from "react";
import Post from "./style";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Form from "../form";
import { SubmitHandler, useForm } from "react-hook-form";
import {MessagePost} from '../../services/authorization'

interface Props {
  message: string
}

const PostFeed: React.FC = () => {
  const { register, handleSubmit, reset} = useForm<Props>();
  const onSubmit: SubmitHandler<Props> = async (data) => {
    try {
      await MessagePost({message: data.message})
      reset()
    } catch (error) {
      return alert(error)
    }

  };
  return (
    <Post>
      <div className="divAvatar">
        <Avatar className="avatarPost"></Avatar>
      </div>
      <div className="divForm">
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="textArea"
            placeholder="text write from your post..."
            {...register("message", {
              required: true,
            })}
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
