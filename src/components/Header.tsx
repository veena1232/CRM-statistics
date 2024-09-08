import { FaChartLine } from 'react-icons/fa'; // Importing an icon from react-icons

type TimeRange = '1d' | '1w' | '1m' | '1y';

interface HeaderProps {
    onSelectTimeRange: (range: TimeRange) => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectTimeRange }) => {
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as TimeRange; // Cast the value to TimeRange
        onSelectTimeRange(value);
    };

    return (
        <div className="bg-white p-4 shadow-md flex justify-between items-center">
            <div className="flex items-center">
                <FaChartLine className="text-3xl text-[#7F56D8] mr-2" /> {/* Icon added before the text */}
                <h1 className="text-2xl font-bold text-[#7F56D8]">CRM Statistics</h1> {/* Text color set to #7F56D8 */}
            </div>
            <select className="border p-2 rounded text-[#7F56D8]" onChange={handleSelect}>
                <option value="1d">1 Day</option>
                <option value="1w">1 Week</option>
                <option value="1m">1 Month</option>
                <option value="1y">1 Year</option>
            </select>
        </div>
    );
};

export default Header;
