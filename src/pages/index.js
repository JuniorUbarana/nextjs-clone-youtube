import { Box, Grid } from '@material-ui/core';

import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

export default function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p="2">
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'NextJS: O framework que você deveria conhecer (parte #01)',
      authorId: 1,
      autorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 2,
      title:
        'NextJS: Entendendo a renderização React no lado servidor (parte #02)',
      authorId: 1,
      autorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: 'thumbs/next02.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 3,
      title: 'NextJS: Totas estáticas e dinâmicas (parte #03)',
      authorId: 3,
      autorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 4,
      title: 'NextJS: O framework que você deveria conhecer (parte #01)',
      authorId: 1,
      autorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 5,
      title:
        'NextJS: Entendendo a renderização React no lado servidor (parte #02)',
      authorId: 1,
      autorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: 'thumbs/next02.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 6,
      title: 'NextJS: Totas estáticas e dinâmicas (parte #03)',
      authorId: 3,
      autorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updateAt: new Date(),
    },
  ];
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}
