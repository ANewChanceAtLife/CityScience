import {
  Navbar,
  Group,
  Code,
  ScrollArea,
  createStyles,
  rem,
} from "@mantine/core";
import { IconGauge, IconMap } from "@tabler/icons-react";
import { LinksGroup } from "./LinksGroup";
import { ThemeToggle } from "./ThemeToggle";

const navigationLinks = [
  { label: "Dashboard", icon: IconGauge, url: "/" },
  {
    label: "Maps",
    icon: IconMap,
    links: [
      { label: "Heat map", link: "/heatmap" },
      { label: "Line map", link: "/linemap" },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    height: "100vh",
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NestedNav() {
  const { classes } = useStyles();
  const links = navigationLinks.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          City Science Demo
          <Code sx={{ fontWeight: 700 }}>by Emily McNabb</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <ThemeToggle />
      </Navbar.Section>
    </Navbar>
  );
}
