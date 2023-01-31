import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const RegisterContent = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handleOnSubmit = (event) => {
    console.log(event);
    axios
      .post("/api/guestbook/register", JSON.stringify(event), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("등록된 게시글 번호" + res.data);
        navigate("/list");
      });
  };

  return (
    <Layout>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <h1>게시글 작성 화면</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <h3>제목</h3>
          <Controller
            control={control}
            defaultValue={""}
            rules={{ required: true }}
            name="title"
            render={({ field }) => (
              <TextField label="title" fullWidth {...field} />
            )}
          />

          <h3>내용</h3>
          <Controller
            control={control}
            defaultValue={""}
            rules={{ required: true }}
            name="content"
            render={({ field }) => (
              <TextField
                {...field}
                label="content"
                fullWidth
                multiline
                rows={15}
              />
            )}
          />

          <h3>작성자</h3>
          <Controller
            control={control}
            defaultValue={""}
            rules={{ required: true }}
            name="writer"
            render={({ field }) => (
              <TextField {...field} label="writer" fullWidth />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, maxWidth: 120 }}>
            등록
          </Button>
        </form>
      </Paper>
    </Layout>
  );
};

export default RegisterContent;
