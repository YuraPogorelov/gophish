import React, { useEffect, useState } from 'react';
//import Campaigns from './Campaigns';
//import * as moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const App = () => {
  const classes = useStyles();

  const API_KEY =
    'd978956e7a866d2b0816575052fbea8ffc4bfc14cdc57a53c09a185609ef6bd9';

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaign();
  });

  const getCampaign = async () => {
    const response = await fetch(
      `http://161.35.16.211:323/api/campaigns/?api_key=${API_KEY}`
    );
    const data = await response.json();
    setCampaigns(data);
    // const cretDate = moment(data.created_date).format('YYYY-MM-DD');
    //console.log(cretDate);
    //console.log(data);
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
                <TableCell align='right'>Дата создания</TableCell>
                <TableCell align='right'>Пользователи</TableCell>
                <TableCell align='right'>Статус</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.map((camp) => (
                <TableRow key={camp.id}>
                  <TableCell component='th' scope='row'>
                    {camp.name}
                  </TableCell>
                  <TableCell align='right'>{camp.created_date}</TableCell>
                  <TableCell align='right'>{camp.results.length}</TableCell>
                  <TableCell align='right'>{camp.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* {campaigns.map((camp) => (
          <Campaigns
            key={camp.id}
            name={camp.name}
            created_date={camp.created_date}
            results={camp.results.length}
            status={camp.status}
          />
        ))} */}
      </div>
    </div>
  );
};

export default App;
