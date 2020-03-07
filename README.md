# react-item-table
Create a Table component using React,
Column details for Table is passed as object array 
prop to the Table component

[
  {
    name:'Item',
    inputType: 'select'
  },
  {
    name:'Material Fee',
    inputType: 'currency'
  },  
  {
    name:'Packing Fee',
    inputType: 'currency'
  },
  {
    name:'Unpacking Fee',
    inputType: 'currency'
  }
]
Sample column list passed as a prop to Table component
	
	If inputType is,
		select 	- Show a select box
		currency 	- show a text field with dollar icon
		text		- show a normal text field
	
There must be a Row component as a child component and it can be reused for each row.
Row can have Select box (Dropdown list) and Text Field Input
Select Box must be a custom component
Text Field Input component can add a dollar logo in left side, if the input is for a currency value.
Delete Icon in the right most side of the Row to delete a row in the table.
There must be a Add Item button below table for adding an item to the table.
Autofocus to the first Text Input Field on adding an item.
