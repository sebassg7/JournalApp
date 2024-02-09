export const fileUpload = async( file ) => {

    if( !file ) throw new Error( 'No tenemos ningún archivo a subir' );

    const cloudUrl = 'https://api.cloudinary.com/v1_1/ddy1ldfqz/upload';

    const formData = new FormData();

    formData.append( 'upload_preset','react-journal' );
    formData.append( 'file',file );

    try {
        
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        
        if( !resp.ok ) throw new Error( 'No se pudo subir la imagen' );

        const clodResp = await resp.json();
        

        return clodResp.secure_url;


    } catch ( error ) {
        console.log(error);
        throw new Error( error.message )
    }
};
