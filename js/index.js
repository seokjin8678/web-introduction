const submitGuestBook = () => {
    const nicknameInput = document.getElementById('nickname');
    const movieCheckboxes = document.getElementsByName('movieCheckbox');
    const checkedCheckbox = Array.prototype.filter.call(movieCheckboxes,
        (movieCheckbox) => movieCheckbox.checked);
    alert(nicknameInput.value + '님, 저와 ' + checkedCheckbox.length + '개의 취향이 같으시네요!');
};
