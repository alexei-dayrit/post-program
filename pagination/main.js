const listItems = [
  'Post 1',
  'Post 2',
  'Post 3',
  'Post 4',
  'Post 5',
  'Post 6',
  'Post 7',
  'Post 8',
  'Post 9',
  'Post 10',
  'Post 11',
  'Post 12',
  'Post 13',
  'Post 14',
  'Post 15',
  'Post 16',
  'Post 17',
  'Post 18',
  'Post 19',
  'Post 20',
  'Post 21',
  'Post 22'
];

const listElement = document.querySelector('#list');
const paginationElement = document.querySelector('#pagination');

let currentPage = 1;
const postsPerPage = 5;

const displayPosts = (wrapper, list, postsPerPage, currentPage) => {
  currentPage--;
  wrapper.replaceChildren('');

  const start = postsPerPage * currentPage;
  const end = start + postsPerPage;
  const paginatedList = list.slice(start, end); // return posts 10-15

  for (let i = 0; i < paginatedList.length; i++) {
    const content = paginatedList[i];
    const postDivElem = document.createElement('div');
    postDivElem.classList.add('item');
    postDivElem.textContent = content;
    wrapper.append(postDivElem);
  }
};

const displayPagination = (listItems, wrapper, postsPerPage) => {
  const pageNumbers = Math.ceil(listItems.length / postsPerPage);
  for (let i = 1; i < pageNumbers + 1; i++) {
    const button = createPaginationButton(i, listItems);
    wrapper.append(button);
  }
};

const createPaginationButton = (page, posts) => {
  const button = document.createElement('button');
  button.textContent = page;

  if (currentPage === page) button.classList.add('active');

  button.addEventListener('click', () => {
    currentPage = page;
    displayPosts(listElement, listItems, postsPerPage, currentPage);

    const currentButton = document.querySelector('.pagenumbers button.active');
    currentButton.classList.remove('active');

    button.classList.add('active');
  });

  return button;
};

displayPosts(listElement, listItems, postsPerPage, currentPage);
displayPagination(listItems, paginationElement, postsPerPage);
