import { snakeToTitle } from "@/app/utils/string-conversion";
import { AADFKeys, FacetStats } from "@/types/AADF";
import {
  createStyles,
  Progress,
  Box,
  Text,
  Group,
  Paper,
  SimpleGrid,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconDeviceAnalytics } from "@tabler/icons-react";
import { useHits, useRefinementList } from "react-instantsearch-hooks-web";

const useStyles = createStyles((theme) => ({
  progressLabel: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontSize: theme.fontSizes.sm,
  },

  stat: {
    borderBottom: `${rem(3)} solid`,
    paddingBottom: rem(5),
  },

  statCount: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.3,
  },

  diff: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },
}));

const includeFacets = [
  AADFKeys.ALL_HGVS,
  AADFKeys.LGVS,
  AADFKeys.BUSES_AND_COACHES,
  AADFKeys.CARS_AND_TAXIS,
  AADFKeys.TWO_WHEELED_MOTOR_VEHICLES,
];

export function Stats() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  useRefinementList({ attribute: AADFKeys.TWO_WHEELED_MOTOR_VEHICLES });
  useRefinementList({ attribute: AADFKeys.CARS_AND_TAXIS });
  useRefinementList({ attribute: AADFKeys.BUSES_AND_COACHES });
  useRefinementList({ attribute: AADFKeys.LGVS });
  useRefinementList({ attribute: AADFKeys.ALL_HGVS });

  const { results } = useHits();
  const stats: FacetStats = ((results as any) ?? {}).facets_stats ?? {};
  console.log("stats", stats);

  const facetToColor = {
    [AADFKeys.ALL_HGVS]: theme.colors.blue[5],
    [AADFKeys.LGVS]: theme.colors.red[5],
    [AADFKeys.BUSES_AND_COACHES]: theme.colors.yellow[5],
    [AADFKeys.CARS_AND_TAXIS]: theme.colors.green[5],
    [AADFKeys.TWO_WHEELED_MOTOR_VEHICLES]: theme.colors.grape[5],
  };

  const initialData = Object.entries(stats)
    .map(([key, value]) => ({
      label: key,
      count: value.sum,
      color: facetToColor[key as keyof typeof facetToColor],
    }))
    .sort((a, b) => b.count - a.count)
    .filter(({ label }) => includeFacets.includes(label as AADFKeys));
  const total = initialData.reduce((acc, item) => acc + item.count, 0);
  const data = initialData.map((item) => ({
    ...item,
    part: (item.count / total) * 100,
  }));

  const segments = data.map((segment) => {
    return {
      value: segment.part,
      color: segment.color,
      label: segment.part > 10 ? `${segment.part.toFixed(2)}%` : undefined,
    };
  });

  const descriptions = data.map((stat) => (
    <Box
      key={stat.label}
      sx={{ borderBottomColor: stat.color }}
      className={classes.stat}
    >
      <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
        {snakeToTitle(stat.label)}
      </Text>

      <Group position="apart" align="flex-end" spacing={0}>
        <Text fw={700}>{stat.count.toLocaleString()}</Text>
        <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
          {stat.part.toFixed(2)}%
        </Text>
      </Group>
    </Box>
  ));

  return (
    <Paper withBorder p="md" radius="md">
      <Group position="apart">
        <Group align="flex-end" spacing="xs">
          <Text fz="xl" fw={700}>
            {total.toLocaleString()} Total Vehicles Recorded
          </Text>
        </Group>
      </Group>

      <Progress
        sections={segments}
        size={34}
        classNames={{ label: classes.progressLabel }}
        mt={40}
      />
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "xs", cols: 1 }]} mt="xl">
        {descriptions}
      </SimpleGrid>
    </Paper>
  );
}
