import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

type Props = {
  name: string,
  value: Data,
}

export const ResultCard = (props:Props) => {
  const [data , setData] = useState(props);
  console.log(data);

  return(
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
  );
}
