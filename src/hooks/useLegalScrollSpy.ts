import { useEffect, useState } from 'react';

export function useLegalScrollSpy(sectionIds: string[], offset = 140) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = window.document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
