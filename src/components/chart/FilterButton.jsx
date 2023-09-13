import Button from '../ui/Button';
import { uniqueArray } from '../../utils/uniqueArray';

const FilterButton = ({ regionArray, selectedRegion, setSelectedRegion }) => {
  const uniqueRegionArray = uniqueArray(regionArray);

  const handleTypeFilter = region => {
    setSelectedRegion(prev => {
      if (prev === null) return region;

      if (prev === region) return null;
      else return region;
    });
  };

  return (
    <div className="w-full flex justify-center space-x-3 mb-14">
      <Button title="전체" onClick={() => setSelectedRegion(null)} />

      {uniqueRegionArray?.map((region, index) => (
        <Button
          key={index}
          title={region}
          active={selectedRegion}
          onClick={() => handleTypeFilter(region)}
        >
          {region}
        </Button>
      ))}
    </div>
  );
};

export default FilterButton;
