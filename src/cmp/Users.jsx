import {
    AppBar, Box, Container, FormControlLabel, FormGroup, Paper, Switch, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Toolbar, Grid, FormControl, InputLabel, MenuItem, Select, TextField
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
    const dispatch = useDispatch();
    let response = useSelector(response => response);
    useEffect(() => {
        return () => dispatch({
            type: "GET_ALL_DATA"
        })
    }, [dispatch])
    const [filterBy, setFilterBy] = useState('FILTER_BY_NAME');

    const Row = ({ data }) => (
        <TableRow>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.mobile}</TableCell>
        </TableRow>
    )

    return (
        <>
            <Box sx={{ height: "100vh" }} component={Paper}>
                <AppBar sx={{ position: "static" }}>
                    <Toolbar variant="dense" component={Container}>
                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                        </FormGroup>
                    </Toolbar>
                </AppBar>

                <Container>
                    <Grid container spacing={2} sx={{ mt: 4 }}>
                        <Grid item xs={4.4} sm={3.7} md={2.5} lg={1.8}>
                            <FormControl fullWidth>
                                <InputLabel>Filter By</InputLabel>
                                <Select value={filterBy} onChange={(e) => setFilterBy(e.target.value)} >
                                    <MenuItem value={"FILTER_BY_NAME"}>Filter By Name</MenuItem>
                                    <MenuItem value={"FILTER_BY_EMAIL"}>Filter By Email</MenuItem>
                                    <MenuItem value={"FILTER_BY_MOBILE"}>Filter By Mobile</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={7.6} sm={8.3} md={9.5} lg={10.2}>
                            <TextField label={`Search by ${filterBy.replace("FILTER_BY_", "").toLowerCase()} here`} fullWidth
                                variant="outlined" onInput={e => dispatch({ keywords: e.target.value, type: filterBy })} />
                        </Grid>
                    </Grid>

                    <TableContainer sx={{ my: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.No</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email ID</TableCell>
                                    <TableCell>Phone No.</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    response && response.userData.map((row) => <Row key={row.id} data={row} />)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box >
        </>
    )
}
