interface CategoryStatsProps {
  stats: {
    totalProducts: number;
    averagePrice: string;
    averageRating: string;
  };
}

export const CategoryStats = ({ stats }: CategoryStatsProps) => (
  <div className="bg-gray-100 rounded-lg p-6 mb-8">
    <h2 className="text-xl font-semibold mb-4">Category Statistics</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <p className="text-gray-600">Total Products</p>
        <p className="text-2xl font-bold">{stats.totalProducts}</p>
      </div>
      <div>
        <p className="text-gray-600">Average Price</p>
        <p className="text-2xl font-bold">${stats.averagePrice}</p>
      </div>
      <div>
        <p className="text-gray-600">Average Rating</p>
        <p className="text-2xl font-bold">{stats.averageRating} / 5</p>
      </div>
    </div>
  </div>
);
