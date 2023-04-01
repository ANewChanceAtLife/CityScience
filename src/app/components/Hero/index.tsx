import { createStyles, Title, Text, Container, rem, Card } from "@mantine/core";
import { Dots } from "./Dots";
import { AADFKeys } from "@/types/AADF";
import { SelectFilter } from "./SelectFilter";
import { SearchFilter } from "./SearchFilter";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(80),
    paddingBottom: rem(20),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  form: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  formItem: {
    flex: 1,
    maxWidth: 300,
    margin: theme.spacing.xs,
  },
}));

interface Props {
  totalRecords: number;
}

export function PageHero({ totalRecords }: Props) {
  const { classes } = useStyles();

  return (
    <Card>
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Emily McNabbs{" "}
            <Text component="span" className={classes.highlight} inherit>
              City Science
            </Text>{" "}
            Technical Demo
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Please explore the site to view the provided AADF data in serveral
              different ways. I have included a few different visualizations and
              a few different ways to interact with the data.
            </Text>
          </Container>

          <div className={classes.form}>
            <div className={classes.formItem}>
              <SearchFilter />
            </div>
            <div className={classes.formItem}>
              <SelectFilter attribute={AADFKeys.YEAR} />
            </div>
            <div className={classes.formItem}>
              <SelectFilter attribute={AADFKeys.REGION_NAME} />
            </div>
            <div className={classes.formItem}>
              <SelectFilter attribute={AADFKeys.LOCAL_AUTHORITY_NAME} />
            </div>
            <div className={classes.formItem}>
              <SelectFilter attribute={AADFKeys.ROAD_TYPE} />
            </div>
          </div>
        </div>
      </Container>
    </Card>
  );
}
