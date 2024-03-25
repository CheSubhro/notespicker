import parse from 'html-react-parser';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';


export const ShowPost = ({ content }) => {
    return (
        <>  
            
            <Container>
                <Card>
                <Typography variant="h6" gutterBottom>
                    Note
                </Typography>
                    <CardContent>
                        <Typography variant="body1" component="div">
                            {parse(content)}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}
