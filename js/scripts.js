function toggleDescription(courseId) {
    var descriptions = document.getElementsByClassName('course-description');
    var courseDescription = document.getElementById(courseId);
    var isCurrentlyDisplayed = courseDescription.style.display === 'block';

    // Hide all descriptions
    for (var i = 0; i < descriptions.le