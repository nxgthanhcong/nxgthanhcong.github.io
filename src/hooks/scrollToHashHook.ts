import { useEffect } from "react";

// Sections render only after their JSON arrives, so on a reload with a hash
// (e.g. /#experiences) the browser's own jump finds nothing to scroll to.
// Wait until the target exists and no section is still loading, then scroll.
const useScrollToHash = (timeoutMs = 10000) => {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let done = false;
    const tryScroll = () => {
      if (done) return;
      const target = document.getElementById(id);
      const stillLoading = document.querySelector('[role="status"]');
      if (target && !stillLoading) {
        done = true;
        target.scrollIntoView({ block: "start" });
        observer.disconnect();
        window.clearTimeout(timer);
      }
    };

    const observer = new MutationObserver(tryScroll);
    observer.observe(document.body, { childList: true, subtree: true });
    const timer = window.setTimeout(() => observer.disconnect(), timeoutMs);
    tryScroll();

    return () => {
      done = true;
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [timeoutMs]);
};

export default useScrollToHash;
