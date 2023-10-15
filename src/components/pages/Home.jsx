import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./home.css";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic,faQuoteLeft } from '@fortawesome/free-solid-svg-icons'




const WelcomePage = () => {
  return (
    <>
      <h1 className="Welcome-text">Unlock Your SuperPowers With PRO-MO</h1>
      <p className="login-text">Login to get Started</p>
     
    </>
  );
};


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'20px',
};








const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Believe you can, and you're halfway there. -Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
];
const openSpotifyHomePage = () => {
  window.open('https://open.spotify.com/artist/2eWsULF010CY3fWemRf22i', '_blank');
};
const openSoundcloudHomePage = () => {
  window.open('https://soundcloud.com/luvemenot/sets/lofi-pomodoro-study-session', '_blank');
};

function Home(props) {
  const { isLoggedIn, setIsLoggedIn} = props;
 //const { isLoggedIn, userName } = props;
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()




 
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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

  useEffect(() => {
    chrome.storage.local.clear()
    const data = {}
    tasks.forEach((task,index) => {
      data[index] = task
      chrome.storage.local.set(data)
    })
  },[tasks])

  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(false);
    setTasks(prev => [...prev, formData])

    setFormData({
      title: "",
      description: "",
      durationValue: 0,
      durationUnit: "minutes",
      breakTime: 0,
    });
  };
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
        <Box>
         {tasks.length > 0  &&
        <List sx={{ width: "300px", maxHeight: '200px', overflow: 'auto', marginTop: '20px', padding: '20px', backgroundColor: '#BC7AF9', border: ' black', borderRadius: '10px' }}>
          {tasks.map((task, index) => (
            <ListItem draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            key={index} alignItems="center"
            sx={{ backgroundColor: '#FFA1F5', border: '', borderRadius: '10px', marginTop: '10px', height:'50px', display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography sx={{maxWidth: '180px', overflow: 'hidden'}}>{task.title}</Typography>
              <Box>
              <IconButton onClick={() => navigate('dashboard', { state: index })}>
                <PlayCircleIcon sx={{ padding: 0 }}/>
              </IconButton>
              <IconButton onClick={() => deleteTask(task.title)}>
                <DeleteIcon />
              </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
        } 
        </Box>
        {/* spotify  button */}

        <div  >
      <button className="spotify" onClick={openSpotifyHomePage}>
        {/* <a href="https://open.spotify.com/artist/2eWsULF010CY3fWemRf22i" target="_blank" rel="noopener noreferrer"> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
        </svg>
        {/* </a> */}
      </button>

      <button className="soundcloud" onClick={openSoundcloudHomePage}>
        {/* <a href="https://soundcloud.com/luvemenot/sets/lofi-pomodoro-study-session" target="_blank" rel="noopener noreferrer"> */}
        <FontAwesomeIcon icon={faMusic} className="fa-lg" />   
         
        {/* </a> */}
      </button>
    </div>




<div >
      <button style={{ position: 'fixed', left: '0', top: '50%', transform: 'translateY(-50%)' }} onClick={handleOpen}>
      <FontAwesomeIcon icon={faQuoteLeft} className="fa-lg" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"    sx={{
    fontSize: '24px', 
    fontWeight: 'bold', 
    color: '#333',
    marginBottom: '10px', 
    borderBottom: '2px solid #007bff', 
    paddingBottom: '5px',
    
  }}>
            Today's Quote
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {getRandomQuote()}
          </Typography>
        </Box>
      </Modal>
    </div>












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