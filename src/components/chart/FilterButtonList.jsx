import FilterButton from './FilterButton';
import Button from '../ui/Button';
import { uniqueArray } from '../../utils/uniqueArray';

const FilterButtonList = ({ regionArray, selectedRegion, setSelectedRegion }) => {
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
      <Button
        className="bg-white text-green-pastel-accent font-bold border border-green-pastel-accent"
        onClick={() => setSelectedRegion([])}
      >
        필터 초기화
      </Button>

      {uniqueRegionArray?.map((region, index) => (
        <FilterButton
          key={index}
          title={region}
          selectedRegion={selectedRegion}
          onClick={() => handleTypeFilter(region)}
        >
          {region}
        </FilterButton>
      ))}
    </div>
  );
};

export default FilterButtonList;
