import React from "react";
import Card from "../../components/Card";
import Detail from "./Detail";
import ConsultationInfoKeys from "../../types/ConsultationInfoKeys";
import ConsultationInfo from "../../types/ConsultationInfo";
import PatientPersonalInfo from "../../types/PatientPersonalInfo";
import PatientPersonalInfoKeys from "../../types/PatientPersonalInfoKeys";

interface DetailProps {
  detailInfo: ConsultationInfo | PatientPersonalInfo | any;
  DetailInfoKeys: ConsultationInfoKeys | PatientPersonalInfoKeys | any;
}

const Details: React.FC<DetailProps> = ({ detailInfo, DetailInfoKeys }) => {
  return (
    <>
      {Object.keys(detailInfo).map(
        (key, idx) =>
          detailInfo[key as keyof typeof DetailInfoKeys] && (
            <Card key={idx} className="detail__info__card">
              <Detail
                title={key}
                detailInfo={detailInfo}
                DetailInfoKeys={DetailInfoKeys}
              />
            </Card>
          )
      )}
    </>
  );
};

export default Details;
