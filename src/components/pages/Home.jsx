import { Box, Container, Typography } from "@mui/material"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"

const WelcomePage = () => {
  return (
    <>
      <h1 className="Welcome-text">Unlock Your SuperPowers With PRO-MO</h1>
      <p className="login-text">Login to get Started</p>
    </>
  );
};
function Home(props) {
  const { isLoggedIn, userName } = props
  
  if(!isLoggedIn){
    return (
      <WelcomePage />
    )
  }

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
