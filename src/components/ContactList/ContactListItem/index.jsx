export default function ContactListItem({ contact }) {
  return (
    <div>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
    </div>
  );
}
