import React from 'react';

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const navigate = useNavigate();
    function handleLogout() {
        userLogout();
        navigate('/login');
    }
    const [mobile, setMobile] = React.useState(null);

    return (
        <nav className={styles.nav}>
        </nav>
    );
};

export default UserHeaderNav;
