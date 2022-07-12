import * as React from "react";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import AppBar from "../components/AppBar";
import {
	useQuery,
	useSubscription,
	useApolloClient,
	useMutation,
	useLazyQuery,
} from "@apollo/client";
import SearchBar from "../components/SearchBar";
import ReactLoading from "react-loading";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import GET_POSTS from "../queries/GET_POSTS.js";
import CREATE_NEW_POST from "../queries/CREATE_NEW_POST.js";
import GET_ALL_USERS from "../queries/GET_ALL_USERS.js";
import WATCH_NEW_POST from "../queries/WATCH_NEW_POST.js";
import CreateNewPostDialog from "../components/Posts/CreateNewPostDialog.js";
import LoadingDelay from "react-loading-delay";

export default function AlignItemsList() {
	const darkTheme = createTheme({
		palette: {
			background: { default: "#35c9ca" },
			primary: { main: "#04071c" },
		},
	});

	let navigate = useNavigate();
	let location = useLocation();
	
	const handleNavigate = (loc) => {
		if (loc !== location.pathname) navigate(loc);
	};
	
	const MODES = {
		ALL_POSTS: "ALL_POSTS",
		NEW_POSTS: "NEW_POSTS",
	};

	const [searchKey, setSearchKey] = React.useState("");
	const [alertComponent, setAlertComponent] = React.useState(null);
	const [newPosts, setNewPosts] = React.useState([]);
	const [pageMode, setPageMode] = React.useState(MODES.ALL_POSTS);
	const [NewPostDialogOpen, setNewPostDialogOpen] = React.useState(false);
	const client = useApolloClient();

	const { loading, data } = useQuery(GET_POSTS, {
		variables: { searchKey },
	});
	const { data: subscriptionData } = useSubscription(WATCH_NEW_POST, {
		variables: { searchKey },
	});
	const { data: subscriptionData2 } = useSubscription(WATCH_NEW_POST, {
		variables: { searchKey: "" },
	});
	const [createNewPost, {}] = useMutation(CREATE_NEW_POST);
	const [getAllUsers, { data: getAllUsersData }] = useLazyQuery(GET_ALL_USERS);


	const handleCreateNewPost = (args) => {
		createNewPost({
			variables: {
				user_id: args.user,
				title: args.title,
				description: args.description,
			},
		});
	};

	React.useEffect(() => {
		if (!subscriptionData2) return;
		let id = subscriptionData2.watchNewPosts.id;
		client.writeQuery({
			query: GET_POSTS,
			data: {
				// Contains the data to write
				posts: [
					...data.posts,
					{
						__ref: "Post:" + id,
					},
				],
			},
			variables: {
				searchKey: "",
			},
		});
		setNewPosts([subscriptionData2.watchNewPosts, ...newPosts]);
		setAlertComponent(
			<Alert
				severity="info"
				onClick={(e) => {
					handleNavigate("/post/" + subscriptionData2.watchNewPosts.id);
				}}
			>
				{subscriptionData2.watchNewPosts.user.fullName} published{" "}
				{subscriptionData2.watchNewPosts.title} post (Go To Post Detail)
			</Alert>
		);
		setTimeout(() => {
			setAlertComponent(null);
		}, 5000);
	}, [subscriptionData2]);

	React.useEffect(() => {
		if (!subscriptionData || ["", " "].includes(searchKey)) return;
		let id = subscriptionData.watchNewPosts.id;
		client.writeQuery({
			query: GET_POSTS,
			data: {
				// Contains the data to write
				posts: [
					...data.posts,
					{
						__ref: "Post:" + id,
					},
				],
			},
			variables: {
				searchKey: searchKey,
			},
		});
	}, [subscriptionData]);

	React.useEffect(() => {
		if (!data) return;
		console.log("data");
	}, [data]);

	React.useEffect(() => {
		if (!getAllUsersData) return;
		console.log(getAllUsersData);
	}, [getAllUsersData]);

	const handleSearchChange = (e) => {
		setSearchKey(e.target.value);
	};

	const generateListItemPost = (post) => {
		return (
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt={post.user.fullName} src={post.user.photoUrl} />
				</ListItemAvatar>
				<ListItemText
					primary={
						<React.Fragment>
							<Link
								underline="hover"
								onClick={(e) => {
									handleNavigate("/post/" + post.id);
								}}
							>
								<Typography
									sx={{ display: "inline" }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									{post.title + " - " + post.user.fullName}
								</Typography>
							</Link>
							<Typography variant="body2" sx={{ color: "gray" }}>
								{post.short_description + " ..."}
							</Typography>
						</React.Fragment>
					}
				/>
				<Divider variant="inset" component="li" />
			</ListItem>
		);
	};

	return (
		<div>
			<CreateNewPostDialog
				open={NewPostDialogOpen}
				setOpen={setNewPostDialogOpen}
				handleSend={handleCreateNewPost}
				usersData={getAllUsersData}
			/>
			<AppBar />
			{alertComponent}
			<LoadingDelay check={loading} delay={50}>
				{({ isLoading, isDelaying }) => {
					if (isDelaying || isLoading) {
						return (
							<Grid
								container
								spacing={0}
								direction="column"
								alignItems="center"
								justifyContent="center"
								style={{ minHeight: "100vh" }}
							>
								<Grid item xs={3}>
									<ReactLoading type="spinningBubbles" />
								</Grid>
							</Grid>
						);
					}
				}}
			</LoadingDelay>

			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Grid container sx={{ marginTop: 5 }}>
					<Grid item xs={3} />
					<Grid item xs={6}>
						<Paper elavation={20} sx={{ backgroundColor: "#cfcce0" }}>
							<Button
								onClick={(e) => {
									setPageMode(MODES.ALL_POSTS);
								}}
								sx={{ float: "left" }}
								startIcon={<MailIcon color="action" fontSize="large" />}
							>
								All Posts
							</Button>
							<Button
								onClick={async (e) => {
									getAllUsers();
									setNewPostDialogOpen(true);
								}}
								sx={{ float: "left" }}
								startIcon={
									<DriveFileRenameOutlineIcon color="action" fontSize="large" />
								}
							>
								Create New Post
							</Button>
							<Button
								onClick={(e) => {
									setPageMode(MODES.NEW_POSTS);
								}}
								sx={{ float: "right" }}
								startIcon={
									<Badge color="info" badgeContent={newPosts.length}>
										<PostAddIcon color="action" fontSize="large" />
									</Badge>
								}
							>
								New Posts
							</Button>
							<br></br>
							<br></br>
							<SearchBar onChangeFunc={handleSearchChange} />
							{!loading && 
								<List sx={{ width: "100%" }}>
									{console.log(data)}
									{pageMode === MODES.ALL_POSTS &&
										data &&
										data.posts.map((post, index) => {
											return generateListItemPost(post);
										})}
									{pageMode === MODES.NEW_POSTS &&
										newPosts.map((post, index) => {
											return generateListItemPost(post);
										})}
								</List>
							}
						</Paper>
					</Grid>
					<Grid item xs={3} />
				</Grid>
			</ThemeProvider>
		</div>
	);
}
