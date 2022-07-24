export default (target, { currentFilter }) => {
  const filters = target.cloneNode(true);

  Array.from(filters.querySelectorAll("li a")).forEach((el) => {
    if (el.innerText === currentFilter) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });

  return filters;
};
