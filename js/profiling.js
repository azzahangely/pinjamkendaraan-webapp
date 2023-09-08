document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabContent = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tabContent.forEach((content) => content.classList.remove("active"));
      tab.classList.add("active");
      tabContent[index].classList.add("active");
    });
  });

  
});

//Script for upload image
const profileImageInput = document.getElementById('profileImage');
      const previewImage = document.getElementById('preview');
      const uploadButton = document.getElementById('uploadImage');
      const cancelButton = document.getElementById('cancelUpload');

      profileImageInput.addEventListener('change', () => {
        const file = profileImageInput.files[0];
        if (file) {
          previewImage.src = URL.createObjectURL(file);
          uploadButton.removeAttribute('disabled');
        }
      });

      cancelButton.addEventListener('click', () => {
        profileImageInput.value = '';
        previewImage.src = '';
        uploadButton.setAttribute('disabled', 'true');
      });

      
      
      const toggleNewPassword = document.getElementById("toggleNewPassword");
      const newPasswordInput = document.getElementById("newPassword");
  
      toggleNewPassword.addEventListener("click", function () {
          if (newPasswordInput.type === "password") {
              newPasswordInput.type = "text";
          } else {
              newPasswordInput.type = "password";
          }
      });



// profile.js
$(document).ready(function() {
  // Enable/disable the "Upload" button based on file selection
  $('#profileImage').on('change', function() {
    if ($(this).val()) {
      $('#uploadImage').removeAttr('disabled');
    } else {
      $('#uploadImage').attr('disabled', 'disabled');
    }
  });

  // Clear the file input and disable the "Upload" button when modal is closed
  $('#editImageModal').on('hidden.bs.modal', function() {
    $('#profileImage').val('');
    $('#uploadImage').attr('disabled', 'disabled');
  });
});


