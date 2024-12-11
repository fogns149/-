export const StudyList = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return;
  }
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} item={item}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
