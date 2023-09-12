import Button from '../ui/Button';
import { uniqueArray } from '../../utils/uniqueArray';

const Filter = ({ regionArray, handleTypeFilter }) => {
  const uniqueRegionArray = uniqueArray(regionArray);
  return (
    <div>
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
