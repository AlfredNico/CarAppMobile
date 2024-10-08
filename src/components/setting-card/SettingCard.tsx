import { SettingAccordion } from "components/setting-accordion/SettingAccordion";
import { FC, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./SettingCard.styles";

export const SettingCard: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <View style={styles.settingContainer}>
      <ScrollView>
        <SettingAccordion
          title="Account Settings"
          isCollapsed={activeIndex !== 0}
          toggleAccordion={() => toggleAccordion(0)}
          iconName="person-circle-outline"
        >
          <Text>Change Password, Manage Profile, etc.</Text>
        </SettingAccordion>
        <SettingAccordion
          title="Privacy Settings"
          isCollapsed={activeIndex !== 1}
          toggleAccordion={() => toggleAccordion(1)}
          iconName="notifications-outline"
        >
          <Text>Manage who can see your profile, etc.</Text>
        </SettingAccordion>
        <SettingAccordion
          title="Notification Settings"
          isCollapsed={activeIndex !== 2}
          toggleAccordion={() => toggleAccordion(2)}
          iconName="notifications-outline"
        >
          <Text>Manage your notifications, etc.</Text>
        </SettingAccordion>
        <SettingAccordion
          title="Help"
          isCollapsed={activeIndex !== 3}
          toggleAccordion={() => toggleAccordion(3)}
          iconName="help-circle-outline"
        >
          <Text>All question you want, or help.</Text>
        </SettingAccordion>
      </ScrollView>
    </View>
  );
};
