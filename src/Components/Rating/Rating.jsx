import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const Rating = ({ratings}) => {

    
    const data = ratings;
  return (
    <div style={{ width: "100%", height: 250 }}>
      {/* <h4 style={{ marginBottom: "10px" }}>Ratings</h4> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="orange" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

};

export default Rating;