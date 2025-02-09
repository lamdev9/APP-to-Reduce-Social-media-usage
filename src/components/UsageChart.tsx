
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", usage: 120 },
  { name: "Tue", usage: 90 },
  { name: "Wed", usage: 150 },
  { name: "Thu", usage: 85 },
  { name: "Fri", usage: 130 },
  { name: "Sat", usage: 75 },
  { name: "Sun", usage: 95 },
];

export function UsageChart() {
  return (
    <Card className="p-6 bg-white/50 backdrop-blur-sm border border-sage-200 animate-fade-in">
      <h3 className="font-semibold text-sage-900 mb-4">Weekly Usage Overview</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E6EBE6" />
            <XAxis dataKey="name" stroke="#4D6E53" />
            <YAxis stroke="#4D6E53" />
            <Tooltip
              contentStyle={{
                background: "white",
                border: "1px solid #E6EBE6",
                borderRadius: "8px",
              }}
            />
            <Bar
              dataKey="usage"
              fill="#8CA891"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
