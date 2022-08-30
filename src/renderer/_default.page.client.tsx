import ReactDOM from "react-dom/client";
import { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import "@/styles/index.css";

export const clientRouting = true;

let root: ReactDOM.Root | null;
export const render = async (
  context: PageContextBuiltInClient & PageContext
) => {
  console.log("WORK");
  const { Page, pageProps } = context;
  const container = document.getElementById("root") as HTMLElement;

  if (container.innerHTML === "" || !context.isHydration) {
    // spa
    if (!root) root = ReactDOM.createRoot(container);
    root.render(<Page {...pageProps} />);
  } else {
    // ssr
    root = ReactDOM.hydrateRoot(container, <Page {...pageProps} />);
  }
};
