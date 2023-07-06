import React from "react";
import { useNavigate } from "react-router-dom";
import ConfigItemBase from "../../../types/ConfigItemBase";

interface ConfigItemProps {
  item: ConfigItemBase;
}

const ConfigItem: React.FC<ConfigItemProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="config__content"
      onClick={() => {
        navigate(`${item.path}`);
      }}
    >
      <h2 className="config__title">{item.title}</h2>

      <div className="config__description">{item.description}</div>
    </div>
  );
};

export default ConfigItem;
