import { ScrollView, Text, View } from "native-base";
import React from "react";
import { Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { theme } from "../../shared/theme";

const handleHead = (num) => <Text color={"coolGray.500"}>H{num}</Text>;

type Props = {
  noteContent: any;
  setNoteContent: (content: any) => void;
};

const RichTextEditor = (props: Props) => {
  const richText = React.useRef();
  return (
    <View w="full" h="full" flex={1} pt="4">
      <View flexGrow={1}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <RichEditor
              ref={richText}
              style={{
                backgroundColor: theme.BACKGROUND,
                minHeight: 500,
              }}
              containerStyle={{
                backgroundColor: theme.BACKGROUND,
                minHeight: 500,
              }}
              editorStyle={{
                backgroundColor: theme.BACKGROUND,
                color: theme.FOREGROUND,
              }}
              //   enterKeyHint="next"
              focusable
              initialFocus
              placeholder="Enter Notes here..."
              onChange={(descriptionText) => {
                console.log("descriptionText:", descriptionText);
                props.setNoteContent(descriptionText);
              }}
              initialHeight={400}
              initialContentHTML={props.noteContent}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>

      <RichToolbar
        style={{
          backgroundColor: theme.ACCENT,
        }}
        editor={richText}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.heading1,
          actions.alignCenter,
          actions.table,
          actions.blockquote,
          actions.checkboxList,
          actions.code,
          actions.heading2,
          actions.heading3,
          actions.heading4,
          actions.heading5,
          actions.heading6,
          actions.insertBulletsList,
          actions.insertImage,
          actions.insertLink,
          actions.insertLine,
          actions.insertText,
          actions.redo,
          actions.alignFull,
          actions.alignLeft,
          actions.alignRight,
          actions.content,
          actions.fontName,
          actions.fontSize,
          actions.foreColor,
          actions.hiliteColor,
          actions.indent,
          actions.init,
          actions.insertHTML,
          actions.prepareInsert,
          actions.keyboard,
          actions.insertVideo,
          actions.line,
          actions.outdent,
          actions.removeFormat,
          actions.restoreSelection,
          actions.setBackgroundColor,
          actions.setBold,
          actions.setParagraph,
          actions.setStrikethrough,
          actions.setSuperscript,
          actions.setSubscript,
          actions.setTextColor,
          actions.restoreSelection,
          actions.content,
          actions.updateHeight,
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.heading1,
          actions.heading2,
          actions.heading3,
          actions.heading4,
          actions.heading5,
          actions.heading6,
          actions.insertLine,
          actions.setParagraph,
          actions.removeFormat,
          actions.alignLeft,
          actions.alignCenter,
          actions.alignRight,
          actions.alignFull,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.checkboxList,
          actions.insertLink,
          actions.insertText,
          actions.insertHTML,
          actions.insertImage,
          actions.insertVideo,
          actions.fontSize,
          actions.fontName,
          actions.setSubscript,
          actions.setSuperscript,
          actions.setStrikethrough,
          actions.setHR,
          actions.indent,
          actions.outdent,
          actions.undo,
          actions.redo,
          actions.code,
          actions.table,
          actions.line,
          actions.foreColor,
          actions.hiliteColor,
          actions.blockquote,
          actions.keyboard,
          actions.setTitlePlaceholder,
          actions.setContentPlaceholder,
          actions.setTitleFocusHandler,
          actions.setContentFocusHandler,
          actions.prepareInsert,
          actions.restoreSelection,
          actions.setCustomCSS,
          actions.setTextColor,
          actions.setBackgroundColor,
          actions.init,
          actions.setEditorHeight,
          actions.setFooterHeight,
          actions.setPlatform,
        ]}
        iconMap={{
          [actions.heading1]: () => handleHead(1),
          [actions.heading2]: () => handleHead(2),
          [actions.heading3]: () => handleHead(3),
          [actions.heading4]: () => handleHead(4),
          [actions.heading5]: () => handleHead(5),
          [actions.heading6]: () => handleHead(6),
        }}
      />
    </View>
  );
};

export default RichTextEditor;
