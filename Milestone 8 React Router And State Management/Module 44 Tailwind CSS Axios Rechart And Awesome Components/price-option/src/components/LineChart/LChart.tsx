import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const mathMarksData = [
        { id: 1, name: 'Alice', math: 88, physics: 92, chemistry: 85 },
        { id: 2, name: 'Ben', math: 74, physics: 78, chemistry: 80 },
        { id: 3, name: 'Charlie', math: 91, physics: 89, chemistry: 93 },
        { id: 4, name: 'Diana', math: 67, physics: 72, chemistry: 70 },
        { id: 5, name: 'Ethan', math: 85, physics: 80, chemistry: 82 },
        { id: 6, name: 'Fiona', math: 78, physics: 75, chemistry: 77 },
        { id: 7, name: 'George', math: 95, physics: 94, chemistry: 90 },
        { id: 8, name: 'Hannah', math: 82, physics: 84, chemistry: 88 },
        { id: 9, name: 'Ian', math: 70, physics: 68, chemistry: 65 },
        { id: 10, name: 'Julia', math: 89, physics: 90, chemistry: 86 }
    ];

    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <Line dataKey="math" stroke="purple"></Line>
                <Line dataKey="physics" stroke="red"></Line>
                <Line dataKey="chemistry"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;