document.addEventListener("DOMContentLoaded", () => {

    function getChapterList() {
        return JSON.parse(localStorage.getItem('chapters'));
    }

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }

    let chaptersArray = getChapterList() || [];

    function setChapterList() {
        localStorage.setItem('chapters', JSON.stringify(chaptersArray));
    }

    const input = document.getElementById('favchap');
    const button = document.getElementById('addBtn');
    const list = document.getElementById('list');

    function displayList(item) {
        const li = document.createElement('li');
        li.textContent = item + ' ';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '\u274C';
        deleteButton.classList.add('delete');

        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }

    chaptersArray.forEach(item => {
        displayList(item);
    });

    button.addEventListener('click', () => {
        if (input.value !== '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        }
    });
});