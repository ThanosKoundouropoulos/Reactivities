import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";



export default function NotFound(){
    return(
        <Segment placeholder>
            <Header icon>
                <Icon name="search"/>
                OOPS WE looked everywhere
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities'>
                    RETURN
                </Button>
            </Segment.Inline>
        </Segment>
    )
}