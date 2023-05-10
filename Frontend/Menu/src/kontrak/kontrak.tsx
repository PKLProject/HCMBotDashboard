import { createSignal, type Component } from 'solid-js';
import styles from './menu.css';
import { 
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
  } from "@suid/material"
  import { mapArray } from "solid-js";

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
const App: Component = () => {

    return (
        <div>          
            
            <div>
                <div class='atas'></div>
                <svg xmlns="http://www.w3.org/2000/svg" class='lonceng' width="24" height="24" viewBox="0 0 16 16"><path fill="#FFFFFF" d="M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.414A.5.5 0 0 0 3 12h10a.5.5 0 0 0 .464-.685L12.5 8.9V6.5A4.5 4.5 0 0 0 8 2Zm0 12.5A2 2 0 0 1 6.063 13h3.874A2 2 0 0 1 8 14.5Z"/></svg>
                <span class='pemberitahuan'>Pemberitahuan</span>

            </div>
  
            <div>
                <div class='back'></div>
            </div>
            <div class='tables '>
        <TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
<TableHead>
  <TableRow>
    <TableCell>Dessert (100g serving)</TableCell>
    <TableCell align="right">Calories</TableCell>
    <TableCell align="right">Fat&nbsp;(g)</TableCell>
    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    <TableCell align="right">Protein&nbsp;(g)</TableCell>
  </TableRow>
  </TableHead>
  <TableBody>
          {mapArray(
            () => rows,
            (row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
</div>
        </div>
    );
};

export default App;