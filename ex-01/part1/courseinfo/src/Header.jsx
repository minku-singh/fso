import React from 'react'

const Header = (props) => {
    console.log(props);
    const {course} = props;
    return (
        <h1>{course}</h1>
    )
}

export default Header
