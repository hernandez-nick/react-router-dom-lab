import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ mailboxes, addBox }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addBox({
      _id: mailboxes.length + 1,
      boxOwner: formData.boxOwner,
      boxSize: formData.boxSize,
    });

    navigate("/mailboxes");
  };

  return (
    <section>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          id="boxOwner"
          name="boxOwner"
          type="text"
          value={formData.boxOwner}
          onChange={handleChange}
          required
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default MailboxForm;
