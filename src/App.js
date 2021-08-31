import React from 'react';

import { Container, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 100px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '600px',
		border: '2px solid black',

		[theme.breakpoints.down('xs')]: {
			width: '90%',
		},
	},
	image: {
		marginLeft: '15px',
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
	},
}));

function App() {
	const classes = useStyles();

	return (
		<Container className={classes.wrapper}>
			<AppBar position='static' color='inherit' className={classes.appBar}>
				<Typography variant='h2' align='center'>
					Video Chats
				</Typography>
			</AppBar>

			{/* VideoPlayer */}
			<VideoPlayer />

			{/* Options -> Notification */}
			<Options>
				<Notifications />
			</Options>
		</Container>
	);
}

export default App;
