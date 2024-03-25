import { useState } from 'react'
import Tiptap from '../Tiptap/Tiptap';
import { ShowPost } from './ShowPost';

const Home = () => {

	const [htmlContent, setHtmlContent] = useState('');

	const handleEditorContentSave = (html) => {
		// console.log(html)
		setHtmlContent(html)
	}
	return (
			<>
					<Tiptap onEditorContentSave={handleEditorContentSave}/>
					<ShowPost content={htmlContent}/> 
			</>
	);
};

export default Home;
