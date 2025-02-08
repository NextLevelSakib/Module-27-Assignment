class formHelper {
    getBase64(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (err) => {
                reject(err);
            };
        });
    }



    IsEmpty(value){
        return value.length === 0;
    }

}





export const {getBase64, IsEmpty} = new formHelper();