import { IconCompass, IconWallet, IconSettings, IconBell } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import ActionIcon from '../../Button/ActionIcon'
import { BottomBar, Div } from './BottomBar.styles'

const BottomNav = ({ matches }) => {
    const item = [
        {
            label: 'Home',
            icon: <IconWallet size={26} />,
            slug: '/',
        },
        {
            label: 'Explore',
            icon: <IconCompass size={26}/>,
            slug: '/explore',
        },
        {
            label: 'Notifications',
            icon: <IconBell size={26} />,
            slug: '/notification',
        },
        {
            label: 'Settings',
            icon: <IconSettings size={26} />,
            slug: '/settings',
        }
    ]
    return (
        <Div>
            <BottomBar $matches={matches}>
                {
                    item?.map((items, index) => {
                        return (
                            <NavLink
                                to={items?.slug}
                                activeclassname="active"
                                key={index}>
                                <ActionIcon>
                                    {items?.icon}
                                </ActionIcon>
                            </NavLink>
                        )
                    })
                }
            </BottomBar>
        </Div>
    )
}

export default BottomNav