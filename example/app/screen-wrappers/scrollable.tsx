import {
  Button,
  Card,
  Dialog,
  Flex,
  Header,
  ScreenWrapper,
  Text,
} from "@andresjesse/bobber-ui";
import { router } from "expo-router";
import { useState } from "react";
import DocsFloatingMenu from "../../components/docs-floating-menu";

const paddings = ["xs", "sm", "md", "lg", "xl", "none"] as const;
const gaps = ["xs", "sm", "md", "lg", "xl", 100] as const;

export default function Screen() {
  const [padding, setPadding] = useState<(typeof paddings)[number]>("md");
  const [gap, setGap] = useState<(typeof gaps)[number]>("md");

  const onRefresh = async () => {
    Dialog.alert("Refresh", "onRefresh triggered!");
  };

  return (
    <ScreenWrapper.Scrollable padding={padding} gap={gap} onRefresh={onRefresh}>
      <Header.Hidden />

      <Card>
        <Text>Drag Screen Down to trigger onRefresh (mobile only)</Text>

        <Text>Padding:</Text>
        <Flex direction="row" gap={0}>
          {paddings.map((p) => (
            <Button key={p} title={p} onPress={() => setPadding(p)} />
          ))}
        </Flex>

        <Text>Gap:</Text>
        <Flex direction="row" gap={0}>
          {gaps.map((g) => (
            <Button key={g} title={String(g)} onPress={() => setGap(g)} />
          ))}
        </Flex>

        <Button
          variant="subtle"
          title="Cancel (Navigate Back)"
          onPress={() => router.back()}
        />
      </Card>

      <Card>
        {Array.from({ length: 100 }).map((_, index) => (
          <Text key={index}>Scrollable Content {index}</Text>
        ))}
      </Card>

      <DocsFloatingMenu
        exampleUrl="https://github.com/andresjesse/bobber-ui/blob/main/example/app/screen-wrappers/scrollable.tsx"
        docMd="https://github.com/andresjesse/bobber-ui/blob/main/docs/components/screen-wrappers/scrollable.md"
      />
    </ScreenWrapper.Scrollable>
  );
}
