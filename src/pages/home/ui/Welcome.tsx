import {
  Card,
  CardContent,
  colors,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Icon from "@mui/material/Icon";

const welcomeList: IWelcomeItem[] = [
  {
    title: "Спланируй расслабляющий день",
    requestMessage:
      "Можешь помочь мне спланировать расслабляющий день, посвященный мероприятиям по восстановлению сил? Для начала спроси меня, какие у меня любимые формы релаксации?",
    icon: "spa",
    iconColor: "yellow",
  },
  {
    title: "Создай мне личную веб-страницу",
    requestMessage:
      "Создай для меня личную веб-страницу, и все это в одном файле. Сначала задай мне 3 вопроса о том, что тебе нужно знать.",
    icon: "web",
    iconColor: "orange",
  },
  {
    title: "Рецепт из того, что есть у меня на кухне",
    requestMessage:
      "Можешь попросить меня перечислить пять ингредиентов, которые есть у меня в кладовой, а затем помочь мне придумать новый рецепт с ними?",
    icon: "breakfast_dining",
    iconColor: "green",
  },
  {
    title: "Спроси меня о древних цивилизациях",
    requestMessage:
      "Можешь проверить мои знания о древних цивилизациях, задавая мне конкретные вопросы? Для начала спроси о том, какая цивилизация меня больше всего интересует и почему.",
    icon: "school",
    iconColor: "blue",
  },
];

interface IWelcomeItem {
  title: string;
  requestMessage: string;
  icon: string;
  iconColor: string;
}
export const Welcome = ({ onAskQuestion }) => {
  return (
    <Container maxWidth="md" sx={{ height: "100%" }}>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          pb: 8,
          px: 8,
        }}
      >
        {welcomeList.map((item, index) => (
          <WelcomeCard data={item} key={index} onAskQuestion={onAskQuestion} />
        ))}
      </Grid>
    </Container>
  );
};

function WelcomeCard({ data, onAskQuestion }) {
  const { title, requestMessage, icon, iconColor } = data;

  return (
    <Grid item md="3">
      <Card
        variant="outlined"
        sx={{ height: 130, borderRadius: 3 }}
        onClick={() => onAskQuestion(requestMessage)}
      >
        <CardContent>
          <Icon
            baseClassName="material-icons-outlined"
            sx={{
              fontSize: 20,
              color: colors[iconColor][300],
            }}
          >
            {icon}
          </Icon>
          <Typography sx={{ mb: 1.5, fontSize: 15 }} color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
