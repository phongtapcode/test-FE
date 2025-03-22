document.querySelectorAll('.list-color').forEach(group => {
    const items = group.querySelectorAll('.list-color__item');
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        // Bỏ class select trong chính group đó
        items.forEach(el => el.classList.remove('list-color__item--select'));
  
        // Thêm class vào item vừa click
        item.classList.add('list-color__item--select');
      });
    });
  });

  const categoryItems = document.querySelectorAll('.category__item');

categoryItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // Chặn nhảy link nếu cần

    // Bỏ class select ở tất cả item
    categoryItems.forEach(el => el.classList.remove('category__item--select'));

    // Thêm class vào item được click
    item.classList.add('category__item--select');
  });
});