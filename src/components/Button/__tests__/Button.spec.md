# Button Component Test Cases Documentation

This document describes the test cases for the Button component, which is a versatile button component that supports various configurations including different variants, sizes, states, and can render as either a button or an anchor element.

## Test Cases

### 1. Rendering with title

**Description:** Verifies that the Button component correctly renders with the provided title text.  
**Expected Behavior:** The button should display the provided title text.

### 2. Rendering as primary variant by default

**Description:** Tests that the Button component uses the primary variant styling by default when no variant is specified.  
**Expected Behavior:** The button should have the primary styling class (bg-primary).

### 3. Rendering with outline variant

**Description:** Checks that the Button component correctly applies outline variant styling when specified.  
**Expected Behavior:** The button should have the outline styling classes (bg-background, border-secondary).

### 4. Rendering with transparent variant

**Description:** Validates that the Button component correctly applies transparent variant styling.  
**Expected Behavior:** The button should have the transparent styling class (bg-transparent).

### 5. Rendering with default M size

**Description:** Tests that the Button component uses the medium (M) size styling by default.  
**Expected Behavior:** The button should have the medium size padding classes (px-3 py-2).

### 6. Rendering with XL size

**Description:** Checks that the Button component correctly applies extra large (XL) size styling when specified.  
**Expected Behavior:** The button should have the XL size padding classes (px-7 py-4).

### 7. Rendering in disabled state

**Description:** Validates that the Button component correctly renders in a disabled state when the disabled prop is true.  
**Expected Behavior:** The button should have the disabled attribute.

### 8. Showing spinner when loading

**Description:** Tests that the Button component displays a loading spinner and hides the title text when isLoading is true.  
**Expected Behavior:** The spinner should be present and the title text should not be visible.

### 9. Handling click events

**Description:** Verifies that the Button component properly handles click events by invoking the provided onClick handler.  
**Expected Behavior:** The onClick handler function should be called once when the button is clicked.

### 10. Rendering with left icon

**Description:** Tests that the Button component correctly renders with a left icon when provided.  
**Expected Behavior:** The SVG icon should be present inside the button.

### 11. Rendering with right icon

**Description:** Tests that the Button component correctly renders with a right icon when provided.  
**Expected Behavior:** The SVG icon should be present inside the button.

### 12. Rendering as an anchor element

**Description:** Verifies that the Button component renders as an anchor (`<a>`) element when an href prop is provided.  
**Expected Behavior:** The rendered element should be an anchor with the specified href attribute.

### 13. Applying same styling to anchor variant

**Description:** Tests that the Button component applies the same styling to the anchor variant as it does to the button variant.  
**Expected Behavior:** The anchor element should have the same styling classes as a button with equivalent props.

### 14. Accepting additional CSS classes

**Description:** Validates that the Button component accepts and applies additional CSS classes provided through the className prop.  
**Expected Behavior:** The button should have the custom class applied alongside the default styling classes.

## Testing Approach

These tests use React Testing Library to focus on testing the component as users would interact with it, prioritizing:

1. Visual presentation and styling based on different props
2. Behavior during user interactions like clicks
3. Accessibility for different states (disabled, loading)
4. Proper rendering of different variants (button vs anchor)

This comprehensive test suite ensures the Button component remains robust and behaves consistently across all its possible configurations.
