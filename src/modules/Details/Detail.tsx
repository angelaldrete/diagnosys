import React from "react";
import { transformDate } from "../../utils/dateFormat";

interface DetailProps {
  detailInfo: any;
  title: string;
  DetailInfoKeys: any;
}

const Detail: React.FC<DetailProps> = ({
  detailInfo,
  title,
  DetailInfoKeys,
}) => {
  return (
    <>
      <strong className="detail__info__element__title">
        {DetailInfoKeys[title as keyof typeof DetailInfoKeys]}:{" "}
      </strong>
      <div className="detail__info__element__value">
        {title === "fechaNacimiento" ||
        title === "ultimaVisita" ||
        title === "fecha"
          ? transformDate(
              detailInfo[title as keyof typeof DetailInfoKeys] as string
            )
          : detailInfo[title as keyof typeof DetailInfoKeys]}
      </div>
    </>
  );
};

export default Detail;
