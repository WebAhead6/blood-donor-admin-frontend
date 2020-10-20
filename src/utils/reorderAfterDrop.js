const reorderAfterDrap = (arr, sourceIndex, destinationIndex) => {
  // the only one that is required{ destination, source, draggableId }
  if (destinationIndex !== undefined) return;
  const items = Array.from(arr);

  const [reorderdItems] = items.splice(sourceIndex, 1);
  items.splice(destinationIndex, 0, reorderdItems);
  return items;
};

export default reorderAfterDrap;
