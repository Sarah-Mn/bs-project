import type { Preview } from '@storybook/nextjs-vite';
import "../src/styles/globals.css";
// import * as NextImage from "next/image";

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props: any) => {
//     return <img {...props} />;
//   },
// });


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;