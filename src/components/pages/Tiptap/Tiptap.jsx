import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import CodeIcon from '@mui/icons-material/Code';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const extensions = [
    StarterKit,
    Underline,
]

const content = ``

const Tiptap = ({ onEditorContentSave }) => {


    const editor = useEditor({
        extensions,
        content
    })

    if (!editor) {
        return null
    }

    const handleEditorContent = () => {
        const html = editor.getHTML()
        // console.log(html);
        onEditorContentSave(html)
    }


    return (
        <>
            <Container >
                <Typography variant="h4" align="center" gutterBottom>
                    Notes Picker
                </Typography>    
            <Box boxShadow={2} p={2} mb={4}>
                <Toolbar >
                    <Button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        disabled={!editor.can().chain().focus().toggleBold().run()}
                        variant={editor.isActive('bold') ? 'contained' : 'outlined'}
                        startIcon={<FormatBoldIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        disabled={!editor.can().chain().focus().toggleItalic().run()}
                        variant={editor.isActive('italic') ? 'contained' : 'outlined'}
                        startIcon={<FormatItalicIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        disabled={!editor.can().chain().focus().toggleUnderline().run()}
                        variant={editor.isActive('underline') ? 'contained' : 'outlined'}
                        startIcon={<FormatUnderlinedIcon />}
                    >
                    </Button>                    
                    <Button
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        disabled={!editor.can().chain().focus().toggleCode().run()}
                        variant={editor.isActive('code') ? 'contained' : 'outlined'}
                        startIcon={<CodeIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().setParagraph().run()}
                        variant={editor.isActive('paragraph') ? 'contained' : 'outlined'}
                        startIcon={<FormatAlignLeftIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        variant={editor.isActive('heading', { level: 2 }) ? 'contained' : 'outlined'}
                        startIcon={<FormatSizeIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        variant={editor.isActive('bulletList') ? 'contained' : 'outlined'}
                        startIcon={<FormatListBulletedIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        variant={editor.isActive('orderedList') ? 'contained' : 'outlined'}
                        startIcon={<FormatListNumberedIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        variant={editor.isActive('blockquote') ? 'contained' : 'outlined'}
                        startIcon={<FormatQuoteIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().setHorizontalRule().run()}
                        variant={editor.isActive('horizontalRule') ? 'contained' : 'outlined'}
                        startIcon={<HorizontalSplitIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().setHardBreak().run()}
                        variant={editor.isActive('hardBreak') ? 'contained' : 'outlined'}
                        startIcon={<CallSplitIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().chain().focus().undo().run()}
                        startIcon={<UndoIcon />}
                    >
                    </Button>
                    <Button
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().chain().focus().redo().run()}
                        startIcon={<RedoIcon />}
                    >
                    </Button>

                </Toolbar>
                <Box>
                    <EditorContent editor={editor} />
                </Box>
                    <Button
                        onClick={handleEditorContent}
                        variant="contained"
                        color="primary"
                        style={{ marginLeft: 'auto' }}
                    >
                        Save
                    </Button>

            </Box>
            </Container>
        </>
    )
}

export default Tiptap