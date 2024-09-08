// src/app/name/api/dataset.ts

// Example dummy API for statistics
export default function handler(req: any, res: any) {
    res.status(200).json({
      stats: [
        { label: 'Total Sales', value: 1000 },
        { label: 'New Customers', value: 50 },
        { label: 'Active Users', value: 300 },
      ],
      pieData: {
        labels: ['Sales', 'Customers', 'Users'],
        datasets: [
          {
            data: [1000, 50, 300],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
      lineData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales Over Time',
            data: [100, 200, 300, 400, 500],
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
          },
        ],
      },
    });
  }
  