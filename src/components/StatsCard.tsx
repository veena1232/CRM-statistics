import React from 'react';
import { FaChartLine, FaUser, FaUsers } from 'react-icons/fa'; // Import icons from react-icons

interface Stat {
  label: string;
  value: number;
}

interface StatsCardProps {
  stats: Stat[];
}

const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  const iconMapping: { [key: string]: JSX.Element } = {
    'Total Sales': <FaChartLine className="text-white mr-2" />,
    'New Customers': <FaUser className="text-white mr-2" />,
    'Active Users': <FaUsers className="text-white mr-2" />,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-[#7F56D8] shadow-lg rounded-lg">
          <div className="flex items-center">
            {/* Render the corresponding icon */}
            {iconMapping[stat.label] || <FaChartLine className="text-white mr-2" />}
            <h2 className="text-lg font-semibold text-white">{stat.label}</h2>
          </div>
          <p className="text-2xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>  
  );
};

export default StatsCard;
