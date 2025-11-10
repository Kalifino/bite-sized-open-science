/**
 * ========================================================
 * FILE: src/theme/NavbarItem/DropdownNavbarItem/index.js
 * PURPOSE:
 *   Customizes the default Docusaurus DropdownNavbarItem to
 *   add mouse hover and click behavior.
 *
 * FEATURES:
 *   - Opens dropdown on hover (focus)
 *   - Closes dropdown shortly after mouse leaves
 *   - Navigates to a link if `props.to` is provided
 *
 * NOTES:
 *   - Uses `useRef` to store timeout for delayed blur
 *   - Ensures accessibility via `role="button"` and `tabIndex=0`
 * ========================================================
 */

import React, { useRef } from 'react';
import Link from '@docusaurus/Link';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';

/* ========================================================
 * CUSTOM DROPDOWN NAVBAR ITEM COMPONENT
 * --------------------------------------------------------
 * Wraps Docusaurus DropdownNavbarItem to add:
 *   1. Hover focus
 *   2. Delayed blur on mouse leave
 *   3. Click navigation
 * ======================================================== */
export default function CustomDropdownNavbarItem(props) {
  const timeoutRef = useRef(null);

  /* ------------------------------------------------------
   * Focus dropdown on mouse enter
   * ------------------------------------------------------ */
  const handleMouseEnter = (e) => {
    e.currentTarget.focus();
  };

  /* ------------------------------------------------------
   * Blur dropdown with slight delay on mouse leave
   * ------------------------------------------------------ */
  const handleMouseLeave = (e) => {
    timeoutRef.current = setTimeout(() => {
      e.currentTarget.blur();
    }, 200);
  };

  /* ------------------------------------------------------
   * Navigate to `props.to` URL if clicked
   * ------------------------------------------------------ */
  const handleClick = (e) => {
    if (props.to) {
      window.location.href = props.to;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <DropdownNavbarItem {...props} />
    </div>
  );
}
