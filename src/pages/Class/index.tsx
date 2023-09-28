import React from "react";
import ClassView from "./view";
import { Props } from "./Models";

const Class: React.FC<Props> = ({ navigation, route: { params } }) => {
  const { data } = params || {};

  return (
    <ClassView navigation={navigation} src={data.url} title={data.title} />
  );
};

export default Class;
