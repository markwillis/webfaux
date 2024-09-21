export type InitialElementData = {
 [elementId: string]: {
   elementType: string;
   // styles should be an array of strings that represent css property and values
   styles: string[];
 }
}

export const initialElementData: InitialElementData[] = [
  {'element-1': {
    'elementType': 'h1',
    'styles': ["color: red", "font-size: 14px"]
    },
  }
];

