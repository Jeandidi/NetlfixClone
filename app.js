const accordion = document.querySelectorAll('.faq-container');

accordion.forEach(element => {
  element.addEventListener('click', () => {
    if (element.classList.contains('active')) {
      element.classList.remove('active')
    } else {
      const elementsOpen = document.querySelectorAll('.active');
      elementsOpen.forEach(singleOpenElement => {
        singleOpenElement.classList.remove('active');
      })
      element.classList.add('active');
    }
  });
});

 