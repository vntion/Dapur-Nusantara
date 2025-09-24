import InstructionsItem from "./InstructionsItem";

type InstructionsListType = {
  steps: { id: number; text: string }[];
};

function InstructionsList({ steps }: InstructionsListType) {
  return (
    <ul className="space-y-6">
      {steps.map((step, index) => (
        <InstructionsItem key={index} step={step} />
      ))}
    </ul>
  );
}

export default InstructionsList;
