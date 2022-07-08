import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionType from "../redux/actions";
import Post from "../components/post";
import UpdatePostDialog from "../components/UpdatePost";
import { makeStyles } from "@material-ui/core/styles";
import { Table, Button } from "antd";
import "antd/dist/antd.css";

const useStyles = makeStyles((theme) => ({
  user_photo: {
    width: 60,
  },
  btn_space: {
    marginRight: 15,
  },
}));

const BlogPost = (props) => {
  const { posts, deletedPost, updatedPost, actions } = props;
  debugger
  const [state, setState] = useState({
    text: "",
  });
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState({
    open: false,
    post: {},
  });

  const handleCloseDialog = () => {
    setOpenDialog({
      ...openDialog,
      open: false,
    });
  };

  const handleOpenDialog = (post) => {
    setOpenDialog({
      open: true,
      post,
    });
  };

  const handleOpenDialogPostChange = (e) => {
    setOpenDialog({
      ...openDialog,
      post: {
        ...openDialog.post,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSavePost = () => {
    actions.updatePost(openDialog.post);
    setOpenDialog({
      ...openDialog,
      open: false,
    });
  };

  const handleDeletePost = (id) => {
    actions.deletePost(id);
  };

  useEffect(() => {
    actions.getPosts();
  }, []);

  // useEffect(() => {
  //   if (updatedPost || deletedPost) {
  //     actions.getPosts();
  //   }
  // }, [updatedPost, deletedPost]);

  return (
    
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item xs={12}>
        {/* <Post
          post={posts}
          handleOpen={handleOpenDialog}
          handleDelete={handleDeletePost}
        /> */}
         <Table
        dataSource={posts}
        columns={[
          {
            title: "User Photo",
            dataIndex: "avatar",
            key: "avatar",
            render: (avatar) => (
              <img src={avatar} alt="img" className={classes.user_photo} />
            ),
          },
          {
            title: "First Name",
            dataIndex: "first_name",
            key: "first_name",
          },
          {
            title: "Last Name",
            dataIndex: "last_name",
            key: "last_name",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Action",
            key: "action",
            render: (item, record) => (
              <div>
                <Button
                  onClick={() => handleOpenDialog(item)}
                  type="primary"
                  className={classes.btn_space}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeletePost(item.id)}
                  type="primary"
                  danger
                >
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
        pagination={false}
      />
      </Grid>
      <UpdatePostDialog
        openDialog={openDialog}
        handleClose={handleCloseDialog}
        handleSave={handleSavePost}
        handlePostChange={handleOpenDialogPostChange}
      />
    </Grid>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.getPosts.posts,
    deletedPost: state.deletePost.post,
    updatedPost: state.updatePost.post,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    getPosts: () => {
      dispatch(actionType.getPosts());
    },
    deletePost: (payload) => {
      dispatch(actionType.deletePost(payload));
    },
    updatePost: (payload) => {
      dispatch(actionType.updatePost(payload));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
