import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <section>
      <h1>Mailbox List</h1>
      {mailboxes.length === 0 ? (
        <p>No mailboxes yet.</p>
      ) : (
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>Mailbox #{mailbox._id}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MailboxList;