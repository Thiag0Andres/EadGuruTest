import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Props } from "./Models";
import ScreenView from "./view";

const Screen: React.FC<Props> = ({
  scrollHeader,
  children,
  fixedBottom,
  title,
  bgColor,
  originRefresh,
  filterName,
  iconFilterName,
  filter,
  isClose,
  onClose,
  navigationFilter,
  functionFilter,
  backbutton,
  backPress,
  hasScroll = true,
  loadingComponent,
  modalsComponent,
  refScrollView,
}) => {
  return (
    <ScreenView
      hasScroll={hasScroll}
      scrollHeader={scrollHeader}
      children={children}
      bgColor={bgColor}
      fixedBottom={fixedBottom}
      title={title}
      originRefresh={originRefresh}
      filterName={filterName}
      iconFilterName={iconFilterName}
      filter={filter}
      isClose={isClose}
      onClose={onClose}
      navigationFilter={navigationFilter}
      functionFilter={functionFilter}
      backbutton={backbutton}
      backPress={backPress}
      loadingComponent={loadingComponent}
      modalsComponent={modalsComponent}
      refScrollView={refScrollView}
    />
  );
};

export default Screen;
