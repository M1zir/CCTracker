import { useState } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

const PriceHistory = () => {
  const [chartData] = useState([]);

  return (
    <ChartComponent
      id="line-chart"
      height="100%"
      primaryXAxis={{ valueType: 'DateTime', labelFormat: 'dd MMM ' }}
      primaryYAxis={{ labelFormat: '${value}' }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName="x" yName="y" type="Line" width={2} marker={{ visible: true, width: 10, height: 10 }} />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default PriceHistory;
