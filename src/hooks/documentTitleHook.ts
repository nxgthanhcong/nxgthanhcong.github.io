import { useEffect } from "react";

// Each page sets its own tab title. The static HTML for /resume and /projects
// carries a page-specific <title>, so pages must not rely on the initial one.
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
