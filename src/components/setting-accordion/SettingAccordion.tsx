import { FC, ReactNode, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./SettingAccordion.styles";
import Collapsible from 'react-native-collapsible';
import { Ionicons } from 'react-native-vector-icons';


interface ISettingAccordionProps {
  title: string;
  iconName: string;
  isCollapsed: boolean,
  toggleAccordion: () => void;
  children: ReactNode;
}

export const SettingAccordion: FC<ISettingAccordionProps> = ({
  title,
  isCollapsed,
  iconName,
  toggleAccordion,
  children,
}) => {
  
  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        onPress={toggleAccordion}
        style={styles.accordionHeader}
      >
        <Ionicons name={iconName} size={20} color="#000" style={styles.accordionIcon} />
        <Text style={styles.accordionTitle}>{title}</Text>
        <Ionicons
          name={isCollapsed ? "chevron-down" : "chevron-up"}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} style={styles.accordionContent}>
        <View>
          {children}
        </View>
      </Collapsible>
    </View>
  );
};
