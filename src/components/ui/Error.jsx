import Button from './Button';

const Error = ({ error, retry }) => {
  const errorStatus = error?.response?.status;
  const errorMsg = error?.response?.statusText;

  return (
    <div className="h-screen flex flex-col items-center pt-36 text-gray-700">
      <span className="flex mb-10 text-5xl font-semibold">{`${errorStatus} ${errorMsg}`}</span>
      <Button onClick={retry}>다시 시도</Button>
    </div>
  );
};

export default Error;
