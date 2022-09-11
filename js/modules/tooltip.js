export default function initTooltip() {}

const tollTips = document.querySelectorAll("[data-tooltip]");

tollTips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {
  const tooltipBox = criarTooltipBox(this);
  tooltipBox
}

function criarTooltipBox(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("toooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}
