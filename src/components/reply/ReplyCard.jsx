import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ReplyCard = ({ data, setReplies }) => {
  const [isModify, setIsModify] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_PRODUCTION_API_URL;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleOnClickReplyModifyBtn = () => {
    setIsModify(true);
  };
  const handleModalClose = () => {
    setIsModify(false);
  };
  const handleOnClickReplyDeleteBtn = () => {
    axios
      .delete(`${apiUrl}/replies/${data.rno}`)
      .then((res) => console.log(res));
    setReplies((prev) => prev.filter((i) => i.rno !== data.rno));
  };

  const handleReplyOnSubmit = (formData) => {
    const postData = { ...formData, rno: data.rno, bno: data.bno };
    console.log(postData);
    axios
      .put(`${apiUrl}/replies/${data.rno}`, JSON.stringify(postData), {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        alert(res.data);
        navigate(0);
      });
  };

  return (
    <>
      <Card variant="outlined" sx={{ minWidth: 275, mt: 1 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.rno}
          </Typography>
          <Typography variant="h5" component="div">
            {data.text}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography variant="body2">{data.replyer}</Typography>
          <Typography variant="body2">{data.modDate}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            size="small"
            variant="contained"
            color="success"
            onClick={handleOnClickReplyModifyBtn}>
            ??????
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={handleOnClickReplyDeleteBtn}>
            ??????
          </Button>
        </CardActions>
      </Card>
      <Modal open={isModify} onClose={handleModalClose}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(handleReplyOnSubmit)}>
            <h3>??????</h3>
            <TextField
              rows={3}
              label="comments"
              name="text"
              {...register("text", {
                required: "?????? ????????? ???????????????????????????.",
              })}
              fullWidth
              error={errors.text}
              defaultValue={data.text}
              helperText={errors.text?.message}
              multiline
            />
            <TextField
              label="?????????"
              sx={{ mt: 1 }}
              name="replyer"
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
              defaultValue={data.replyer}
              {...register("replyer", {
                required: "???????????? ???????????????????????????.",
              })}
              error={errors.replyer}
              helperText={errors.replyer?.message}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button sx={{ mt: 2 }} variant="contained" type="submit">
                ??????
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ReplyCard;
