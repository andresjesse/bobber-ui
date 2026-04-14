import { Flex, Icon, makeStyles, Text } from "@andresjesse/bobber-ui";
import { Linking, TouchableOpacity } from "react-native";

type DocsFloatingMenuProps = {
  exampleUrl: string;
  docMd?: string;
};

export default function DocsFloatingMenu({
  exampleUrl,
  docMd,
}: DocsFloatingMenuProps) {
  const styles = useStyles();

  const handleOpenExample = () => {
    if (docMd) Linking.openURL(exampleUrl);
  };

  const handleOpenDocs = () => {
    if (docMd) Linking.openURL(docMd);
  };

  return (
    <Flex
      direction="row-reverse"
      align="center"
      gap="sm"
      style={{ bottom: 16, right: 16, position: "fixed" } as any}
    >
      <Flex gap={2}>
        <TouchableOpacity
          onPress={handleOpenExample}
          style={styles.roundButton}
        >
          <Icon type="material" name="code" size={24} />
        </TouchableOpacity>

        <Text fontSize={14} textAlign="center">
          src
        </Text>
      </Flex>

      {docMd && (
        <Flex gap={2}>
          <TouchableOpacity onPress={handleOpenDocs} style={styles.roundButton}>
            <Icon
              type="material-community"
              name="file-code-outline"
              size={20}
            />
          </TouchableOpacity>

          <Text fontSize={14} textAlign="center">
            doc
          </Text>
        </Flex>
      )}
    </Flex>
  );
}

const useStyles = makeStyles((theme) => ({
  roundButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.get("teal", "background"),
    alignItems: "center",
    justifyContent: "center",
  },
}));
