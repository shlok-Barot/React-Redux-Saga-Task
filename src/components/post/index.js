import React from "react";
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

const Post = (props) => {
  const { post, handleDelete, handleOpen } = props;
  console.log(props, "props");
  const classes = useStyles();
  return (
    <div>
      <Table
        dataSource={post}
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
                  onClick={() => handleOpen(item)}
                  type="primary"
                  className={classes.btn_space}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(item.id)}
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
    </div>
  );
};

export default Post;
