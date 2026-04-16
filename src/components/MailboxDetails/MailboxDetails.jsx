import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId),
  );

  if (!selectedBox) {
    return <h1>Mailbox Not Found!</h1>;
  }

  return (
    <section>
      <h1>Details</h1>
      <p>Box Number: {selectedBox._id}</p>
      <p>Boxholder: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </section>
  );
};

export default MailboxDetails;