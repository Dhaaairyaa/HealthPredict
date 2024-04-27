import React from "react";
import { useState } from "react";
import "../App.css";
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
      body: JSON.stringify(datagathered), // Your JSON data here
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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        prevent
      >
        <fieldset >
          <legend>Gender</legend>
          <div>
            <input
              type="radio"
              id="Male"
              name="gender"
              value={gender}
              checked={gender === "1"}
              onChange={() => {
                setSelectedGender("1");

              }}
            />
            <label for="Male">Male</label>

            <input
              type="radio"
              id="Female"
              name="gender"
              value={gender}
              checked={gender === "0"}
              onChange={() => {
                setSelectedGender("0");
              }}
            />
            <label for="Female">Female</label>
          </div>
        </fieldset>

        <div>
          <label for="age">Age: </label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-[250px] h-[30px] mt-5"
          ></input>
        </div>

        <fieldset className="mt-5">
          <legend>Hypertension</legend>
          <div>
            <input
              type="radio"
              id="Yes"
              name="Hypertension"
              value={Hypertension}
              checked={Hypertension === 1}
              onChange={() => {
                setHypertension(1);
              }}
            />
            <label for="Yes">Yes</label>

            <input
              type="radio"
              id="No"
              name="Hypertension"
              value={Hypertension}
              checked={Hypertension === 0}
              onChange={() => {
                setHypertension(0);
              }}
            />
            <label for="No">No</label>
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend>Heart Disease</legend>
          <div>
            <input
              type="radio"
              id="Yes_HeartDisease"
              name="HeartDisease"
              value={Heart_disease}
              checked={Heart_disease === 1}
              onChange={() => {
                setHeart_disease(1);
              }}
            />
            <label for="Yes_HeartDisease">Yes</label>

            <input
              type="radio"
              id="No_HeartDisease"
              name="HeartDisease"
              value={Heart_disease}
              checked={Heart_disease === 0}
              onChange={() => {
                setHeart_disease(0);
              }}
            />
            <label for="No_HeartDisease">No</label>
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend>Ever Married</legend>
          <div>
            <input
              type="radio"
              id="Yes_married"
              name="EverMarried"
              value={ever_married}
              checked={ever_married === 1}
              onChange={() => {
                setever_married(1);
              }}
            />
            <label for="Yes_married">Yes</label>

            <input
              type="radio"
              id="No_married"
              name="EverMarried"
              value={ever_married}
              checked={ever_married === 0}
              onChange={() => {
                setever_married(0);
              }}
            />
            <label for="No_married">No</label>
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend>Work Type</legend>
          <div>
            <input
              type="radio"
              id="Private"
              name="JOB_TYPE"
              value="Private"
              checked={work_type === "Private"}
              onChange={() => {
                setWorkType("Private");
              }}
            />
            <label for="Private">Private</label>

            <input
              type="radio"
              id="Self-employed"
              name="JOB_TYPE"
              value="Self-employed"
              checked={work_type === "Self-employed"}
              onChange={() => {
                setWorkType("Self-employed");
              }}
            />
            <label for="Self-employed">Self-Employed</label>

            <input
              type="radio"
              id="Govt_job"
              name="JOB_TYPE"
              value="Govt_job"
              checked={work_type === "Govt_job"}
              onChange={() => {
                setWorkType("Govt_job");
              }}
            />
            <label for="Govt_job">Govt_job</label>
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend>Smoking Status</legend>
          <div>
            <input
              type="radio"
              id="formerly_smoked"
              name="Smoking_Status"
              value="formerly smoked"
              checked={everSmoked === "formerly smoked"}
              onChange={() => {
                setEverSmoked("formerly smoked");
              }}
            />
            <label for="formerly_smoked">Formerly Smoked</label>

            <input
              type="radio"
              id="never_smoked"
              name="Smoking_Status"
              value="never smoked"
              checked={everSmoked === "never smoked"}
              onChange={() => {
                setEverSmoked("never smoked");
              }}
            />
            <label for="never_smoked">Never Smoked</label>

            <input
              type="radio"
              id="Unknown"
              name="Smoking_Status"
              value="Unknown"
              checked={everSmoked === "Unknown"}
              onChange={() => {
                setEverSmoked("Unknown");
              }}
            />
            <label for="Unknown">Unknown</label>
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend>Residence Type</legend>
          <div>
            <input
              type="radio"
              id="Urban"
              name="Residence_Type"
              value="Urban"
              checked={Residence_type === "Urban"}
              onChange={() => {
                setResidence_type("Urban");
              }}
            />
            <label for="Urban">Urban</label>

            <input
              type="radio"
              id="Rural"
              name="Residence_Type"
              value="Rural"
              checked={Residence_type === "Rural"}
              onChange={() => {
                setResidence_type("Rural");
              }}
            />
            <label for="Rural">Rural</label>
          </div>
        </fieldset>

        <label for="Avg_Glucose">Avgerage Glucose Level</label>
        <input
          type="Number"
          className="w-[250px]"
          id="Avg_Glucose"
          value={avg_glucose_level}
          onChange={(e) => setavg_glucose_level(e.target.value)}
        ></input>
        <br></br>

        <label for="BMI">BMI LEVEL</label>
        <input
          type="Number"
          className="w-[250px] mt-10"
          id="BMI"
          value={bmi}
          onChange={(e) => setAvgBmi(e.target.value)}
        ></input>

        <div className="w-[90px] h-[30px] bg-white mt-12 text-center">
          <input type="submit"></input>
        </div>
      </form>

      {answer === 0 && (
        <div className="w-[200px] h-[40px] bg-green-500 mt-[20px] mr-[200px]">You are safe</div>
      )}
      {answer === 1 && (
        <div className="w-[200px] h-[40px] bg-red">You are at risk</div>
      )}
    </div>
  );
};

export default Strokeform;
