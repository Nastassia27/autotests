import React from 'react'
import {UserType} from './HW8'
import s from './HW8.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({u}) => {
    return (

        <TableRow
            key={'hw8-user-' + u._id + '-' + u.age}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell id={'hw8-user-name-' + u._id} component="th" scope="row">
                {u.name}
            </TableCell>
            <TableCell id={'hw8-user-age-' + u._id} align="left"> {u.age}</TableCell>


        </TableRow>

       /* <tr id={'hw8-user-' + u._id + '-' + u.age} className={s.item}>
            <td id={'hw8-user-name-' + u._id} className={s.nameCol}>
                {u.name}

            </td>
            <td id={'hw8-user-age-' + u._id}>
                {u.age}

            </td>
        </tr>*/
    )
}

export default User
