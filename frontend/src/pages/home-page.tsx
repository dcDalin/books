import { Button } from '@mui/material';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ello | Home</title>
      </Helmet>
      <h1>hello</h1>
      <Button color="inherit">hello</Button>
    </div>
  );
}
