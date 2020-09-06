import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs} from "@storybook/addon-knobs"

/*addParameters({
  backgrounds: [
    { 
      name: "Default theme",
      value: "#ffffff", 
      default: true 
    },
    { 
      name: "Dark theme", 
      value: "#896B99" 
    }
  ]
});*/
export const parameters = {
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
            value: "#896B99" 
          },
        ],
      }
    }

export const decorators = [
  withContexts(contexts),
  withKnobs
]
