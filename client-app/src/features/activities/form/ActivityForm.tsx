import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Grid, List, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/models/activity';

interface Props{
    activity: Activity | undefined;
    closeForm:() => void;
    createOrEdit: (activity: Activity) => void;

}
                                    //rename
export default function ActivityForm({activity: selectedActivity,closeForm,createOrEdit}:  Props){
    
    //display the content of this ability in the form if it is available
    //init state is either the selected activity we pass or the properties in an activity object
    //?? if left is null use right as initial state
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }
    const [activity , setActivity] = useState(initialState);

    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name ,value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}/>
            <Button floated='right' positive type='submit' content='Submit'/>
            <Button onClick={closeForm} floated='right'  type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
}