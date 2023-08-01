import React from 'react';

const useForm = () => {
    const [value, setValue] = useState('');

    function onChange({ target }) {
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange
    };
};

export default useForm;