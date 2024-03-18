import React from "react";

interface NoteInputProps {
  value: string;
  onChange: (note: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:border-yellow-500 w-full"
      placeholder="Add note..."
    />
  );
};

export default NoteInput;