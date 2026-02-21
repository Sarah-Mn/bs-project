import React from "react";
import Input from "../input/Input";

const EditableField = ({
  label,
  name,
  value,
  editMode,
  onChange,
}: {
  label: string;
  name: string;
  value: string | number;
  editMode: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      {editMode ? (
        <Input name={name} value={value} onChange={onChange} />
      ) : (
        <p className="text-sm font-medium">{value}</p>
      )}
    </div>
  );
};

export default EditableField;
