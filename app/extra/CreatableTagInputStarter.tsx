import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreatableTagInputStarter() {
  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const addTag = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    if (tags.includes(trimmed)) {
      setValue("");
      return;
    }
    setTags((prev) => [...prev, trimmed]);
    setValue("");
  };

  const removeTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <View style={styles.container}>
      {/* Tag list */}
      <View style={styles.tagsContainer}>
        {tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
            <TouchableOpacity onPress={() => removeTag(tag)}>
              <Text style={styles.removeText}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Input + Add button */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder="Type and press Add or Enter"
          onSubmitEditing={addTag} // keyboard "done" adds tag
          returnKeyType="done"
        />
        <TouchableOpacity onPress={addTag} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#eee",
    marginRight: 4,
    marginBottom: 4,
  },
  tagText: {
    marginRight: 6,
  },
  removeText: {
    fontSize: 12,
    opacity: 0.7,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  addButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#111",
  },
  addButtonText: {
    color: "white",
    fontWeight: "600",
  },
});
