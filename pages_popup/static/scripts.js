document.addEventListener('DOMContentLoaded', function() {
    const farmGrid = document.getElementById('farm-grid').getElementsByTagName('tbody')[0];
    const infoDisplay = document.getElementById('info-text');
    const modal = document.getElementById("info-modal");
    const closeBtn = document.querySelector(".close");

    // Sample data for each cell
    const cellData = Array.from({ length: 25 }, (_, index) => ({
        temperature: (index + 1) * 2 + '°C',
        moisture: (index + 1) * 3 + '%',
        seedKind: `Seed ${index + 1}`
    }));

    // Create the grid
    for (let i = 0; i < 5; i++) {
        const row = farmGrid.insertRow();
        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell();
            cell.textContent = `Cell ${i * 5 + j + 1}`;
            cell.dataset.index = i * 5 + j; // Store the index to access data
            cell.addEventListener('click', function() {
                const index = this.dataset.index;
                const data = cellData[index];
                // Update modal content
                infoDisplay.textContent = `Temperature: ${data.temperature}, Moisture: ${data.moisture}, Seed Kind: ${data.seedKind}`;

                // Get the position of the clicked cell
                const rect = cell.getBoundingClientRect();
                
                // Calculate position to center the modal on the clicked cell
                const modalX = rect.left + (rect.width / 2); // Modal width is 100px, so -50px to center
                const modalY = rect.top + (rect.height / 2); // Modal height is 100px, so -50px to center

                // Set modal position and make it visible
                modal.style.left = `${modalX}px`;
                modal.style.top = `${modalY}px`;
                modal.style.display = "block";  


            });
        }
    }

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
