import { Screen } from "@components";

import { OMSItem, OMSTipsHeader } from "./components";
import { omsTips } from "./OMSTipsPresets";

export const OMSTipsScreen = () => {
  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s24" }}
    >
      <OMSTipsHeader />
      {omsTips.map((item, index) => (
        <OMSItem
          lastItem={index === omsTips.length - 1}
          {...item}
          key={index}
          mt={index === 0 ? "s24" : "s30"}
        />
      ))}
    </Screen>
  );
};
