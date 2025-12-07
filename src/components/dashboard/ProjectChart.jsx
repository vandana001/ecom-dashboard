import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { projectionsData } from '../../data/mock-data';

function ProjectChart() {
  return (
    <div className="bg-white rounded-2xl p-6" style={{border:'1px solid #ebebeb', padding:'20px'}} >
      <h3 className="text-sm font-bold text-gray-900" style={{marginBottom:'15px'}}>Projections vs Actuals</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={projectionsData} barGap={0}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="month" 
            stroke="#999" 
            axisLine={false}
            tickLine={false}
            fontSize={12}
          />
          <YAxis 
            stroke="#999" 
            axisLine={false}
            tickLine={false}
            fontSize={12}
            tickFormatter={(value) => `${value / 1000000}M`}
          />
          <Bar dataKey="actual" fill="#7BA8C7" radius={[4, 4, 0, 0]} stackId="a" />
          <Bar dataKey="projected" fill="#B8D4E6" radius={[4, 4, 0, 0]} stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProjectChart;