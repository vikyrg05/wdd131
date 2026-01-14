document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('favchap');
    const button = document.getElementById('addBtn');
    const list = document.getElementById('list');

    button.addEventListener('click', () => {
        console.log("Click detected!");
        const value = input.value.trim();
        if (value === '') {
            input.focus();
            return;
        }

        const li = document.createElement('li');
        li.textContent = value + ' ';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '\u274C';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();
    });
});