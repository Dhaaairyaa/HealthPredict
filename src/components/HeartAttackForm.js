import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Container,
  Box,
  Alert,
} from "@mui/material";

const HeartAttackForm = () => {
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [cp, setCp] = useState("");
    const [trtbps, setTrtbps] = useState("");
    const [chol, setChol] = useState("");
    const [fbs, setFbs] = useState("");
    const [restecg, setRestecg] = useState("");
    const [thalachh, setThalachh] = useState("");
    const [exng, setExng] = useState("");
    const [oldpeak, setOldpeak] = useState("");
    const [slp, setSlp] = useState("");
    const [caa, setCaa] = useState("");
    const [thall, setThall] = useState("");
    const [answer,setanswer] = useState(null);

  const datagathered = {
    age,
    sex,
    cp,
    trtbps,
    chol,
    fbs,
    restecg,
    thalachh,
    exng,
    oldpeak,
    slp,
    caa,
    thall,
  };

  const handleSubmit = async () => {
    await fetch("http://127.0.0.1:5000/predictHeartAttack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datagathered),
    })
        .then((response) => response.json())
        .then((data) => {
          setanswer(data.prediction);
          console.log("Response:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  };

  return (
      <Container >
        <Box p={4} boxShadow={3} borderRadius={2} mt={4} className={
            "bg-white bg-opacity-60  shadow-lg rounded-xl"
        }>
          <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
          >
            <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1a202c",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
            >
              Heart Attack Prediction
            </h4>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                  row
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
              >
                <FormControlLabel value="1" control={<Radio />} label="Male" />
                <FormControlLabel value="0" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>

            <TextField
                label="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Chest Pain Type</FormLabel>
              <RadioGroup
                  row
                  value={cp}
                  onChange={(e) => setCp(Number(e.target.value))}
              >
                <FormControlLabel value={0} control={<Radio />} label="Low" />
                <FormControlLabel value={1} control={<Radio />} label="Moderate" />
                <FormControlLabel value={2} control={<Radio />} label="High" />
                <FormControlLabel value={3} control={<Radio />} label="Severe" />
              </RadioGroup>
            </FormControl>

            <TextField
                label="Resting Blood Pressure"
                type="number"
                value={trtbps}
                onChange={(e) => setTrtbps(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="Cholestrol"
                type="number"
                value={chol}
                onChange={(e) => setChol(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">fasting blood sugar</FormLabel>
              <RadioGroup
                  row
                  value={fbs}
                  onChange={(e) => setFbs(e.target.value)}
              >
                <FormControlLabel value="1" control={<Radio />} label="True" />
                <FormControlLabel value="0" control={<Radio />} label="False" />
              </RadioGroup>
            </FormControl>


            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Resting Electrocardiogram Results</FormLabel>
              <RadioGroup
                  row
                  value={restecg}
                  onChange={(e) => setRestecg(e.target.value)}
              >
                <FormControlLabel value="0" control={<Radio />} label="Normal" />
                <FormControlLabel value="1" control={<Radio />} label="ST-T wave abnormality" />
              </RadioGroup>
            </FormControl>

            {/* <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Maximum heart rate achieved</FormLabel>
              <RadioGroup
                  row
                  value={thalachh}
                  onChange={(e) => setThalachh(e.target.value)}
              >
                <FormControlLabel value="0" control={<Radio />} label="True" />
                <FormControlLabel value="1" control={<Radio />} label="False" />
              </RadioGroup>
            </FormControl> */}

            <TextField
                label="Maximum Heart Rate Achieved"
                type="number"
                value={thalachh}
                onChange={(e) => setThalachh(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />



            <TextField
                label="Exercise-induced angina"
                type="number"
                value={exng}
                onChange={(e) => setExng(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="oldpeak"
                type="number"
                value={oldpeak}
                onChange={(e) => setOldpeak(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">slope of the peak exercise ST segment</FormLabel>
              <RadioGroup
                  row
                  value={slp}
                  onChange={(e) => setSlp(e.target.value)}
              >
                <FormControlLabel value="0" control={<Radio />} label="Upsloping" />
                <FormControlLabel value="1" control={<Radio />} label="Flat" />
                <FormControlLabel value="2" control={<Radio />} label="Downsloping" />
              </RadioGroup>
            </FormControl>


            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Number of major vessels colored by fluoroscopy</FormLabel>
              <RadioGroup
                  row
                  value={caa}
                  onChange={(e) => setCaa(e.target.value)}
              >
                <FormControlLabel value="0" control={<Radio />} label="0" />
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Number of major vessels colored by fluoroscopy</FormLabel>
              <RadioGroup
                  row
                  value={thall}
                  onChange={(e) => setThall(e.target.value)}
              >
                <FormControlLabel value="1" control={<Radio />} label="Normal" />
                <FormControlLabel value="2" control={<Radio />} label="Fixed defect" />
                <FormControlLabel value="3" control={<Radio />} label="Reversible defect" />
              </RadioGroup>
            </FormControl>
            

            <Box mt={3} display="flex" justifyContent="center">
              <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  style={{
                    background: "#292525",
                  }}
              >
                Submit
              </Button>
            </Box>
          </form>

          {answer === 0 && (
              <Alert severity="success" sx={{ mt: 2 }}>
                You are safe
              </Alert>
          )}
          {answer === 1 && (
              <Alert severity="error" sx={{ mt: 2 }}>
                You are at risk
              </Alert>
          )}
        </Box>
      </Container>
  );
};

export default HeartAttackForm;
