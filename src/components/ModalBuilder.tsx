import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Modal, useDisclose } from "native-base";

type Props = {};

const ModalBuilder = () => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclose();
  return (
    <>
      <Text>ModalBuilder</Text>
      <Modal></Modal>
    </>
  );
};

export default ModalBuilder;

const styles = StyleSheet.create({});
