document.addEventListener('DOMContentLoaded', function() {
    const allData= document.getElementById('allData');
    const deleteData= document.getElementById('deleteData');
    const updateData= document.getElementById('updateData');
    const createData= document.getElementById('createData');

    allData.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = './pages/allData.html';
    });
    deleteData.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = './pages/deleteData.html';
    });
    updateData.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = './pages/updateData.html';
    });
    createData.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = './pages/createData.html';
    });
});