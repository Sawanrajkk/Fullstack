// API base URL
const API_BASE_URL = '/api/users';

// Fetch and display users using API
async function loadUsersFromAPI() {
    try {
        const response = await fetch(API_BASE_URL);
        const users = await response.json();
        console.log('Users loaded from API:', users);
        return users;
    } catch (error) {
        console.error('Error loading users:', error);
        return [];
    }
}

// Create user via API
async function createUserAPI(userData) {
    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        if (response.ok) {
            const user = await response.json();
            console.log('User created:', user);
            return user;
        } else {
            throw new Error('Failed to create user');
        }
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Delete user via API
async function deleteUserAPI(userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${userId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            console.log('User deleted successfully');
            return true;
        } else {
            throw new Error('Failed to delete user');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

// Form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || formData.phone.trim().length < 10) {
        errors.push('Phone number must be at least 10 characters long');
    }
    
    return errors;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Full Stack Website loaded successfully');
    
    // Add confirmation for delete buttons
    const deleteButtons = document.querySelectorAll('.btn-danger');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to delete this user?')) {
                e.preventDefault();
            }
        });
    });
});