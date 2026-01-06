import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

const config = {
  namespace: "Editor",
  theme: {},
  onError(error) {
    console.error(error);
  },
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={config}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            style={{
              minHeight: 200,
              border: "1px solid #ccc",
              padding: 10,
            }}
          />
        }
        placeholder={<div>Start typing...</div>}
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
