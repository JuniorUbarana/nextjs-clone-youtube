import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import Image from 'next/image';

dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

export default function VideoCard({ item }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <img src={item.thumb} alt={item.title} className={classes.img} />
      <Box display="flex" mt="1">
        <Box mr={2}>
          <Avatar alt={item.authorName} src={item.authorAvatar}>
            SS
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
