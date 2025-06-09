import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

type LoginInputs = {
  username: string;
  password: string;
};

export const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
          noValidate
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="ユーザー名"
            autoComplete="username"
            autoFocus
            {...register("username", { required: "ユーザー名は必須です" })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="パスワード"
            type="password"
            autoComplete="current-password"
            {...register("password", {
              required: "パスワードは必須です",
              minLength: {
                value: 6,
                message: "パスワードは6文字以上で入力してください",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ログイン
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
