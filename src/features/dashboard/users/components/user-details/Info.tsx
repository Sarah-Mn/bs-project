const Info = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
};

export default Info;
