import React, { useEffect, useState } from 'react';
//import Campaigns from './Campaigns';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

//import DetailsIcon from '@material-ui/icons/Details';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

const App = () => {
  const classes = useStyles();

  const API_KEY =
    'd978956e7a866d2b0816575052fbea8ffc4bfc14cdc57a53c09a185609ef6bd9';

  const [campaigns, setCampaigns] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCampaign();
  }, []);

  const getCampaign = async () => {
    const response = await fetch(
      `https://dash.kronshtatd.ru:323/api/campaigns/?api_key=${API_KEY}`
    );
    const data = await response.json();
    setCampaigns(data);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rowEvents = () => {
    // onClick: (e, row) => {
    //   console.log(row);
    // },
    console.log('tets')
  };

  return (
    <div className='App'>
      <h1>Список компаний</h1>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Название компании</TableCell>
                <TableCell align='center'>Дата создания</TableCell>
                <TableCell align='center'>Пользователи</TableCell>
                <TableCell align='center'>Статус</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? campaigns.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : campaigns
              ).map((camp) => (
                <TableRow key={camp.id} onClick={rowEvents}>
                  <TableCell component='th' scope='row'>
                    {camp.name}
                  </TableCell>
                  <TableCell align='center'>{camp.created_date}</TableCell>
                  <TableCell align='center'>{camp.results.length}</TableCell>
                  <TableCell align='center'>
                    <Button variant='outlined' color='primary' size='small'>
                      {camp.status}
                    </Button>
                  </TableCell>
                  <TableCell align='center'>
                    <SettingsApplicationsIcon style={{ color: green[500] }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={campaigns.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default App;
