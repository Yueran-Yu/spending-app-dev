type Category = '-' | '+'

type ParamsProps = {
	id: string
}

type MyTag = {
	id: number,
	tag: string
}

type TagProps = {
	value: number
	onChangeTag: (newTagId: number) => void
	selectedCategory: Category
}

type NoteProps = {
	value: string
	onChangeNote: (newNote: string) => void
}

type CategoryProps = {
	value: Category
	onChangeCategory: (newCategory: Category) => void
}

type DateProps = {
	value: Date
	classN?: string
	onChangeDate: (newDate: Date) => void
}

type NumberPadProps = {
	value: number
	onChange: (value: number) => void
	onOk?: () => void
}

type TagsListContextType = {
	expenseTags: MyTag[]
	incomeTags: MyTag[]
	onAddIncomeTags: (tag: MyTag) => void
	onAddExpenseTags: (tag: MyTag) => void
	TotalExpenseTagsList: MyTag[]
	TotalIncomeTagsList: MyTag[]
}

type ButtonType = {
	typeD: string
	children: ReactElement
}

type HashMapType = {
	[key: string]: ReactElement
}

type AccountStatementType = {
	uniqueId: number
	tagId: number
	note: string
	date: Date
	category: Category
	amount: number
}

type InputType = {
	label: string
	classN: string
} & React.InputHTMLAttributes<HTMLInputElement>


type ChartType = [
	keys: string[],
	values: number[]
]