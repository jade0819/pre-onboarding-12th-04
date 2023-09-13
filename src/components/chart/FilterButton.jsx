import Button from '../ui/Button';
import { uniqueArray } from '../../utils/uniqueArray';

const FilterButton = ({ regionArray, selectedRegion, setSelectedRegion }) => {
  const uniqueRegionArray = uniqueArray(regionArray);

  const handleTypeFilter = region => {
    if (selectedRegion.includes(region)) {
      setSelectedRegion(selectedRegion.filter(data => data !== region));
    } else {
      setSelectedRegion(prev => [...prev, region]);
    }
  };

  return (
    <div className="w-full flex justify-center space-x-3 mb-14">
      <Button title="전체" onClick={() => setSelectedRegion([])} />

      {uniqueRegionArray?.map((region, index) => (
        <Button
          key={index}
          title={region}
          selectedRegion={selectedRegion}
          onClick={() => handleTypeFilter(region)}
        >
          {region}
        </Button>
      ))}
    </div>
  );
};

export default FilterButton;
