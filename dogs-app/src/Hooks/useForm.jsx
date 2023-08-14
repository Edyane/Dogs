import React, { useState } from 'react';

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido',
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message:
            'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.',
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize números apenas.',
    },
};

export default useForm;
