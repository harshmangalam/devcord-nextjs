import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Title,
  ActionIcon,
  Stack,
  Avatar,
  Paper,
} from "@mantine/core";
import { FaGithub, FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

export default function OpenSourceCard() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Paper p={"md"}>
          <Group>
            <Avatar color="cyan" radius="xl">
              MK
            </Avatar>
            <Stack spacing={0}>
              <Title order={5}>@harshmangalam</Title>
              <Text size="xs">3 dys ago</Text>
            </Stack>
          </Group>
        </Paper>
      </Card.Section>

      <Card.Section>
        <Image
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png"
          height={300}
          alt="React JS"
        />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: theme.spacing.xl, marginTop: theme.spacing.xl }}
      >
        <Title order={4}>React</Title>
        <Badge size="lg" color="blue" variant="dot">
          Javascript
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        React has been designed for gradual adoption from the start, and you can
        use as little or as much React as you need
      </Text>

      <Group position="apart" style={{ marginTop: theme.spacing.xl }}>
        <Button variant="subtle" leftIcon={<AiOutlineHeart size={20} />}>
          2000 likes
        </Button>
        <ActionIcon variant="filled" color={"dark"} size={"lg"}>
          <FaGithub size={20} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
