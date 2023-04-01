import { useState } from "react";
import { createStyles, Table, ScrollArea, rem, Card } from "@mantine/core";
import { camelToTitle } from "@/app/utils/camel-to-title";
import { AADF, AADFKeys } from "@/types/AADF";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

const tableColumns = [
  AADFKeys.COUNT_POINT_ID,
  AADFKeys.YEAR,
  AADFKeys.REGION_NAME,
  AADFKeys.ROAD_NAME,
  AADFKeys.ROAD_TYPE,
  AADFKeys.LATITUDE,
  AADFKeys.LONGITUDE,
  AADFKeys.ALL_MOTOR_VEHICLES,
  AADFKeys.CARS_AND_TAXIS,
  AADFKeys.BUSES_AND_COACHES,
  AADFKeys.LGVS,
  AADFKeys.ALL_HGVS,
];

interface TableScrollAreaProps {
  data: AADF[];
}

export function AADFTable({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.countPointId}>
      {tableColumns.map((column) => (
        <td key={column}>{row[column]}</td>
      ))}
    </tr>
  ));

  return (
    <Card>
      <ScrollArea
        h={600}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table miw={700}>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              {tableColumns.map((column) => (
                <th key={column}>{camelToTitle(column)}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Card>
  );
}
