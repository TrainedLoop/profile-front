/// <reference types="vite/client" />

declare module '*?raw' {
  const content: string;
  export default content;
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism/*' {
  const style: Record<string, React.CSSProperties>;
  export default style;
}
