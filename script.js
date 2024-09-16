function showOds(odsNumber) {
    const allOds = document.querySelectorAll('.ods-content');
    allOds.forEach(function(ods) {
        ods.classList.remove('active');
        ods.style.display = 'none';
    });
    
    const selectedOds = document.getElementById(`ods${odsNumber}`);
    selectedOds.style.display = 'block';
    setTimeout(() => {
        selectedOds.classList.add('active');
    }, 100); // Pequeno atraso para a transição suave
}
