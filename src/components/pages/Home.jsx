import {
  Box,
  Button,
  Container,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./home.css";
import { useState } from "react";

const WelcomePage = () => {
  return (
    <>
      <h1 className="Welcome-text">Unlock Your SuperPowers With PRO-MO</h1>
      <p className="login-text">Login to get Started</p>
    </>
  );
};
function Home(props) {
  const { isLoggedIn, userName } = props;
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const oldIndex = e.dataTransfer.getData('text/plain');
    const newTasks = [...tasks];
    const [draggedTask] = newTasks.splice(oldIndex, 1);
    newTasks.splice(newIndex, 0, draggedTask);
    setTasks(newTasks);
  };

  //need to add this later after designing delete button
  const deleteTask = (taskTitle) => {
    const updatedTasks = tasks.filter((task) => task.title !== taskTitle);
    setTasks(updatedTasks);
  };

  if (isLoggedIn) {
    return <WelcomePage />;
  }

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    durationValue: "",
    durationUnit: "minutes",
    breakTime: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(false);
    setTasks(prev => [...prev, formData])
    setFormData({
      title: "",
      description: "",
      durationValue: "",
      durationUnit: "minutes",
      breakTime: "",
    });
  };
  console.log("Form data:", tasks);
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ width: "150px" }}
          variant="contained"
          color="success"
          onClick={() => setModal(true)}
        >
          <AddIcon />
          Add Task
        </Button>
        <List sx={{ width: "200px" }}>
          {tasks.map((task, index) => (
            <ListItem draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            key={index} alignItems="center">
              <Typography>{task.title}</Typography>
            </ListItem>
          ))}
        </List>
      </Container>
      <Modal open={modal} onClose={() => setModal(false)}>
        <Box className="modal">
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "10px",
              fontFamily: "cursive",
              color: "green",
            }}
          >
            Make your task
          </Typography>
          <Container
            maxWidth="xs"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <Box>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Title"
                  name="title"
                  variant="filled"
                  required
                  inputProps={{
                    style: {
                      height: "15px",
                    },
                  }}
                  value={formData.title}
                  onChange={handleChange}
                />
                <TextField
                  label="Description"
                  name="description"
                  variant="filled"
                  required
                  inputProps={{
                    style: {
                      height: "15px",
                    },
                  }}
                  value={formData.description}
                  onChange={handleChange}
                />
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField
                    label="Duration"
                    name="durationValue"
                    variant="filled"
                    required
                    inputProps={{
                      style: {
                        height: "15px",
                        width: "300px",
                      },
                      max: 60,
                    }}
                    type="number"
                    value={formData.durationValue}
                    onChange={handleChange}
                  />
                  <Select
                    label="Unit"
                    name="durationUnit"
                    variant="filled"
                    inputProps={{
                      style: {
                        height: "15px",
                      },
                    }}
                    sx={{ height: 48 }}
                    value={formData.durationUnit}
                    onChange={handleChange}
                  >
                    <MenuItem value="minutes">Minutes</MenuItem>
                    <MenuItem value="hours">Hours</MenuItem>
                  </Select>
                </Box>
                <TextField
                  label={`Break Time in minutes`}
                  name="breakTime"
                  variant="filled"
                  required
                  inputProps={{
                    style: {
                      height: "15px",
                    },
                    max: 60,
                  }}
                  sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                      {
                        display: "none",
                      },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                  }}
                  type="number"
                  value={formData.breakTime}
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
              </form>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
}

export default Home;
