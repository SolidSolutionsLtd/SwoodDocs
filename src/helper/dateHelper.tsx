import { differenceInDays, parse } from 'date-fns'

export const isNew = (dateStr: string | undefined, days: number = 30) => {
	if (!dateStr) return false

	const today = new Date()
	const parsedDate = parseDate(dateStr)
	return differenceInDays(today, parsedDate) < days
}

export const parseDate = (dateStr: string | undefined) => {
	if (!dateStr) return 0
	return parse(dateStr, 'dd/MM/yyyy', new Date())
}
