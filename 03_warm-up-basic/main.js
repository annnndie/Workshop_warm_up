// TO DO
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.content').addEventListener('click', (e) => {
    console.log(e);
  })

  document.querySelector('#button').addEventListener('click', (e) => {
    console.log(e);
    /*
    nextElementSibling
    previousElementSibling
    parentNode
    children
    firstElementChild
    lastElementChild
    */

  /* 題目1: 把 contene 加上 .pink 的 class  */
    e.target.nextElementSibling.classList.toggle('pink')

  /* 題目2: 把「內容1」加上 .blue class  */
    e.target.nextElementSibling.firstElementChild.classList.toggle('blue')

  /* 題目3: 把「內容2」的文字內容改變 */
    e.target.nextElementSibling.lastElementChild.innerText = 'Hii'

  /* 題目4 : 把「標題」的文字顏色改變 */
    e.target.parentNode.parentNode.previousElementSibling.style.color = 'red'
  })
})