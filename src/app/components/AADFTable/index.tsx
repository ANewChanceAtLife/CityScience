import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  rem,
  Card,
  Pagination,
  Text,
} from "@mantine/core";
import { snakeToTitle } from "@/app/utils/string-conversion";
import { AADFKeys } from "@/types/AADF";
import { useHits, usePagination } from "react-instantsearch-hooks-web";

const useStyles = createStyles((theme) => ({
  rightAlign: {
    textAlign: "right",
    padding: theme.spacing.sm,
  },

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

  pagination: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.xl,
  },
}));

const tableColumns = [
  AADFKeys.COUNT_POINT_ID,
  AADFKeys.YEAR,
  AADFKeys.REGION_NAME,
  AADFKeys.LOCAL_AUTHORITY_NAME,
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

function AADFRow({ hit }: any) {
  return (
    <tr>
      {tableColumns.map((column) => (
        <td key={column}>{hit[column]}</td>
      ))}
    </tr>
  );
}

export function AADFTable() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const { hits, results } = useHits();
  const { nbHits, hitsPerPage } = results ?? {};

  const { currentRefinement: currentPage, nbPages, refine } = usePagination();

  return (
    <Card>
      <Text fz="sm" className={classes.rightAlign}>
        Showing {hitsPerPage} of {nbHits} AADF Records
      </Text>
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
                <th key={column}>{snakeToTitle(column)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hits.map((hit) => (
              <AADFRow key={hit.objectID} hit={hit} />
            ))}
          </tbody>
        </Table>
      </ScrollArea>

      <div className={classes.pagination}>
        <Pagination
          total={nbPages}
          siblings={2}
          value={currentPage + 1}
          onChange={(pageNum) => refine(pageNum - 1)}
        />
      </div>
    </Card>
  );
}
