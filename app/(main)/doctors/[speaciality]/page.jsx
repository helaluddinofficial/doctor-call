import React from 'react'

const SpeacialityPage = async ({params}) => {
	const {speaciality}= await params
	return (
		<div>
			{speaciality}
		</div>
	)
}

export default SpeacialityPage
