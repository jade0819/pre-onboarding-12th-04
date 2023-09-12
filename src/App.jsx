import Header from './components/header/Header';
import ContentLayout from './layout/ContentLayout';
import Chart from './components/chart/Chart';

const App = () => {
  return (
    <div>
      <Header />
      <ContentLayout>
        <Chart />
      </ContentLayout>
    </div>
  );
};

export default App;
