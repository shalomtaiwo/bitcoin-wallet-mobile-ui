import { IconCompass, IconWallet, IconSettings, IconBell } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import ActionIcon from '../../Button/ActionIcon'
import { BottomBar } from './BottomBar.styles'

const BottomNav = ({ matches }) => {
    const item = [
        {
            label: 'Home',
            icon: <IconWallet />,
            slug: '/',
        },
        {
            label: 'Activity',
            icon: <IconCompass />,
            slug: '/',
        },
        {
            label: 'Community',
            icon: <IconBell />,
            slug: '/',
        },
        {
            label: 'Settings',
            icon: <IconSettings />,
            slug: '/settings',
        }
    ]
    return (
        <div>
            <BottomBar $matches={matches}>
                {
                    item?.map((items, index) => {
                        return (
                            <NavLink
                                to={items?.slug}
                                activeClassName="active"
                                key={index}>
                                <ActionIcon>
                                    {items?.icon}
                                </ActionIcon>
                            </NavLink>
                        )
                    })
                }
            </BottomBar>
        </div>
    )
}

export default BottomNav