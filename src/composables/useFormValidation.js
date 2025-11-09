import { ref, reactive } from 'vue'

export function useFormValidation() {
  const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const errors = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const isSubmitting = ref(false)
  const submitSuccess = ref(false)
  const submitError = ref(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) {
          errors.name = 'Name is required'
          return false
        } else if (value.trim().length < 3) {
          errors.name = 'Name must be at least 3 characters'
          return false
        } else {
          errors.name = ''
          return true
        }

      case 'email':
        if (!value.trim()) {
          errors.email = 'Email is required'
          return false
        } else if (!validateEmail(value)) {
          errors.email = 'Please enter a valid email'
          return false
        } else {
          errors.email = ''
          return true
        }

      case 'subject':
        if (!value.trim()) {
          errors.subject = 'Subject is required'
          return false
        } else if (value.trim().length < 5) {
          errors.subject = 'Subject must be at least 5 characters'
          return false
        } else {
          errors.subject = ''
          return true
        }

      case 'message':
        if (!value.trim()) {
          errors.message = 'Message is required'
          return false
        } else if (value.trim().length < 10) {
          errors.message = 'Message must be at least 10 characters'
          return false
        } else {
          errors.message = ''
          return true
        }

      default:
        return true
    }
  }

  const validateForm = () => {
    const isNameValid = validateField('name', formData.name)
    const isEmailValid = validateField('email', formData.email)
    const isSubjectValid = validateField('subject', formData.subject)
    const isMessageValid = validateField('message', formData.message)

    return isNameValid && isEmailValid && isSubjectValid && isMessageValid
  }

  const handleSubmit = async () => {
    // Reset messages
    submitSuccess.value = false
    submitError.value = false

    // Validate form
    if (!validateForm()) {
      return
    }

    // Start submitting
    isSubmitting.value = true

    try {
      // Simulate API call (replace with actual API)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success
      submitSuccess.value = true

      // Reset form
      formData.name = ''
      formData.email = ''
      formData.subject = ''
      formData.message = ''

      // Hide success message after 5 seconds
      setTimeout(() => {
        submitSuccess.value = false
      }, 5000)

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // Error
      submitError.value = true

      // Hide error message after 5 seconds
      setTimeout(() => {
        submitError.value = false
      }, 5000)
    } finally {
      isSubmitting.value = false
    }
  }

  const resetForm = () => {
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
    errors.name = ''
    errors.email = ''
    errors.subject = ''
    errors.message = ''
    submitSuccess.value = false
    submitError.value = false
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    validateField,
    handleSubmit,
    resetForm
  }
}
