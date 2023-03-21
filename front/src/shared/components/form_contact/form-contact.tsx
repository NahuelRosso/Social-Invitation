"use client";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values));
  });

  return (
    <Container sx={{ mt: 9, mb: 10 }} maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4" align="center">
              Contáctanos
            </Typography>
            <Box component="form" onSubmit={onSubmit}>
              <TextField
                {...(errors.firstName && { helperText: "Campo Obligatorio." })}
                error={!!errors.firstName}
                fullWidth
                type="text"
                label="Nombre"
                autoComplete="off"
                sx={{ mt: 2, mb: 1.5 }}
                {...register("firstName", { required: true, minLength: 3 })}
              />
              <TextField
                {...(errors.lastName && { helperText: "Campo Obligatorio." })}
                {...register("lastName", { required: true })}
                error={!!errors.lastName}
                fullWidth
                type="text"
                label="Apellido"
                autoComplete="off"
                sx={{ mt: 1.5, mb: 1.5 }}
              />
              <TextField
                {...(errors.email && { helperText: "Campo Obligatorio." })}
                {...register("email", { required: true,  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i  })}
                error={!!errors.email}
                fullWidth
                label="Email"
                autoComplete="off"
                sx={{ mt: 1.5, mb: 1.5 }}
              />
              <TextField
                {...(errors.phone && { helperText: "Campo Obligatorio." })}
                {...register("phone", { required: true })}
                error={!!errors.phone}
                fullWidth
                type="text"
                label="Teléfono"
                autoComplete="off"
                sx={{ mt: 1.5, mb: 1.5 }}
              />
              <TextField
                {...(errors.address && { helperText: "Campo Obligatorio." })}
                error={!!errors.address}
                {...register("address", { required: true })}
                fullWidth
                type="text"
                label="Dirección"
                autoComplete="off"
                sx={{ mt: 1.5, mb: 1.5 }}
              />

              <TextField
                {...(errors.message && { helperText: "Campo Obligatorio." })}
                {...register("message", { required: true })}
                fullWidth
                error={!!errors.message}
                type="textarea"
                label="Deje su mensaje aqui"
                multiline
                autoComplete="off"
                rows={4}
                sx={{ mt: 1.5, mb: 1.5 }}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 2 }}
              >
                Enviar
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactForm;
