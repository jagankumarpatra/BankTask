const packages = [];

function addPackage() {
    const holidayName = document.getElementById('holidayName').value;
    const duration = document.getElementById('duration').value;
    const destination = document.getElementById('destination').value;
    const location = document.getElementById('location').value;
    const amenities = document.getElementById('amenities').value;

    const newPackage = {
        holidayName,
        duration,
        destination,
        location,
        amenities
    };

    packages.push(newPackage);
    displayPackages();
}

function displayPackages() {
    const packagesDiv = document.getElementById('packages');
    packagesDiv.innerHTML = '';

    packages.forEach(package => {
        const packageDiv = document.createElement('div');
        packageDiv.classList.add('package');
        packageDiv.innerHTML = `
            <h3>${package.holidayName}</h3>
            <p><strong>Duration:</strong> ${package.duration} nights</p>
            <p><strong>Destination:</strong> ${package.destination}</p>
            <p><strong>Location:</strong> ${package.location}</p>
            <p><strong>Amenities:</strong></p>
            <p>${package.amenities}</p>
            <button onclick="editPackage('${package.holidayName}')">Edit</button>
            <button onclick="deletePackage('${package.holidayName}')">Delete</button>
        `;
        packagesDiv.appendChild(packageDiv);
    });
}

function editPackage(holidayName) {
    // Implement edit functionality
    alert(`Edit ${holidayName}`);
}

function deletePackage(holidayName) {
    const index = packages.findIndex(package => package.holidayName === holidayName);
    if (index !== -1) {
        packages.splice(index, 1);
        displayPackages();
    }
}
