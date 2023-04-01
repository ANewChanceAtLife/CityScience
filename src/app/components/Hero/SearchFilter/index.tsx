import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useSearchBox } from "react-instantsearch-hooks-web";

export function SearchFilter() {
  const { query, refine } = useSearchBox();

  return (
    <TextInput
      placeholder="Search"
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      value={query}
      onChange={(e) => refine(e.currentTarget.value)}
    />
  );
}
