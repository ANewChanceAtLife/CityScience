import { snakeToTitle } from "@/app/utils/string-conversion";
import { MultiSelect } from "@mantine/core";
import { useRefinementList } from "react-instantsearch-hooks-web";

interface Props {
  attribute: string;
}

export function SelectFilter({ attribute }: Props) {
  const { items, refine } = useRefinementList({
    attribute,
    sortBy: ["name:asc"],
    limit: 25,
  });
  const values = items
    .filter((item) => item.isRefined)
    .map((item) => item.value);

  return (
    <MultiSelect
      withinPortal
      data={items.map((item) => ({
        label: snakeToTitle(item.label),
        value: item.value,
      }))}
      placeholder={snakeToTitle(attribute)}
      clearable
      value={values}
      onChange={(newVal) => {
        const newValues = newVal.filter((value) => !values.includes(value));
        const missing = values.filter((value) => !newVal.includes(value));
        const toBeRefined = [...newValues, ...missing];

        for (const value of toBeRefined) {
          refine(value);
        }
      }}
    />
  );
}
