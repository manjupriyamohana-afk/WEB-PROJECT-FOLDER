import { useState } from "react";
import "./Details.css";

function Details() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    aadhaar: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    department: "",
    year: "",
    college: "",
    password: "",
    confirm: "",
    permanent: "",
    current: "",
    city: "",
    state: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone))
      return setMessage("Enter valid 10-digit phone number");

    if (!/^\d{12}$/.test(form.aadhaar))
      return setMessage("Enter valid 12-digit Aadhaar number");

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return setMessage("Enter valid email");

    if (form.password.length < 6)
      return setMessage("Password must contain 6 characters");

    if (form.password !== form.confirm)
      return setMessage("Passwords do not match");

    setMessage("Registration Successful!");
  };

  const clearForm = () => {
    setForm({
      name: "",
      username: "",
      aadhaar: "",
      phone: "",
      email: "",
      dob: "",
      gender: "",
      department: "",
      year: "",
      college: "",
      password: "",
      confirm: "",
      permanent: "",
      current: "",
      city: "",
      state: ""
    });
    setMessage("");
  };

  const copyAddress = (e) => {
    if (e.target.checked) {
      setForm({ ...form, current: form.permanent });
    }
  };

  const photoCheck = (e) => {
    const file = e.target.files[0];

    if (file && file.size > 2 * 1024 * 1024) {
      setMessage("Photo must be less than 2 MB");
      e.target.value = "";
    } else {
      setMessage("");
    }
  };

  return (
    <div className="container">
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Student Name"
          value={form.name} onChange={handleChange} required />

        <input name="username" placeholder="Username"
          value={form.username} onChange={handleChange} required />

        <input name="aadhaar" placeholder="Aadhaar Number"
          value={form.aadhaar} onChange={handleChange} required />

        <input name="phone" placeholder="Phone Number"
          value={form.phone} onChange={handleChange} required />

        <input name="email" type="email" placeholder="Email"
          value={form.email} onChange={handleChange} required />

        <input name="dob" type="date"
          value={form.dob} onChange={handleChange} required />

        <select name="gender" value={form.gender}
          onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input name="department" placeholder="Department"
          value={form.department} onChange={handleChange} required />

        <input name="year" placeholder="Year"
          value={form.year} onChange={handleChange} required />

        <input name="college" placeholder="College Name"
          value={form.college} onChange={handleChange} required />

        <input name="password" type="password" placeholder="Password"
          value={form.password} onChange={handleChange} required />

        <input name="confirm" type="password"
          placeholder="Confirm Password"
          value={form.confirm} onChange={handleChange} required />

        <textarea name="permanent" placeholder="Permanent Address"
          value={form.permanent} onChange={handleChange} required />

        <textarea name="current" placeholder="Current Address"
          value={form.current} onChange={handleChange} required />

        <label className="check">
          <input type="checkbox" onChange={copyAddress} />
          Same as Permanent Address
        </label>

        <input name="city" placeholder="City"
          value={form.city} onChange={handleChange} required />

        <input name="state" placeholder="State"
          value={form.state} onChange={handleChange} required />

        <label>Upload Photo (Maximum 2 MB)</label>

        <input type="file" accept="image/*"
          onChange={photoCheck} />

        <p className="message">{message}</p>

        <button type="submit">Submit</button>
        <button type="button" onClick={clearForm}>Clear</button>

      </form>
    </div>
  );
}

export default Details;