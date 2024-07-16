document.addEventListener('DOMContentLoaded', () => {
    const musicForm = document.getElementById('music-form');
    const musicList = document.getElementById('music-list');

    musicForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const musicTitle = document.getElementById('music-title').value;
        const artistName = document.getElementById('artist-name').value;

        if (musicTitle && artistName) {
            addMusicToList(musicTitle, artistName);
            musicForm.reset();
        }
    });

    function addMusicToList(title, artist) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${title} by ${artist}</span>
        <button class="delete-button">Delete</button>
      `;

        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            musicList.removeChild(listItem);
        });

        musicList.appendChild(listItem);
    }
});
