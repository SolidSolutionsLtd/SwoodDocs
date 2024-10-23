export const ArithmeticalFunctions = [
	{ name: '= {equal to}', description: 'Checks if two elements are equal. In assignments, assigns the value of the right element to the left' },
	{ name: '> {greater than}', description: 'Checks if one element is greater than the other' },
	{ name: '< {less than}', description: 'Checks if one element is less than the other' },
	{ name: '>= {greater than or equal to}', description: 'Checks if one element is greater than or equal to the other' },
	{ name: '<= {less than or equal to}', description: 'Checks if one element is less than or equal to the other' },
	{ name: '/= or <> {not equal to}', description: 'Checks if two elements are not equal' },
	{ name: '+ {plus}', description: 'Adds two elements together' },
	{ name: '- {minus}', description: 'Subtracts one element from another' },
	{ name: '* {multiply}', description: 'Multiplies two elements' },
	{ name: '/ {divide}', description: 'Divides one element by another' },
	{ name: '^ {exponentiation}', description: 'Raises a number to the power of another', example: '<span class="CP">8^2</span> represents <span class="value">8²</span>' },
	{ name: 'SQR(number) {square root}', description: 'Returns the square root of a number', example: '<span class="CP">SQR(64)</span> returns <span class="value">8</span> because <span class="value">8² = 64</span>' },
]

export const MathematicalFunctions = [
	{ name: 'PI {pi}', description: 'The ratio of a circle’s circumference to its diameter' },
	{ name: 'SIN(number) {sine}', description: 'Trigonometric function returning the ratio of the opposite side to the hypotenuse (in radians)' },
	{ name: 'COS(number) {cosine}', description: 'Trigonometric function returning the ratio of the adjacent side to the hypotenuse (in radians)' },
	{ name: 'TAN(number) {tangent}', description: 'Trigonometric function returning the ratio of the opposite side to the adjacent side (in radians)' },
	{ name: 'ATAN(number) {arctangent}', description: 'Inverse of the tangent function, returning an angle in radians' },
	{ name: 'FIX(decimal) {integer part}', description: 'Returns the integer part of a decimal number', example: '"FIX(1.99999)" returns 1' },
	{ name: 'ABS(number) {absolute value}', description: 'Returns the positive value of a number', example: '"ABS(-1.5)" returns 1.5' },
	{ name: 'MOD {modulo}', description: 'Returns the remainder of the division of two numbers', example: '"9 MOD 4" returns 1 because 9 = 2 × 4 + 1' },
	{ name: 'ROUND(number, digits) {rounding}', description: 'Rounds a number to the specified number of digits', example: '"ROUND(1.26, 1)" returns 1.3' },
]

export const BooleanFunctions = [
	{ name: 'AND {conjunction}', description: 'Returns true if both conditions are true', example: '<span class="CP">a AND b</span> is <span class="value">TRUE</span> if both a and b are <span class="value">TRUE</span>' },
	{ name: 'OR {disjunction}', description: 'Returns true if at least one of the conditions is true', example: '<span class="CP">a OR b</span> is <span class="value">TRUE</span> if either a or b is <span class="value">TRUE</span>' },
	{ name: 'NOT(boolean) {negation}', description: 'Returns the opposite of the boolean value', example: '<span class="CP">NOT(a)</span> is <span class="value">TRUE</span> if a is <span class="value">FALSE</span>' },
	{ name: 'NAND {not-and}', example: '<span class="CP">L = NOT(a AND b)</span>' },
	{ name: 'NOR {not-or}', example: '<span class="CP">L = NOT(a OR b)</span>' },
	{ name: 'XOR {exclusive or}', example: '<span class="CP">L = (a AND NOT(b)) OR (NOT(a) AND b)</span>' },
	{ name: 'XNOR {exclusive not-or}', example: '<span class="CP">(a AND b) OR (NOT(a) AND NOT(b))</span>' },
	{ name: 'TRUE', description: 'Always returns true' },
	{ name: 'FALSE', description: 'Always returns false' },
]

export const TextFunctions = [
	{ name: 'STR(number)', description: 'Converts a number into a string', example: '<span class="CP">STR(3)</span> returns <span class="value">3</span>' },
	{ name: 'VAL(text)', description: 'Converts the numeric part of a string into a number', example: '<span class="CP">VAL("1615")</span> returns <span class="value">1615</span>' },
	{ name: 'LEN(text)', description: 'Returns the number of characters in a string, including spaces', example: '<span class="CP">LEN("SolidWorks SWOOD")</span> returns <span class="value">16</span>' },
	{ name: 'TRIM(text)', description: 'Removes extra spaces, keeping only single spaces between words', example: '<span class="CP">TRIM("  SolidWorks SWOOD  ")</span> returns <span class="value">SolidWorks SWOOD</span>' },
	{ name: 'MID(text, start, [length])', description: 'Returns a substring starting at the specified position with the specified length', example: '<span class="CP">MID("SolidWorks SWOOD", 12, 2)</span> returns <span class="value">SW</span>' },
	{ name: 'LEFT(text, length)', description: 'Returns the leftmost part of a string with the specified length', example: '<span class="CP">LEFT("SolidWorks SWOOD", 3)</span> returns <span class="value">Sol</span>' },
	{ name: 'RIGHT(text, length)', description: 'Returns the rightmost part of a string with the specified length', example: '<span class="CP">RIGHT("SolidWorks SWOOD", 3)</span> returns <span class="value">OOD</span>' },
	{ name: 'INSTR([start], text, search)', description: 'Returns the position of the search string within a text, starting from the left', example: '<span class="CP">INSTR(7, "SolidWorks SWOOD", "W")</span> returns <span class="value">13</span>' },
	{ name: 'INSTRREV(text, search, [start])', description: 'Returns the position of the search string within a text, starting from the right', example: '<span class="CP">INSTRREV("SolidWorks SWOOD", "W", 12)</span> returns <span class="value">6</span>' },
	{ name: 'REPLACE(text, search, replacement, [start], [count])', description: 'Replaces occurrences of the search string with the replacement string', example: '<span class="CP">REPLACE("SOLIDWORKS SWOOD", "O", "A", 11, 1)</span> returns <span class="value">SOLIDWORKS SWAOD</span>' },
	{ name: 'CONTAINS', description: 'Checks if the string contains another string', example: '<span class="CP">SolidWorks SWOOD" CONTAINS "OO</span> returns <span class="value">TRUE</span>' },
	{ name: 'STARTSWITH', description: 'Checks if the string starts with the specified text', example: '<span class="CP">SolidWorks SWOOD" STARTSWITH "So</span> returns <span class="value">TRUE</span>' },
	{ name: 'ENDSWITH', description: 'Checks if the string ends with the specified text', example: '<span class="CP">SolidWorks SWOOD" ENDSWITH "OD</span> returns <span class="value">TRUE</span>' },
	{ name: 'UCASE(text)', description: 'Converts the string to uppercase', example: '<span class="CP">UCASE("SolidWorks SWOOD")</span> returns <span class="value">SOLIDWORKS SWOOD</span>' },
]

export const SwoodFunctions = [
	{ name: 'MSG', description: 'Displays a message in test mode or a warning in the FeatureManager', example: 'MSG = "Message"' },
	{ name: 'VAR.MSG', description: 'Displays a message associated with a parameter', example: 'VAR.MSG = "Message"' },
	{ name: 'VALIDE', description: 'Shows an error if set to FALSE, both in test mode and in the FeatureManager', example: 'VALIDE = FALSE' },
	{ name: 'VAR.VALIDATE', description: 'Displays an error related to a specific parameter', example: 'VAR.VALIDE = FALSE' },
	{ name: 'EXPOSE', description: 'Controls whether a parameter is exposed', example: 'VAR.EXPOSE = FALSE' },
	{ name: 'READONLY', description: 'Sets a parameter as read-only', example: 'VAR.READONLY = TRUE' },
	{ name: 'POSSIBLEVALUES', description: 'Defines possible values for a parameter, with optional aliases', example: 'VAR.POSSIBLEVALUES = "a|alpha;b|bravo;c|charlie"' },
	{ name: 'POSSIBLEVALUESFILTER', description: 'Reorganizes or filters possible values of a parameter', example: 'VAR.POSSIBLEVALUESFILTER = "2;3"' },
	{ name: 'DRIVING', description: 'Controls whether a SolidWorks link drives a parameter', example: 'VAR.DRIVING = FALSE' },
]

export const ScriptVariableTypes = [
	{ name: 'STRING', description: 'Text variable, usable with String parameters', example: 'DIM A AS STRING' },
	{ name: 'DOUBLE', description: 'Real number variable, usable with the Distance, Angle, Integer and Decimal parameters', example: 'DIM A AS DOUBLE' },
	{ name: 'BOOLEAN', description: 'Boolean variable, usable with Boolean parameters', example: 'DIM A AS BOOLEAN' },
]
