export type elementData = {
 [elementId: string]: {
   elementType: string;
   // styles should be an array of strings that represent css property and values
   styles: string[];
   children: elementData[];
 }
}

export const initialElementData: elementData[] = [
  {'element-1': {
    'elementType': 'h1',
    'children': [],
    'styles': ["color: red", "font-size: 14px"]
    },
  }
];

