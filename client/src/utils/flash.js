import { toast } from 'react-toastify';

function displayFlashMessages(flash){
      Object.keys(flash).forEach((key)=>{
        const messages=flash[key];
        if(messages!==null){
          const messageCategory=key;
          messages.forEach((message)=>{
            toast[messageCategory](message)
          })
        }
      })
}

export default displayFlashMessages;