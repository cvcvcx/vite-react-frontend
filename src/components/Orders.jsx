import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

export default function Orders() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [totalPage, setTotalPage] = useState(1);
  const navigate = useNavigate();
  const getGuestBookDateList = () => {
    axios
      .get(`/api/guestbook/list?page=${currentPage}&size=${pageSize}`)
      .then((result) => {
        setList((prev) => result.data.dtoList);
        setTotalPage((prev) => result.data.totalPage);
      });
  };
  useEffect(getGuestBookDateList, [currentPage, pageSize]);
  const handlePage = (event) => {
    const nowPageInt = parseInt(event.target.outerText);
    setCurrentPage(nowPageInt);
  };
  const handlePageSize = (event) => {
    setPageSize(event.target.value);
  };
  const handleRegisterBtn = (event) => {
    navigate("/register");
  };
  const handleIdClick = (id) => {
    navigate("/read", { state: id });
  };
  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <Title>제품 리스트</Title>
        <FormControl fullWidth sx={{ maxWidth: "120px" }}>
          <InputLabel id="page-size-label">게시글 수</InputLabel>
          <Select
            labelId="page-size-label"
            id="page-size-select"
            value={pageSize}
            label="page-size"
            onChange={handlePageSize}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>제목</TableCell>
            <TableCell align="right">작성일자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <TableRow
              hover
              key={item.id}
              onClick={() => {
                console.log(item.id);
                handleIdClick(item.id);
              }}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell align="right">{item.formattedRegDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 2 }}>
        <Pagination
          count={totalPage}
          showFirstButton
          showLastButton
          onChange={handlePage}
        />
      </Box>
      <Grid container justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{ mt: 1, maxWidth: 120 }}
          onClick={handleRegisterBtn}>
          제품등록
        </Button>
      </Grid>
    </Fragment>
  );
}
