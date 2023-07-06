import PriorityMessage from "./components/Priority/PriorityMessage";
import usePriorityMessage from "./hooks/usePriorityMessage";
import Card from "../../components/Card";

const Priority = () => {
  const priorityMessage = usePriorityMessage();

  const isPriorityMessageEmpty =
    priorityMessage.title === "" && priorityMessage.message === "";

  return isPriorityMessageEmpty ? null : (
    <>
      <h2 className="subtitle appear">Importante</h2>
      <Card className="priority">
        <PriorityMessage priorityMessage={priorityMessage} />
      </Card>
    </>
  );
};

export default Priority;
