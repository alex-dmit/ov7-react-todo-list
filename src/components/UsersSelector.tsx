import React from 'react'
import { User } from '../@types'

type Props = {
    users: User[],
    userId: number
    setUserId: React.Dispatch<React.SetStateAction<number>>
}

export default function UsersSelector({ users, userId, setUserId }: Props) {
    return (
        <select value={userId} onChange={e => setUserId(+e.target.value)}>
            {
                users.map(user => {
                    return <option key={user.id} value={user.id}>{user.name}</option>
                })
            }
        </select>
    )
}