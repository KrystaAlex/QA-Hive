import { useState } from "react";
import { supabase } from "../supabaseClient";
//need to add expected results and actual results
export default function CreateBugForm() {
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

 const handleSubmit = async (e) => {
  e.preventDefault();

    const { title, description, type, severity, tags, screenshot } = form;
    let screenshot_url = null;
    let fileName = null;

  if (screenshot) {
    fileName = `${Date.now()}_${screenshot.name}`;
    //upload
    const { error: uploadError } = await supabase.storage
      .from("screenshots")
      .upload(fileName, form.screenshot);

    if (uploadError) {
      console.error("Upload failed:", uploadError);
      return;
    }
    //get public URL
    const { publicURL, error: urlError } = supabase.storage
      .from("screenshots")
      .getPublicUrl(fileName);

    if (urlError) {
      console.error("Error getting public URL:", urlError);
      return;
    }
    //assign to variable
    screenshot_url = publicURL; 
  }



  const { data, error } = await supabase.from("posts").insert([
    {
      title,
      description,
      type,
      severity,
      tags,
      screenshot_url,
      created_at: new Date().toISOString()
    },
  ]);

  if (error) {
    console.error("Insert error:", error);
  } else {
    console.log("Bug Submitted:", data);
  }

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
      <h2>Submit a New Bug Post</h2>

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
