const StatusBadge = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    "Low Stock": "bg-red-100 text-red-600",
    "In Stock": "bg-green-100 text-green-600",
    "Out of Stock": "bg-gray-200 text-gray-600",
  };

  return (
    <span
      className={`px-3 pt-2 rounded-full text-xs font-medium whitespace-nowrap ${
        colors[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
