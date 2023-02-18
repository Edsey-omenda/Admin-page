import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableList = () => {

    const rows = [
        {
            id: 1234567,
            product: "Hp pavilion",
            img: "https://images.pexels.com/photos/7652039/pexels-photo-7652039.jpeg?auto=compress&cs=tinysrgb&w=400",
            customer: "James Omenda",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2345678,
            product: "Lenovo T450",
            img: "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=400",
            customer: "Michael Ross",
            date: "1 March",
            amount: 900,
            method: "Online Delivery",
            status: "Pending",
        },
        {
            id: 1234561,
            product: "Mac M1",
            img: "https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&w=400",
            customer: "Cecilia Cheryl",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 1234562,
            product: "Mac M2",
            img: "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=400",
            customer: "Anthony Weiszer",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            id: 1234563,
            product: "Lenovo X360",
            img: "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=400",
            customer: "Harvey Spector",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
    ];

    return (
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                    <div className="cellWrapper">
                        <img src={row.img} alt="" className="image" />
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default TableList;
