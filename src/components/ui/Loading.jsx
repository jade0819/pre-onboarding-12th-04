import loadingImage from '../../assets/loading-image-200px.gif';

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-start pt-[190px] ">
      <img src={loadingImage} />
    </div>
  );
};

export default Loading;
