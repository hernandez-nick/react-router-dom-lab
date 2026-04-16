import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (box) => box._id === Number(mailboxId),
  );
  const selectedLetters = (props.letters || []).filter(
    (letter) => letter.mailboxId === Number(mailboxId),
  );

  if (!selectedBox) {
    return <h1>Mailbox Not Found!</h1>;
  }

  return (
    <section>
      <h1>Mailbox Details</h1>
      <p>Box Number: {selectedBox._id}</p>
      <p>Box Owner: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>

      <h2>Letters in this Mailbox:</h2>
      {selectedLetters.length === 0 ? (
        <p>No letters in this mailbox.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter) => (
            <li key={letter._id}>
              <p>Letter #{letter._id}</p>
              <p>Sender: {letter.sender}</p>
              <p>Recipient: {letter.recipient}</p>
              <p>Content: {letter.content}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MailboxDetails;
