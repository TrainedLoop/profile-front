/**
 * Hook to scroll smoothly to a section by ID
 */
export function useScrollToSection() {
  return (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
}
