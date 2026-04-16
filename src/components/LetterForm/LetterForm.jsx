import { useState } from "react";
import { useNavigate } from "react-router";

const LetterForm = ({ mailboxes, addLetter }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sender: "",
    recipient: "",
    content: "",
    mailboxId: mailboxes.length > 0 ? mailboxes[0]._id : "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addLetter({
      _id: Date.now(),
      ...formData,
      mailboxId: Number(formData.mailboxId),
    });

    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <section>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox.name}
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient</label>
        <input
          id="recipient"
          name="recipient"
          placeholder="Recipient name"
          value={formData.recipient}
          onChange={handleChange}
        />
        <label htmlFor="content">Message</label>
        <textarea
          id="content"
          name="content"
          placeholder="Message"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default LetterForm;
