import Button from '../ui/Button';
import { uniqueArray } from '../../utils/uniqueArray';

const Filter = ({ regionArray, handleTypeFilter }) => {
  const uniqueRegionArray = uniqueArray(regionArray);
  return (
    <div className="w-full flex justify-center space-x-3 mb-14">
      <Button title="전체" onClick={() => handleTypeFilter(null)} />
      {uniqueRegionArray?.map((region, index) => (
        <Button key={`${region}_${index}`} title={region} onClick={() => handleTypeFilter(region)}>
          {region}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
