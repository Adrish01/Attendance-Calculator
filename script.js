document.getElementById('calculateBtn').addEventListener('click', function() {
    const requiredAttendance = parseFloat(document.getElementById('requiredAttendance').value);
    const totalClasses = parseFloat(document.getElementById('totalClasses').value);
    const attendedClasses = parseFloat(document.getElementById('attendedClasses').value);

    if (isNaN(requiredAttendance) || isNaN(totalClasses) || isNaN(attendedClasses) || totalClasses === 0) {
        alert("Please fill in all fields with valid numbers!");
        return;
    }

    // Calculate current attendance percentage
    const currentAttendance = (attendedClasses / totalClasses) * 100;
    document.getElementById('currentAttendance').value = currentAttendance.toFixed(2) + '%';

    // Calculate how many classes needed to reach required attendance
    let neededClasses = (requiredAttendance * totalClasses - attendedClasses * 100) / (100 - requiredAttendance);

    if (neededClasses < 0) {
        neededClasses = 0;  // Student already has the required attendance
    }

    document.getElementById('neededClasses').value = neededClasses > 0 ? Math.ceil(neededClasses) + ' more classes' : 'None';
});
