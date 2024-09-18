export const SwoodScriptParameters = [
	{ function: 'Sqr', description: 'Returns the square root of a supplied number', example: 'Dim1=Sqr(Dim2)' },
	{ function: 'FIX', description: 'Returns the integer portion of a number', example: 'Dim1=FIX(Dim2)' },
	{ function: 'Abs', description: 'Returns the absolute value of a number', example: 'Dim1=Abs(-Dim2) <br/> Dim1=+Dim2' },
	{ function: 'MOD', description: 'Divides two numbers and returns only the remainder', example: 'Dim1=Dim2 Mod Dim3' },
	{ function: 'VAL', description: 'Accepts a string as input and returns the numbers found in that string', example: 'Dim1=Val(Dim2)' },
	{ function: 'InStr', description: 'Returns the position of the first occurrence of a substring in a string', example: 'Dim1=InStr(String1,”String2”)' },
	{ function: 'Len', description: 'Returns the length of the specified string', example: 'Dim1=Len(String1)' },
	{ function: 'InstrRev', description: 'Returns the position of the first occurrence of a substring in another string, starting from the end', example: 'Dim1=InStr(String1,”String2”)' },
	{ function: 'UCASE', description: 'Function converts a string to all upper-case', example: 'String1=UCASE(String2)' },
	{ function: 'Trim', description: 'Removes all spaces from text except for spaces between words', example: 'String1=Trim(String2)' },
	{ function: 'Right', description: 'Return a specified number of characters from the right side of a string', example: 'String1=Right(String2,No*)' },
	{ function: 'Left', description: 'Return a specified number of characters from the left side of a string', example: 'String1=Left(String2,No*)' },
	{ function: 'Mid', description: 'Returns a string from a string', example: 'String1=Mid(String2,No*,No*)' },
	{ function: 'Replace', description: 'Returns a string, which is a substring of a string expression', example: 'String1=replace(String2,” ”,” “)' },
]

export const ListOfIFStatements = [
	{ statements: 'Standard If Statement', description: 'If statements allow specific lines of script to be executed if certain conditions are matched', example: 'If (Condition) THEN \n	ELSE IF (Condition) THEN \n ELSE \n	ENDIF' },
	{ statements: 'Boolean if Statement', description: 'If statements allow specific lines of script to be executed if certain conditions are matched', example: 'IF (Boolean) THEN \n	ELSE IF NOT(Boolean) THEN \n ELSE \n	ENDIF \n' },
]

export const ListOfConditions = [
	{ condition: 'CONTAINS', description: 'Checks to see if a stingcontains another string', example: 'If String1 CONTAINS (String2) THEN \n ENDIF' },
	{ condition: 'STARTSWITH', description: 'Checks to see if a sting starts with another string', example: 'If String1 STARTSWITH (String2) THEN \n ENDIF' },
	{ condition: 'ENDSWITH', description: 'Checks to see if a sting ends with another string', example: 'If String1 ENDSWITH (String2) THEN \n ENDIF' },
	{ condition: 'AND', description: 'Checks to see if multiple conditions are met', example: 'If (Condition) AND (Condition) THEN \n ENDIF' },
	{ condition: 'OR', description: 'Checks to see if one of multiple conditions are met', example: 'If String1 CONTAINS (String2) THEN \n ENDIF' },
]

export const MiscellaneousParameters = [
	{ condition: 'Expose', description: 'Controls if a parameter is exposed or not in the edit SWOOBBox window when added to a project', example: 'Alias.EXPOSE=TRUE \n -Parameter is exposed \n Alias.EXPOSE=FALSE \n -Parameter is not exposed' },
	{ condition: 'PI', description: 'The number π is a mathematical constant', example: '' },
]
