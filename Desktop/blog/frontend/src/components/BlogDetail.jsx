import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:5010/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
      });
    });
  }, [id]);
  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:5010/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  console.log(blog);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myBlogs/"));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <>
        {inputs && (
          <form onSubmit={handleSubmit} style={{ width: "80%" }}>
            <Box
              border="none"
              borderRadius={10}
              backgroundColor="#fff"
              sx={{
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.20)",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 16px 32px rgba(0, 0, 0, 0.50)",
                },
              }}
              padding={3}
              margin="auto"
              marginTop={3}
              display="flex"
              flexDirection="column"
              width="30%"
            >
              <Typography
                fontWeight={"bold"}
                padding={3}
                color="grey"
                variant="h5"
                textAlign={"center"}
              >
                Edit Your Blog
              </Typography>
              <InputLabel sx={labelStyles}>Title</InputLabel>
              <TextField
                name="title"
                onChange={handleChange}
                value={inputs.title}
                margin="auto"
                variant="outlined"
              />
              <InputLabel sx={labelStyles}>Description</InputLabel>
              <TextField
                name="description"
                onChange={handleChange}
                value={inputs.description}
                margin="auto"
                variant="outlined"
              />

              <Button
                sx={{ mt: 2, borderRadius: 4 }}
                variant="contained"
                color="warning"
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      </>
    </div>
  );
};

export default BlogDetail;
