export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const itemCount = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const packedItemsPercentage =
    itemCount !== 0 ? Math.round((packedItems * 100) / itemCount) : 0;

  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? "You got everything Ready to go ✈️"
          : `💼 You have ${itemCount} items on your list, and you already packed ${Number(
              packedItems
            )} (${packedItemsPercentage}%)`}
      </em>
    </footer>
  );
}
