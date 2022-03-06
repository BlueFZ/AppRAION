import { View, Text } from "react-native";

import React from "react";
import { Icon } from "react-native-elements";

const HeaderCustom = (props) => {
  return (
    <View>
      <Icon name="chevron-left" />
      <Text>{props.title}</Text>
    </View>
  );
};

export default HeaderCustom;
