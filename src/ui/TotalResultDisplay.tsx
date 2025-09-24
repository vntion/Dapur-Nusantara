type TotalResultDisplayProps = {
  total: number;
};

function TotalResultDisplay({ total }: TotalResultDisplayProps) {
  return (
    <div className="mt-8 text-center text-gray-500">
      Menampilkan {total} resep
    </div>
  );
}

export default TotalResultDisplay;
