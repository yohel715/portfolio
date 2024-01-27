export const addClassOnScroll = (className: string, scrollThreshold: number, targetSelector = '') => {
   // Check if running on the client side
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      const targetElement = document.querySelector(targetSelector);

      if (scrollY > scrollThreshold) {
        targetElement?.classList.add(className);
      } else {
        targetElement?.classList.remove(className);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  // Return a no-op function for server-side rendering
  return () => {};
};
