import {
  ScrollArea,
  Navbar,
  Box,
  AppShell,
  Header,
  Group,
  useMantineColorScheme,
  ActionIcon,
  MediaQuery,
  Footer,
  Aside,
  Burger,
  useMantineTheme,
} from "@mantine/core";

import { FiSun, FiMoon } from "react-icons/fi";
// import MenuLink from "@/layouts/AppLayout/MenuLink";
// import Profile from "@/layouts/AppLayout/Profile";
import { links } from "@/layouts/AppLayout/_links";
import Logo from "./Logo";
import MenuLink from "./MenuLink";
import Profile from "./Profile";
import { useState } from "react";

export default function AppLayout({ children }) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      padding="md"
      navbar={
        <Navbar
          width={{ base: 300 }}
          p="xs"
          hiddenBreakpoint="sm"
          hidden={!opened}
        >
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            {links.map((link) => (
              <MenuLink {...link} />
            ))}
          </Navbar.Section>
          <Navbar.Section>
            <Profile />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Group position="apart">
            <Group>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Logo colorScheme={colorScheme} />
            </Group>
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {colorScheme === "dark" ? (
                <FiSun size={16} />
              ) : (
                <FiMoon size={16} />
              )}
            </ActionIcon>
          </Group>
        </Header>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    ></AppShell>
  );
}
