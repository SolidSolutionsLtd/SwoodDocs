export const PanelLaminateProperties = [
	{ name: 'Board Length', type: 'Decimal', pro: false, description: 'Specifies the maximum available board length. A warning is displayed if the panel exceeds this length, accounting for grain direction' },
	{ name: 'Board Width', type: 'Decimal', pro: false, description: 'Specifies the maximum available board width. A warning is displayed if the panel exceeds this width, accounting for grain direction' },
	{
		name: 'Exclude',
		type: 'Yes/No',
		pro: false,
		description: 'When set to <span class="value">Yes</span>, panels made of this material will be excluded from reports',
	},
	{
		name: 'ExcludeID',
		type: 'Yes/No',
		pro: true,
		description: 'When set to <span class="value">Yes</span>, panels made of this material will not receive an ID by macro',
	},
	{
		name: 'Material Type',
		type: 'String',
		pro: true,
		description: 'Categorises or groups the panels by material type in reports.. Default value must be <span class="value">Core</span>',
	},
	{ name: 'Paint', type: 'Yes/No', pro: true, description: 'Used for laminate materials to classify as paint' },
	{ name: 'Beam Saw', type: 'Yes/No', pro: true, description: 'Used to define material as Beam Saw' },
	{ name: 'Weldment', type: 'Yes/No', pro: true, description: 'Used to define Weldment component' },
]

export const EdgebandProperties = [
	{
		name: 'Extension',
		type: 'Decimal',
		pro: false,
		description: 'Adds an extension value when calculation the total edgeband length in Summary page',
	},
	{
		name: 'Minimum Length',
		type: 'Decimal',
		pro: false,
		description: 'Adds warning if edgeband does not meet the minimum length',
	},
	{
		name: 'Minimum Part Sustain',
		type: 'Decimal',
		pro: false,
		description: 'Adds warning if edgeband does not meet the minimum part sustain length',
	},
	{ name: 'Paint', type: 'Yes/No', pro: true, description: 'Classifies the edgeband material as paint' },
]
