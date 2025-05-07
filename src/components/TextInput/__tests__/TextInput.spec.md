# TextInput Component Test Cases Documentation

This document describes the test cases for the TextInput component, which is a flexible input component that supports various configurations including text fields and textareas with labels, error messages, and icons.

## Test Cases

### 1. Rendering with a label

**Description:** Verifies that the TextInput component correctly renders with a label when the label prop is provided.  
**Expected Behavior:** Both the label and input elements should be present in the document.

### 2. Rendering as textarea

**Description:** Tests that the TextInput component renders as a textarea element when the `as="textarea"` prop is specified.  
**Expected Behavior:** The rendered element should be a TEXTAREA HTML element rather than an INPUT element.

### 3. Showing error message

**Description:** Validates that the TextInput component displays an error message when the errorMessage prop is provided.  
**Expected Behavior:** The error message should be rendered and accessible via the "alert" role for screen readers.

### 4. Rendering with right icon

**Description:** Checks that the TextInput component correctly renders with a right icon when the rightIcon prop is provided.  
**Expected Behavior:** The icon container should be present in the document.

### 5. Forwarding additional input props

**Description:** Ensures that additional HTML input props (like disabled, maxLength, etc.) are correctly forwarded to the underlying input element.  
**Expected Behavior:** The input should have the specified attributes like disabled state and maxLength restrictions.

### 6. Handling user input

**Description:** Tests that the TextInput component correctly handles user input events.  
**Expected Behavior:** When text is entered into the input, the input's value should update accordingly.

### 7. Setting aria-describedby for accessibility

**Description:** Verifies that when an error message exists, the input is properly linked to it using aria-describedby for accessibility.  
**Expected Behavior:** The input should have an aria-describedby attribute that references the error message element's ID.

### 8. Applying custom error message color

**Description:** Tests that the TextInput component applies custom color styling to error messages when specified.  
**Expected Behavior:** The error message element should have the specified CSS class for custom text color.

## Testing Approach

These tests use React Testing Library to focus on testing the component as users would interact with it. This approach prioritizes:

1. Accessibility by testing ARIA attributes and screen reader compatibility
2. User interaction patterns by simulating real user events
3. Component behavior rather than implementation details

By thoroughly testing these aspects, we ensure the TextInput component remains robust across different configurations and use cases.
