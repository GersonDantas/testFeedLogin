import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Post from "./style";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Form from "../form";
import Input from "@components/field/input";
import { useForm } from "react-hook-form";
import { MessagePost } from "../../services/authorization";
import { Context } from "../../utils/Context/Contex";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Router } from "@material-ui/icons";

interface Props {
  message: string;
}

const shema = yup.object().shape({
  message: yup.string().required("Cannot post without message").max(2000),
});

const PostFeed: React.FC = () => {
  const { setIsloading } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    setIsloading(false)
    setInterval(() => router.push('/feed'),5000) //update página
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<Props>({
    resolver: yupResolver(shema),
  });

  const onSubmit = async (data: Props) => {
    try {
      setIsloading(true);
      await MessagePost(JSON.stringify({message: data.message}));
      setIsloading(false);
      reset();
    } catch (error) {
      return alert("server error");
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
            {...register("message")}
          />
          <div className="divButPost">
            <div>
              {errors.message?.message && <p>{errors.message?.message}</p>}
            </div>
            <Button
              type="submit"
              className="buttonPost"
              variant="contained"
              onClick={() => setTimeout(() => clearErrors(), 2000)}
            >
              Text Post
            </Button>
          </div>
        </Form>
      </div>
    </Post>
  );
};

export default PostFeed;
