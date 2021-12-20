import React, {useState} from "react";
import {CategorySection} from "../../components/Money/CategorySection/CategorySection";
import {TagsSection} from "../../components/Money/TagsSection/TagsSection";
import {NoteSection} from "components/Money/NoteSection/NoteSection";
import {DateSection} from "../../components/Money/DateSection/DateSection";
import {NumberPadSection} from "../../components/Money/NumberSection/NumberPadSection";
import {MyLayout, NoteDateWrapper} from "./Money.styles";
import {format} from 'date-fns';
import useAccountStatement from "../../hooks/useAccountStatement";

const defaultFormData = {
	tagId: 0,
	note: '',
	date: new Date(),
	category: '-' as Category,
	amount: 0
}

const Money = () => {
	const [selected, setSelected] = useState(defaultFormData)
	const { addAccountStatement} = useAccountStatement()


	type Selected = typeof selected
	const onChangeTemplate = (obj: Partial<Selected>) => {
		setSelected({...selected, ...obj})
	}

	const submit = () => {
		addAccountStatement(selected)
		// set all input area to initial state
		setSelected(defaultFormData)
	}

	return (
		<MyLayout>
			{/*{format((selected.date), "yyyy/MM/dd E H:mma")}*/}
			<CategorySection
				value={selected.category}
				onChangeCategory={newCategory => onChangeTemplate({category: newCategory})}/>
			<TagsSection
				value={selected.tagId}
				onChangeTag={newTagId => onChangeTemplate({tagId: newTagId})}
				selectedCategory={selected.category}/>
			<NoteDateWrapper>
				<NoteSection
					value={selected.note}
					onChangeNote={newNote => onChangeTemplate({note: newNote})}/>
				<DateSection
					value={selected.date}
					onChangeDate={newDate => onChangeTemplate({date: newDate})}/>
			</NoteDateWrapper>
			<NumberPadSection
				value={selected.amount}
				onChange={newAmount => onChangeTemplate({amount: newAmount})}
				onOk={submit}/>
		</MyLayout>
	)
}

export default Money;