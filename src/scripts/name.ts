const els = document.querySelectorAll('.switching-name');
const original = 'xxxxxx';
let reverse = false;
function animate() {
  const target = reverse ? original : 'dundun';
  reverse = !reverse;
  [...target].forEach((char, i) => {
    setTimeout(() => {
      els.forEach(el => {
        const curr = el.textContent;
        el.textContent = curr.slice(0, i) + char + curr.slice(i + 1);
      });
    }, i * 100);
  });
}
setInterval(animate, 3200);