import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Header, Icon } from 'semantic-ui-react';


interface Props {
    setFiles: (files: any) => void;
}

//npm install --save react-dropzone
export default function WidgetDropzone({setFiles}: Props) {

    const dzStyles ={
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        paddingTop: '30px',
        textAling: 'center' as 'center',
        height: 200
    }

    const dzActive ={ 
        borderColor: '#eee'
    }

    const onDrop = useCallback((acceptedFiles: any[]) => {//creating a preview property
        setFiles(acceptedFiles.map((file:any) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }, [setFiles])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (  //using spread operator to pass all the styles

        <div {...getRootProps()} style={isDragActive ? {...dzStyles, ...dzActive} :dzStyles}>
        <input {...getInputProps()} />
            <Icon name='upload' size='huge'/>
            <Header content='Drop image here '/>
        </div>
    )
}