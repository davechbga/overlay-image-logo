import React, { useState } from "react";
import PropTypes from "prop-types";

function Form({ onOverlay }) {
  const [formState, setFormState] = useState({
    backgroundImage: null,
    vectorImage: null,
    overlayX: 50,
    overlayY: 50,
    overlayWidth: 150,
    overlayHeight: 150,
    overlayTransparency: 100,
    filterType: "none",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOverlay(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <div className="form-group mb-3">
        <label htmlFor="backgroundImage">Upload Background Image</label>
        <input
          type="file"
          id="backgroundImage"
          name="backgroundImage"
          accept="image/*"
          className="form-control"
          onChange={handleChange}
        />
        {formState.backgroundImage && (
          <img
            src={URL.createObjectURL(formState.backgroundImage)}
            alt="Background Preview"
            width="100"
            height="100"
            className="img-fluid mt-2"
          />
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="vectorImage">Upload Overlay Image</label>
        <input
          type="file"
          id="vectorImage"
          name="vectorImage"
          accept="image/png, image/svg+xml"
          className="form-control"
          onChange={handleChange}
        />
        {formState.vectorImage && (
          <img
            src={URL.createObjectURL(formState.vectorImage)}
            alt="Overlay Preview"
            width="100"
            height="100"
            className="img-fluid mt-2"
          />
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="overlayX">Overlay Position X</label>
        <input
          type="number"
          id="overlayX"
          name="overlayX"
          value={formState.overlayX}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="overlayY">Overlay Position Y</label>
        <input
          type="number"
          id="overlayY"
          name="overlayY"
          value={formState.overlayY}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="overlayWidth">Overlay Width</label>
        <input
          type="number"
          id="overlayWidth"
          name="overlayWidth"
          value={formState.overlayWidth}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="overlayHeight">Overlay Height</label>
        <input
          type="number"
          id="overlayHeight"
          name="overlayHeight"
          value={formState.overlayHeight}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="overlayTransparency">Transparency (0-100)</label>
        <input
          type="range"
          id="overlayTransparency"
          name="overlayTransparency"
          min="0"
          max="100"
          value={formState.overlayTransparency}
          className="form-range"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="filterType">Filter</label>
        <select
          id="filterType"
          name="filterType"
          value={formState.filterType}
          className="form-select"
          onChange={handleChange}
        >
          <option value="none">None</option>
          <option value="grayscale">Grayscale</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Apply Overlay
      </button>
    </form>
  );
}

Form.propTypes = {
  onOverlay: PropTypes.func.isRequired,
};

export default Form;
