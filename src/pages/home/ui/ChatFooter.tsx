import {
  Box,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const ChatFooter = ({ question, setQuestion, onAskQuestion }) => {
  function handleChangeQuestion(e) {
    setQuestion(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      onAskQuestion();
    }
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 1, textAlign: "center" }}>
        <FormControl sx={{ width: "100%" }}>
          <Input
            placeholder="Сообщить ChatAI"
            multiline
            fullWidth
            value={question}
            autoFocus
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
            }}
            disableUnderline
            onChange={handleChangeQuestion}
            onKeyDown={handleKeyDown}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: (theme) => theme.palette.grey[700] }}
                  disabled={!question}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography variant="caption" color="text.secondary">
          ChatAI может допускать ошибки. Рекомендуем проверять важную
          информацию.
        </Typography>
      </Box>
    </Container>
  );
};
