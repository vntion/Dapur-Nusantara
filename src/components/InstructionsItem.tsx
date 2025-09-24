type InstructionsItemProps = {
  step: { id: number; text: string };
};

function InstructionsItem({ step }: InstructionsItemProps) {
  return (
    <li className="flex space-x-4">
      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-pink-400">
          <span className="font-bold text-white">{step.id}</span>
        </div>
      </div>
      <div className="flex-grow rounded-xl bg-gradient-to-r from-red-50 to-pink-50 p-4">
        <p className="leading-relaxed text-gray-700">{step.text}</p>
      </div>
    </li>
  );
}

export default InstructionsItem;
