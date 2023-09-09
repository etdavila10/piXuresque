let mathList = document.getElementById('main-math').parentNode;

mathList.childNodes.forEach((child) => {
  if (child.nodeType === Node.TEXT_NODE && child.textContent.includes(';')) {
    child.remove();
  }
});
