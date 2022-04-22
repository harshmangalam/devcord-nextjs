import { Group, ThemeIcon, Title } from "@mantine/core";
import { BsAppIndicator } from "react-icons/bs";

export default function Logo() {
  return (
    <>
      <Group>
        <ThemeIcon size={"xl"} radius="xl" color={"indigo"} variant="filled">
          <BsAppIndicator />
        </ThemeIcon>
        <Title order={3}>Devcord</Title>
      </Group>
    </>
  );
}
