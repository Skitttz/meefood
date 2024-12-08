
// TODO: When a better solution is found to fix the pointer-events: none issue
export const enablePointerEvents = (elements: HTMLElement | HTMLElement[]) => {
  const elementsArray = Array.isArray(elements) ? elements : [elements];

  elementsArray.forEach((element) => {
    element.style.pointerEvents = "auto";
  });
};