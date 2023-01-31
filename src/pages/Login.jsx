import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: -8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form">
          <TextField
            margin="dense"
            label="Email Address"
            fullWidth
            required
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="dense"
            label="Password"
            fullWidth
            required
            name="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            SignIn
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>Forget password?</Link>
            </Grid>
            <Grid item xs>
              <Link href="/list">Go List</Link>
            </Grid>
            <Grid item>
              <Link>Sign UP</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
