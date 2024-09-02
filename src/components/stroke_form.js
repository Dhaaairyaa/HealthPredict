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

const Strokeform = () => {
  const [gender, setSelectedGender] = useState("");
  const [age, setAge] = useState("");
  const [Hypertension, setHypertension] = useState("");
  const [Heart_disease, setHeart_disease] = useState("");
  const [ever_married, setever_married] = useState("");
  const [work_type, setWorkType] = useState("");
  const [Residence_type, setResidence_type] = useState("");
  const [everSmoked, setEverSmoked] = useState("");
  const [avg_glucose_level, setavg_glucose_level] = useState("");
  const [bmi, setAvgBmi] = useState("");
  const [answer, setanswer] = useState(null);

  const datagathered = {
    gender,
    age,
    Hypertension,
    Heart_disease,
    ever_married,
    work_type,
    Residence_type,
    everSmoked,
    avg_glucose_level,
    bmi,
  };

  const handleSubmit = async () => {
    await fetch("http://127.0.0.1:5000/predict", {
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
              Don't Worry, Just Say "All is Well"!
            </h4>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                  row
                  value={gender}
                  onChange={(e) => setSelectedGender(e.target.value)}
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
              <FormLabel component="legend">Hypertension</FormLabel>
              <RadioGroup
                  row
                  value={Hypertension}
                  onChange={(e) => setHypertension(Number(e.target.value))}
              >
                <FormControlLabel value={1} control={<Radio />} label="Yes" />
                <FormControlLabel value={0} control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Heart Disease</FormLabel>
              <RadioGroup
                  row
                  value={Heart_disease}
                  onChange={(e) => setHeart_disease(Number(e.target.value))}
              >
                <FormControlLabel value={1} control={<Radio />} label="Yes" />
                <FormControlLabel value={0} control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Ever Married</FormLabel>
              <RadioGroup
                  row
                  value={ever_married}
                  onChange={(e) => setever_married(Number(e.target.value))}
              >
                <FormControlLabel value={1} control={<Radio />} label="Yes" />
                <FormControlLabel value={0} control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Work Type</FormLabel>
              <RadioGroup
                  row
                  value={work_type}
                  onChange={(e) => setWorkType(e.target.value)}
              >
                <FormControlLabel value="Private" control={<Radio />} label="Private" />
                <FormControlLabel value="Self-employed" control={<Radio />} label="Self-Employed" />
                <FormControlLabel value="Govt_job" control={<Radio />} label="Govt Job" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Smoking Status</FormLabel>
              <RadioGroup
                  row
                  value={everSmoked}
                  onChange={(e) => setEverSmoked(e.target.value)}
              >
                <FormControlLabel value="formerly smoked" control={<Radio />} label="Formerly Smoked" />
                <FormControlLabel value="never smoked" control={<Radio />} label="Never Smoked" />
                <FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Residence Type</FormLabel>
              <RadioGroup
                  row
                  value={Residence_type}
                  onChange={(e) => setResidence_type(e.target.value)}
              >
                <FormControlLabel value="Urban" control={<Radio />} label="Urban" />
                <FormControlLabel value="Rural" control={<Radio />} label="Rural" />
              </RadioGroup>
            </FormControl>

            <TextField
                label="Average Glucose Level"
                type="number"
                value={avg_glucose_level}
                onChange={(e) => setavg_glucose_level(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="BMI Level"
                type="number"
                value={bmi}
                onChange={(e) => setAvgBmi(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

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

export default Strokeform;
