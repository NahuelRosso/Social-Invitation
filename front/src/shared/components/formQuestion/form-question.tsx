import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { IQuestion } from "./model/question";

function QuestionForm() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IQuestion>();

  const onSubmit = (data: IQuestion) => {
    alert(JSON.stringify(data));
    console.log(data);
    reset()
  };
  

  return (
    <Box  sx={{ display: "flex", flexWrap: "wrap", mt: "5%", p: "3%", alignContent:"center" }}>
    <Card sx={{marginBottom: "5px", maxHeight:"500px", maxWidth:"500px", display: "flex", flexWrap: "wrap", mt: "5%", p: "3%",  }}>
      <Typography variant="h3">
        Ingrese su consulta
      </Typography>
       <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="question"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Enter your question"
            error={Boolean(errors.question)}
            helperText={errors.question ? "This field is required" : null}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />

      <Button  type="submit" variant="contained">
        Save
      </Button>
    </form>
    </Card>
    </Box>
   
  );
}
export default QuestionForm;