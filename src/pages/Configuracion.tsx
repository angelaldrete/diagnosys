import Title from "../components/Title";
import useConfig from "../modules/Configuracion/hooks/useConfig";
import Card from "../components/Card";
import ConfigItem from "../modules/Configuracion/components/ConfigItem";

const Configuracion = () => {
  const config = useConfig();

  return (
    <>
      <Title>Configuración</Title>
      {Object.keys(config).map((key) => (
        <Card
          key={key}
          className="config__card"
          style={{
            animationDelay: `${Object.keys(config).indexOf(key) * 0.1}s`,
          }}
        >
          <ConfigItem item={config[key as any]} />
        </Card>
      ))}
    </>
  );
};

export default Configuracion;
