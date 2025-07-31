import { useState } from "react";

export default function CreateBugForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: '',
    severity: '',
    screenshot: null, 
    tags: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm(prev => ({ ...prev, screenshot: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBug = {
      ...form,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    if (onSubmit) {
      onSubmit(newBug);
    }

    console.log('Bug Submitted:', newBug);

    setForm({
      title: '',
      description: '',
      type: '',
      severity: '',
      screenshot: null,
      tags: ''
    });
  };

  const handleCancel = () => {
    setForm({
      title: '',
      description: '',
      type: '',
      severity: '',
      screenshot: null,
      tags: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit a New Bug</h2>

      <label>
        Title:
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Description:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Bug Type:
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Functional">Functional</option>
          <option value="UI">UI</option>
          <option value="Visual">Visual</option>
        </select>
      </label>
      <br />

      <label>
        Severity:
        <select
          name="severity"
          value={form.severity}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Minor">Minor</option>
          <option value="Major">Major</option>
          <option value="Critical">Critical</option>
        </select>
      </label>
      <br />

      <label>
        Tags (comma-separated):
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Screenshot:
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>

      {form.screenshot && (
        <div>
          <p>Preview:</p>
          <img
            src={URL.createObjectURL(form.screenshot)}
            alt="Screenshot Preview"
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </div>
      )}
      <br />

      <button type="submit">Create Post</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
}
