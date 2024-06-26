import { Button, Grid, Header } from "semantic-ui-react";
import WidgetDropzone from "./WidgetDropzone";
import { useEffect, useState } from "react";
import PhotoWidgetCropper from "./PhotoWidgetCropper";


interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

export default function ProfileWidget({loading,uploadPhoto}: Props){
                                //any and [] to clear warnings
   const [ files , setFiles] = useState<any>([]);
   const [ cropper , setCropper] = useState<Cropper>();

   function onCrop() {
    if (cropper) {
        cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!))
    }
   }

   useEffect(() => {
    return () => {
        files.forEach((file: any) => URL.revokeObjectURL(file.preview))
       
    }
   }, [files])

   
    return(
     
        <Grid>
            <Grid.Column width={4}> 
                <Header sub color="teal" content='Add photo'/>
                <WidgetDropzone setFiles={setFiles}/>
            </Grid.Column>
            <Grid.Column width={1}/> 
            <Grid.Column width={4}> 
                <Header sub color="teal" content='Resize'/>  
                {files && files.length >0 && (
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview}/>
                )}
            </Grid.Column>
            <Grid.Column width={1}/> 
            <Grid.Column width={4}> 
                <Header sub color="teal" content='upload'/>  
                    {files && files.length > 0 &&
                    <>
                    <div className="img-preview" style={{minHeight:200, overflow: 'hidden'}}></div>
                    <Button.Group widths={2}>
                        <Button loading={loading} onClick={onCrop} positive icon='check'/>
                        <Button diasbled={loading} onClick={() => setFiles([])}  icon='close'/>
                    </Button.Group>
                    </>}
            </Grid.Column>
        </Grid>    
    
    )
}            