import { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/layout/stores/store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';



export default observer(function ActivityList(){
    const {activityStore} = useStore();
    const {deleteActivity,activitiesByDate,loading} = activityStore;
    const [target ,setTarget] = useState('');

    function handleActivityDelete(e:SyntheticEvent<HTMLButtonElement> , id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
   

   
   
    return(
       <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity =>(
                    //we give a key to show react thsoe are unique items
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city},{activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                { /* we wrap the onclick in am arrow function so it doesnt execut when the button is render but when we press it */}
                                <Button as={Link} to={ `/activities/${activity.id}`}floated='right' content='View' color='blue'/>
                                <Button 
                                //we macth a button with the activity so the loading animation happesn individualy
                                    name={activity.id}
                                    loading={loading && target === activity.id} 
                                    onClick={(e) => handleActivityDelete(e,activity.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red'
                                    
                                    />
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>

                    </Item>
                ))}
            </Item.Group>
       </Segment>
    )
})