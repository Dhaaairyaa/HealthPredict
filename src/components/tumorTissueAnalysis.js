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

const TumorTissueAnalysis = () => {
    const [diagnosis, setDiagnosis] = useState("");
    const [radius_mean, setRadius_mean] = useState("");
    const [texture_mean, setTexture_mean] = useState("");
    const [perimeter_mean, setPerimeter_mean] = useState("");
    const [area_mean, setArea_mean] = useState("");
    const [smoothness_mean, setSmoothness_mean] = useState("");
    const [compactness_mean, setCompactness_mean] = useState("");
    const [concavity_mean, setConcavity_mean] = useState("");
    const [concave_points_mean, setConcave_points_mean] = useState("");
    const [texture_worst, setTexture_worst] = useState("");
    const [perimeter_worst, setPerimeter_worst] = useState("");
    const [area_worst, setArea_worst] = useState("");
    const [smoothness_worst, setSmoothness_worst] = useState("");
    const [compactness_worst, setCompactness_worst] = useState("");
    const [concavity_worst, setConcavity_worst] = useState("");
    const [concave_points_worst, setConcave_points_worst] = useState("");
    const [symmetry_worst, setSymmetry_worst] = useState("");
    const [fractal_dimension_worst, setFractal_dimension_worst] = useState("");
    const [answer,setanswer] = useState(null);

  const datagathered = {
    diagnosis,
    radius_mean,
    texture_mean,
    perimeter_mean,
    area_mean,
    smoothness_mean,
    compactness_mean,
    concavity_mean,
    concave_points_mean,
    texture_worst,
    perimeter_worst,
    area_worst,
    smoothness_worst,
    compactness_worst,
    concavity_worst,
    concave_points_worst,
    symmetry_worst,
    fractal_dimension_worst,

  };

  const handleSubmit = async () => {
    await fetch("http://127.0.0.1:5000/tumorTissueAnalysis", {
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
              <FormLabel component="legend">Diagnosis</FormLabel>
              <RadioGroup
                  row
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
              >
                <FormControlLabel value="M" control={<Radio />} label="Malignant" />
                <FormControlLabel value="B" control={<Radio />} label="Benign" />
              </RadioGroup>
            </FormControl>

            <TextField
                label="Radius Mean"
                type="number"
                value={radius_mean}
                onChange={(e) => setRadius_mean(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            
            <TextField
                label="Texture Mean"
                type="number"
                value={texture_mean}
                onChange={(e) => setTexture_mean(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            
            <TextField
                label="Perimeter mean"
                type="number"
                value={perimeter_mean}
                onChange={(e) => setPerimeter_mean(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            
            <TextField
                label="Area Mean"
                type="number"
                value={area_mean}
                onChange={(e) => setArea_mean(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            
            <TextField
                label="Smoothness Mean"
                type="number"
                value={smoothness_mean}
                onChange={(e) => setSmoothness_mean(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="Compactness Mean"
                type="number"
                value={compactness_mean}
                onChange={(e) => setCompactness_mean(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />


            <TextField
                label="Concavity Mean"
                type="number"
                value={concavity_mean}
                onChange={(e) => setConcavity_mean(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="Concave Points Mean"
                type="number"
                value={concave_points_mean}
                onChange={(e) => setConcave_points_mean(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />



            <TextField
                label="Texture Worst"
                type="number"
                value={texture_worst}
                onChange={(e) => setTexture_worst(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            

            <TextField
                label="Perimeter Worst"
                type="number"
                value={perimeter_worst}
                onChange={(e) => setPerimeter_worst(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="Area Worst"
                type="number"
                value={area_worst}
                onChange={(e) => setArea_worst(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="Smoothness Worst"
                type="number"
                value={smoothness_worst}
                onChange={(e) => setSmoothness_worst(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="compactness_worst"
                type="number"
                value={compactness_worst}
                onChange={(e) => setCompactness_worst(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="Concavity Worst"
                type="number"
                value={concavity_worst}
                onChange={(e) => setConcavity_worst(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="Concave points worst"
                type="number"
                value={concave_points_worst}
                onChange={(e) => setConcave_points_worst(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                label="Symmetry Worst"
                type="number"
                value={symmetry_worst}
                onChange={(e) => setSymmetry_worst(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />


            <TextField
                label="Fractal_dimension_worst"
                type="number"
                value={fractal_dimension_worst}
                onChange={(e) => setFractal_dimension_worst(e.target.value)}
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

export default TumorTissueAnalysis;
