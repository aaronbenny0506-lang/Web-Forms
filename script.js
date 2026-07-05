document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the default form submission browser behavior
    event.preventDefault();

    // Clear previous error messages/styles
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('invalid'));

    let isValid = true;

    // 1. Validate Name
    const fullName = document.getElementById('fullName');
    if (!fullName.value.trim() || fullName.value.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
        fullName.classList.add('invalid');
        isValid = false;
    }

    // 2. Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        email.classList.add('invalid');
        isValid = false;
    }

    // 3. Validate Password
    const password = document.getElementById('password');
    if (password.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        password.classList.add('invalid');
        isValid = false;
    }

    // 4. Validate Date of Birth
    const dob = document.getElementById('dob');
    if (!dob.value) {
        document.getElementById('dobError').textContent = 'Please select your date of birth.';
        dob.classList.add('invalid');
        isValid = false;
    }

    // Final Action if everything is valid
    if (isValid) {
        const successBox = document.getElementById('successMessage');
        successBox.classList.add('success-visible');
        
        // Reset the form values
        document.getElementById('registrationForm').reset();

        // Hide the success banner after 4 seconds
        setTimeout(() => {
            successBox.classList.remove('success-visible');
        }, 4000);
    }
});