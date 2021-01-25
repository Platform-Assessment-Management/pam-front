import React, { useEffect, useState } from 'react';

/* material-ui */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ChaptersServices from '../services/ChaptersServices';
import Title from './Title';
import { AxiosResponse } from 'axios';

export default function Chapter() {
  type Chapter = {
    chapterId: number,
    name: string
  }

  const [chapters, setChapters] = useState([]);

  const retrieveChapters = () => {
    ChaptersServices.getAllChapters()
      .then((response: AxiosResponse) => {
        setChapters(response.data.chapters);
        
        console.log(response.data.chapters);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  useEffect(() => { retrieveChapters(); }, []);

  return (
    <React.Fragment>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Title>Chapters</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chapters.map((chapter: Chapter) => (
              <TableRow key={chapter.chapterId}>
                <TableCell>{chapter.chapterId}</TableCell>
                <TableCell>{chapter.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        </Grid>
      </Container>

    </React.Fragment>
  );
}
