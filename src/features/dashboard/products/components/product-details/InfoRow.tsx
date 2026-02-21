const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div>
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
};

export default InfoRow;
