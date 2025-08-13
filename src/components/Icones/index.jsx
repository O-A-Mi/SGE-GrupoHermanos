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
    );
}

export function IconSearch(){
    return(
        <FontAwesomeIcon icon={['fas', 'magnifying-glass']} /> 
    );
}

export function IconAlternar(){
    return(
        <FontAwesomeIcon icon={['fas', 'align-justify']} />
    );
}

export function IconColuna(){
    return(
        <FontAwesomeIcon icon={['fas', 'table-columns']} />
    );
}

export function IconPrint(){
    return(
        <FontAwesomeIcon icon={['fas', 'print']} />
    );
}

export function IconExport(){
    return(
        <FontAwesomeIcon icon={['fas', 'file-export']} />
    );
}

export function IconHide(){
    return(
        <FontAwesomeIcon icon={['far', 'eye-slash']} />
    );
}

export function IconRight(){
    return(
        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
    )
}

