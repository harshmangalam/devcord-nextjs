import OpenSourceCard from "@/components/OpenSourceCard";
import AppLayout from "@/layouts/AppLayout";
import { Button, SimpleGrid } from "@mantine/core";

export default function OpenSource() {
  return (
    <AppLayout>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "xl", cols: 3, spacing: "md" },
          { maxWidth: "lg", cols: 2, spacing: "md" },
          { maxWidth: "md", cols: 2, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {[...Array(10)].map((openSource) => (
          <OpenSourceCard />
        ))}
      </SimpleGrid>
    </AppLayout>
  );
}
