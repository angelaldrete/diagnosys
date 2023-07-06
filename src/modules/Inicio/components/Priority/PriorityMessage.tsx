import React from "react";
import PriorityMessageBase from "../../types/PriorityMessage";

interface PriorityMessageProps {
  priorityMessage: PriorityMessageBase;
}

const PriorityMessage: React.FC<PriorityMessageProps> = ({
  priorityMessage: { title, message },
}) => {
  return (
    <div className="priority-message">
      <h3 className="priority-message__title">{title}</h3>
      <p className="priority-message__message">{message}</p>
    </div>
  );
};

export default PriorityMessage;
