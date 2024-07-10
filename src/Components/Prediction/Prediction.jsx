import { useState } from "react";
import "./Prediction.css";

function Prediction() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictResult, setPredictresult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setErrorMessage("");
      setSelectedFile(null);
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/bmp"];
    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("⚠️ Error : Only pics allowed! (jpg, jpeg, bmp, png)");
      setSelectedFile(null);
    } else {
      setErrorMessage("");
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) return; // Check if an image is selected

    try {
      const formData = new FormData();
      formData.append("image", selectedFile); // Use selectedFile here

      const response = await fetch("http://127.0.0.1:8000/api/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      setPredictresult(data);
    } catch (error) {
      console.error("Error submitting prediction:", error);

      if (error.response) {
        const errorData = await error.response.json();
        setErrorMessage(errorData.detail || "API request failed");
      } else {
        setErrorMessage(error.message || "An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="container">
      <div className="uploader">
        <h1>Handwritten Digit Recognition</h1>
        <p>
          This project is based on Deep Mechine Learning Model. Upload only
          images containig Handwritten Digits for better Prediction.
        </p>

        <div className="file-drop-area">
          <input
            type="file"
            id="fileInput"
            accept=".jpg, .jpeg, .bmp, .png"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="fileInput">
            <span className="file-icon">
              {selectedFile ? (
                <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
              ) : (
                <i
                  className="fa fa-file-image-o"
                  style={{ fontSize: "100px" }}
                ></i> // Or a placeholder image icon
              )}
            </span>
            <p className="browse-text">Browse for your pic!</p>
          </label>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button
          onClick={handleSubmit}
          disabled={!selectedFile}
          className="submit-button"
        >
          Submit!
        </button>

        {predictResult && (
          <div className="result-box">
            <div className="result">
              <h2>Prediction Result: {predictResult.prediction}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Prediction;
