import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, far, fab);

export function IconReply(){
    return(
        <FontAwesomeIcon icon={['fas', 'reply']} />
    );
}

export function IconFile(){
    return(
        <FontAwesomeIcon icon={['far', 'file']} />
    );
}

export function IconServer(){
    return(
        <FontAwesomeIcon icon={['fas', 'server']} />
    )
}