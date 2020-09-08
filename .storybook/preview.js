import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";


export const parameters = {
  controls: { expanded: true },
  backgrounds: {
      default: 'Default theme',
      values: [
          { 
            name: "Default theme",
            value: "#ffffff", 
            default: true 
          },
          { 
            name: "Dark theme", 
            value: "#4a4b53" 
          },
        ],
      }
    }

export const decorators = [
  withContexts(contexts)
]
