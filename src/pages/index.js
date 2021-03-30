import { Button } from '@material-ui/core';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="YouTube">
      Clone YouTube com NextJS & Material-UI
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
    </Layout>
  );
}
