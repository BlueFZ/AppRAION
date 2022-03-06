import { View, Text, Picker } from "react-native";
import React, { useState } from "react";
import tw from "../../lib/tailwind";

const PickerCustom = (props) => {
  const [selectedValue, setSelectedValue] = useState(false);
  return (
    <>
      <Text>{props.title}</Text>
      <View style={[tw`w-full border-2 border-gray-500 my-2 rounded-md `]}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          mode="dropdown"
        >
          <Picker.Item
            label="SMP/SMA/Pendidikan Tinggi/Lainnya"
            value={false}
          />
          {props.data.map((item, index) => (
            <Picker.Item label={item.label} value={item.value} key={index} />
          ))}
        </Picker>
      </View>
    </>
  );
};

export default PickerCustom;
