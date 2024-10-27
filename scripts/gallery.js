document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('imageModal'); // Ensure this matches your modal's ID
    const body = document.body;

    let index = 0;
    let currentImages = [];
    let imageSets = {};

    // Fetch the JSON file
    fetch('../images/images.json')
        .then(response => response.json())
        .then(data => {
            console.log('Loaded image sets:', data.imageSets);
            imageSets = data.imageSets; // Store the image sets from the JSON
        })
        .catch(error => console.error('Error loading JSON:', error));

        function openModal(setKey) {
            index = 0;
            
            console.log(`Opening modal for set: ${setKey}`); // Log the set key
            if (!imageSets[setKey]) {
                console.error(`No images found for set: ${setKey}`);
                return; // Exit if the set doesn't exist
            }
        
            body.classList.add('no-scroll');
            currentImages = imageSets[setKey]; // Get the specific image set
            const modalImage = document.getElementById('modalImage');
            
            modalImage.src = currentImages[index];
            modalImage.onerror = () => {
                console.error('Image failed to load:', index, currentImages);
            };
            
            modal.style.display = 'flex';
        }

    function closeModal() {
        body.classList.remove('no-scroll');
        modal.style.display = 'none';
    }

    function changeImage(direction) {
        index += direction;
        if (index < 0) {
            index = currentImages.length - 1; // Loop to last image
        } else if (index >= currentImages.length) {
            index = 0; // Loop to first image
        }
        document.getElementById('modalImage').src = currentImages[index];
    }

    // Optional: Handle keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Attach event listeners for specific images using data attributes
    document.querySelectorAll('.gallery-item').forEach((item) => {
        item.addEventListener('click', () => {
            const setKey = item.getAttribute('data-set'); // Get the set from a data attribute
            const index = Array.from(item.parentNode.children).indexOf(item); // Get the index of the clicked item
            openModal(setKey, index);
        });
    });

    document.querySelector('.close').addEventListener('click', closeModal);

    window.changeImage = changeImage;
    window.closeModal = closeModal;
});
