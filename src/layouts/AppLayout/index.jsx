import {
  ScrollArea,
  Navbar,
  AppShell,
  Header,
  Group,
  useMantineColorScheme,
  ActionIcon,
  MediaQuery,
  Footer,
  Burger,
  useMantineTheme,
  Drawer,
  Stack,
  Box,
} from "@mantine/core";

import { CgMenuLeftAlt } from "react-icons/cg";

import { FiSun, FiMoon } from "react-icons/fi";
import MenuLink from "@/layouts/AppLayout/MenuLink";
import Profile from "@/layouts/AppLayout/Profile";
import { links } from "@/layouts/AppLayout/_links";
import Logo from "@/layouts/AppLayout/Logo";
import { useState } from "react";

export default function AppLayout({ children }) {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [drawer, setDrawer] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      padding="md"
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Navbar
            width={{ base: 280 }}
            p="xs"
            hiddenBreakpoint={"sm"}
            hidden={!drawer}
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
        </MediaQuery>
      }
      header={
        <Header height={60} p="xs">
          <Group position="apart">
            <Group>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <ActionIcon onClick={() => setDrawer(true)}>
                  <CgMenuLeftAlt />
                </ActionIcon>
              </MediaQuery>
              <Logo />
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
    >
      {children}

      <Drawer
        opened={drawer}
        onClose={() => setDrawer(false)}
        title="Devcord"
        padding="xl"
        size="md"
      >
        <Stack style={{ height: "95%" }} justify={"space-between"}>
          <Box style={{ flexGrow: 1 }}>
            {links.map((link) => (
              <MenuLink {...link} />
            ))}
          </Box>
          <Profile />
        </Stack>
      </Drawer>
    </AppShell>
  );
}
