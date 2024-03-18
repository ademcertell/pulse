import React from "react";

interface PrioritySelectorProps {
  value: string;
  onChange: (priority: string) => void;
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none border border-gray-400 text-black px-3 py-1 rounded focus:outline-none focus:border-yellow-500"
      >
        <option value="Low" className="text-black">
          Low
        </option>
        <option value="Medium" className="text-black">
          Medium
        </option>
        <option value="High" className="text-black">
          High
        </option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default PrioritySelector;
